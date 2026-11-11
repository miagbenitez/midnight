import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'
import { fetchPortfolioProjects } from '../data/githubProjects'
import type { PortfolioProject, ProjectFilter } from '../data/projects'

const filters: { value: ProjectFilter; label: string }[] = [
  { value: 'All', label: 'Todos' },
  { value: 'Websites', label: 'Sitios web' },
  { value: 'Applications', label: 'Aplicaciones' },
  { value: 'Experiments', label: 'Experimentos' },
]

type ProjectsState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; projects: PortfolioProject[]; publicRepositoryCount: number }

function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All')
  const [state, setState] = useState<ProjectsState>({ status: 'loading' })

  useEffect(() => {
    const controller = new AbortController()

    fetchPortfolioProjects(controller.signal)
      .then(({ projects, publicRepositoryCount }) => {
        setState({ status: 'success', projects, publicRepositoryCount })
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return

        setState({
          status: 'error',
          message: error instanceof Error ? error.message : 'No se pudieron cargar los proyectos de GitHub.',
        })
      })

    return () => controller.abort()
  }, [])

  const projects = state.status === 'success' ? state.projects : []
  const visibleProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter)

  return (
    <section className="section work-section" id="work">
      <div className="section-container">
        <div className="work-heading-row">
          <SectionHeading
            eyebrow="ALGUNAS COSAS QUE HE ESTADO CREANDO"
            title="Proyectos destacados."
            description="Una colección de experiencias digitales, sitios web y experimentos."
          />
          <span className="work-count">({String(visibleProjects.length).padStart(2, '0')})<br />PROYECTOS</span>
        </div>
        <div className="filter-bar" role="group" aria-label="Filtrar proyectos">
          {filters.map(({ value, label }) => (
            <button
              type="button"
              key={value}
              className={`filter-button${activeFilter === value ? ' is-active' : ''}`}
              aria-pressed={activeFilter === value}
              onClick={() => setActiveFilter(value)}
            >
              {label}<span>{String(value === 'All' ? projects.length : projects.filter((project) => project.category === value).length).padStart(2, '0')}</span>
            </button>
          ))}
        </div>
        <motion.div className="projects-grid" layout aria-live="polite">
          {state.status === 'loading' && (
            <p className="projects-message">Cargando proyectos públicos de GitHub…</p>
          )}
          {state.status === 'error' && (
            <p className="projects-message projects-message-error" role="alert">
              No se pudieron cargar los proyectos de GitHub: {state.message}
            </p>
          )}
          {state.status === 'success' && visibleProjects.length === 0 && (
            <p className="projects-message">
              {state.publicRepositoryCount === 0
                ? 'Todavía no hay repositorios públicos en esta cuenta. Cuando me compartas los enlaces, podremos seleccionar aquí los proyectos que quieras mostrar.'
                : 'Cuando me compartas los enlaces de GitHub y Antigravity, elegimos aquí los proyectos que quieras mostrar.'}
            </p>
          )}
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>
        <p className="demo-note">
          <span>GITHUB / EN VIVO</span>
          Los proyectos se obtienen de GitHub y se eligen manualmente. Se excluyen forks y repositorios archivados.
        </p>
      </div>
    </section>
  )
}

export default Projects
