import { useState } from 'react'
import { ArrowUpRight, Github, Image as ImageIcon } from 'lucide-react'
import type { PortfolioProject } from '../data/projects'

interface ProjectCardProps {
  project: PortfolioProject
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [imageFailed, setImageFailed] = useState(false)
  const categoryLabels = {
    Websites: 'Sitio web',
    Applications: 'Aplicación',
    Experiments: 'Experimento',
  } satisfies Record<PortfolioProject['category'], string>

  return (
    <article className={`project-card project-card-${index + 1}`}>
      <div className={`project-visual${project.image && !imageFailed ? ' has-image' : ''}`}>
        {project.image && !imageFailed ? (
          <img
            className="project-cover-image"
            src={project.image}
            alt={`Imagen de portada del proyecto ${project.title}`}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="project-cover-placeholder" aria-label="Project cover not configured">
            <Github size={38} strokeWidth={1} aria-hidden="true" />
            <span>IMAGEN DEL PROYECTO / PENDIENTE</span>
          </div>
        )}
        <span className="project-visual-mark">M—{String(index + 1).padStart(2, '0')}</span>
        {project.featured && <span className="project-featured">DESTACADO</span>}
      </div>
      <div className="project-meta">
        <div className="project-title-line">
          <div>
            <span className="project-category">{categoryLabels[project.category]}</span>
            <h3>{project.title}</h3>
          </div>
        </div>
        <p>{project.description}</p>
        {project.technologies.length > 0 && (
          <div className="project-tags" aria-label="Tecnologías">
            {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        )}
        <div className="project-actions">
          {project.liveDemo && (
            <a className="project-action project-action-primary" href={project.liveDemo} target="_blank" rel="noreferrer">
              Ver proyecto <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
          <a className="project-action" href={project.repositoryUrl} target="_blank" rel="noreferrer">
            Ver repositorio <Github size={14} aria-hidden="true" />
          </a>
        </div>
        <details className="project-case-study">
          <summary>
            <span className="case-summary-label">Explorar caso de estudio</span>
            <span className="case-summary-meta">01 — 05</span>
          </summary>
          <div className="case-study-content">
            <div className="case-study-heading">
              <span>ESTUDIO DE PROYECTO</span>
              <span>{categoryLabels[project.category]}</span>
            </div>
            <div className="case-study-grid">
              <section className="case-study-section">
                <span className="case-study-number">01</span>
                <h4>Problema</h4>
                <p>{project.problem || 'Todavía no se documentó este desafío.'}</p>
                {!project.problem && <span className="case-study-status">POR COMPLETAR</span>}
              </section>
              <section className="case-study-section">
                <span className="case-study-number">02</span>
                <h4>Solución</h4>
                <p>{project.solution || 'Todavía no se documentó el proceso ni el aporte.'}</p>
                {!project.solution && <span className="case-study-status">POR COMPLETAR</span>}
              </section>
              <section className="case-study-section">
                <span className="case-study-number">03</span>
                <h4>Tecnologías</h4>
                {project.technologies.length > 0 ? (
                  <div className="project-tags" aria-label="Tecnologías configuradas o detectadas">
                    {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                ) : (
                  <>
                    <p>Todavía no se documentaron las herramientas.</p>
                    <span className="case-study-status">POR COMPLETAR</span>
                  </>
                )}
              </section>
              <section className="case-study-section case-study-section-wide">
                <span className="case-study-number">04</span>
                <h4>Capturas del proyecto</h4>
                {project.screenshots?.length ? (
                  <div className="case-study-gallery">
                    {project.screenshots.map((screenshot, screenshotIndex) => (
                      <img
                        key={screenshot}
                        src={screenshot}
                        alt={`Captura ${screenshotIndex + 1} de ${project.title}`}
                        loading="lazy"
                        decoding="async"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="case-study-empty">
                    <ImageIcon size={20} strokeWidth={1.4} aria-hidden="true" />
                    <span>Las capturas de este proyecto aparecerán aquí.</span>
                  </div>
                )}
              </section>
              <section className="case-study-section case-study-section-wide case-study-result">
                <span className="case-study-number">05</span>
                <h4>Resultados</h4>
                <p>{project.results || 'Sin resultados documentados todavía.'}</p>
                {!project.results && <span className="case-study-status">SIN MÉTRICAS PUBLICADAS</span>}
              </section>
            </div>
          </div>
        </details>
      </div>
    </article>
  )
}

export default ProjectCard
