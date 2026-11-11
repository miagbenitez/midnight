import {
  projectConfiguration,
  type PortfolioProject,
  type ProjectPresentation,
} from './projects'

const githubApi = 'https://api.github.com'
const githubUsername = 'miagbenitez'

interface GitHubRepository {
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  fork: boolean
  archived: boolean
  disabled: boolean
  languages_url: string
}

interface GitHubProjectsResult {
  projects: PortfolioProject[]
  publicRepositoryCount: number
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function isGitHubRepository(value: unknown): value is GitHubRepository {
  if (!isRecord(value)) return false

  return (
    typeof value.name === 'string' &&
    (typeof value.description === 'string' || value.description === null) &&
    typeof value.html_url === 'string' &&
    (typeof value.homepage === 'string' || value.homepage === null) &&
    (typeof value.language === 'string' || value.language === null) &&
    typeof value.fork === 'boolean' &&
    typeof value.archived === 'boolean' &&
    typeof value.disabled === 'boolean' &&
    typeof value.languages_url === 'string'
  )
}

function getNextPage(linkHeader: string | null): string | undefined {
  if (!linkHeader) return undefined

  const nextLink = linkHeader.split(',').find((link) => link.includes('rel="next"'))
  const url = nextLink?.match(/<([^>]+)>/)?.[1]

  return url
}

async function fetchResponse(url: string, signal: AbortSignal): Promise<Response> {
  const response = await fetch(url, {
    headers: { Accept: 'application/vnd.github+json' },
    signal,
  })

  if (!response.ok) {
    if (response.status === 403 || response.status === 429) {
      const resetTime = response.headers.get('x-ratelimit-reset')
      const resetHint = resetTime
        ? ` Try again after ${new Date(Number(resetTime) * 1000).toLocaleTimeString()}.`
        : ' Try again later.'
      throw new Error(`GitHub API rate limit reached.${resetHint}`)
    }

    throw new Error(`GitHub API request failed (${response.status} ${response.statusText}).`)
  }

  return response
}

async function fetchJSON(url: string, signal: AbortSignal): Promise<unknown> {
  const response = await fetchResponse(url, signal)
  return response.json() as Promise<unknown>
}

async function fetchRepositories(signal: AbortSignal): Promise<GitHubRepository[]> {
  const repositories: GitHubRepository[] = []
  let nextUrl: string | undefined =
    `${githubApi}/users/${githubUsername}/repos?per_page=100&sort=updated`

  while (nextUrl) {
    const response = await fetchResponse(nextUrl, signal)
    const result: unknown = await response.json()

    if (!Array.isArray(result) || !result.every(isGitHubRepository)) {
      throw new Error('GitHub returned an unexpected repository list.')
    }

    repositories.push(...result)
    nextUrl = getNextPage(response.headers.get('link'))
  }

  return repositories
}

async function fetchLanguages(repository: GitHubRepository, signal: AbortSignal): Promise<string[]> {
  const result = await fetchJSON(repository.languages_url, signal)

  if (!isRecord(result)) {
    throw new Error(`GitHub returned unexpected language data for ${repository.name}.`)
  }

  const languages = Object.entries(result)
    .filter((entry): entry is [string, number] => typeof entry[1] === 'number')
    .map(([language]) => language)

  return languages.length > 0
    ? languages
    : repository.language
      ? [repository.language]
      : []
}

function getSafeHttpUrl(value: string | null | undefined): string | undefined {
  if (!value) return undefined

  try {
    const url = new URL(value)
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.toString() : undefined
  } catch {
    return undefined
  }
}

function matchesConfiguration(
  repository: GitHubRepository,
  configuration: ProjectPresentation,
): boolean {
  return (
    configuration.enabled &&
    repository.name.toLowerCase() === configuration.repository.toLowerCase()
  )
}

export async function fetchPortfolioProjects(
  signal: AbortSignal,
): Promise<GitHubProjectsResult> {
  const repositories = await fetchRepositories(signal)
  const publicRepositories = repositories.filter(
    (repository) => !repository.fork && !repository.archived && !repository.disabled,
  )
  const selectedRepositories = projectConfiguration.flatMap((configuration) => {
    const repository = publicRepositories.find((candidate) =>
      matchesConfiguration(candidate, configuration),
    )

    return repository ? [{ repository, configuration }] : []
  })

  const projects = await Promise.all(
    selectedRepositories.map(async ({ repository, configuration }) => {
      const manualTechnologies = configuration.technologies
        ?.map((technology) => technology.trim())
        .filter(Boolean)
      const technologies = manualTechnologies?.length
        ? manualTechnologies
        : await fetchLanguages(repository, signal)
      const project: PortfolioProject = {
        id: repository.name,
        title: configuration.title?.trim() || repository.name,
        description:
          configuration.description?.trim() ||
          repository.description?.trim() ||
          'No description has been added to this repository yet.',
        category: configuration.category,
        technologies,
        repositoryUrl: repository.html_url,
        liveDemo:
          getSafeHttpUrl(configuration.liveDemo) ?? getSafeHttpUrl(repository.homepage),
        image:
          getSafeHttpUrl(configuration.image) ??
          (configuration.image?.startsWith('/') && !configuration.image.startsWith('//')
            ? configuration.image
            : undefined),
        featured: configuration.featured ?? false,
        problem: configuration.problem?.trim() || undefined,
        solution: configuration.solution?.trim() || undefined,
        results: configuration.results?.trim() || undefined,
        screenshots: configuration.screenshots?.filter((screenshot) => screenshot.trim()),
      }

      return project
    }),
  )

  return {
    projects: projects.sort((first, second) => Number(second.featured) - Number(first.featured)),
    publicRepositoryCount: publicRepositories.length,
  }
}
