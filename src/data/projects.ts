export type ProjectCategory = 'Websites' | 'Applications' | 'Experiments'
export type ProjectFilter = 'All' | ProjectCategory

export interface ProjectPresentation {
  repository: string
  enabled: boolean
  category: ProjectCategory
  featured?: boolean
  title?: string
  description?: string
  image?: string
  liveDemo?: string
  technologies?: string[]
  problem?: string
  solution?: string
  results?: string
  screenshots?: string[]
}

export interface PortfolioProject {
  id: string
  title: string
  description: string
  category: ProjectCategory
  technologies: string[]
  repositoryUrl: string
  liveDemo?: string
  image?: string
  featured: boolean
  problem?: string
  solution?: string
  results?: string
  screenshots?: string[]
}

// Solo aparecen repositorios públicos habilitados en esta lista.
export const projectConfiguration: ProjectPresentation[] = [
  {
    repository: 'abissmo',
    enabled: true,
    category: 'Websites',
    title: 'ABISSMO / Expedición al abismo',
    description:
      'Una expedición interactiva por las zonas del océano y las especies que habitan sus profundidades.',
    image:
      'https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&w=1200&q=85',
  },
  {
    repository: 'blossom-stay-bnbb',
    enabled: true,
    category: 'Websites',
    title: 'Blossom Stay / Puerto Iguazú',
    description:
      'Un sitio para descubrir alojamientos, habitaciones y experiencias en Puerto Iguazú, Misiones.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
  },
  {
    repository: 'mistery.hub',
    enabled: true,
    category: 'Experiments',
    title: 'MYSTERY HUB / Archivo de misterios',
    description:
      'Un archivo digital interactivo de investigaciones, casos inexplicables y documentos clasificados.',
    image: '/projects/mystery-hub.svg',
  },
]
