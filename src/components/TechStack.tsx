import { technologies } from '../data/technologies'
import SectionHeading from './SectionHeading'

function TechStack() {
  const configuredTechnologies = technologies.filter((technology) => technology.configured)

  return (
    <section className="section tech-section" id="stack">
      <div className="section-container tech-layout">
        <SectionHeading
          eyebrow="HERRAMIENTAS, NO REGLAS"
          title="Mi caja de herramientas."
          description="Tecnologías que acompañan el proceso. La selección se configura según mi experiencia real."
        />
        <div className="tech-content">
          {configuredTechnologies.length > 0 ? (
            <div className="tech-list">
              {configuredTechnologies.map((technology, index) => (
                <div className="tech-item" key={technology.name}>
                  <span className="tech-number">0{index + 1}</span>
                  <span>{technology.name}</span>
                  <span className="tech-indicator" />
                </div>
              ))}
            </div>
          ) : (
            <div className="tech-empty">
              <span className="tech-empty-mark">+</span>
              <div><strong>TECNOLOGÍAS POR DEFINIR</strong><p>Agrega tecnologías en <code>src/data/technologies.ts</code> y activa solo las que quieras mostrar.</p></div>
            </div>
          )}
          <div className="tech-footnote">
            <span>01 — {String(configuredTechnologies.length).padStart(2, '0')}</span>
            <span>TECNOLOGÍAS CONFIGURADAS</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
