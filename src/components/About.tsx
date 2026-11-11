import { ArrowDownRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { siteConfig } from '../data/siteConfig'

function About() {
  const details = [
    { label: 'FILOSOFÍA', value: siteConfig.about.philosophy },
    { label: 'INTERESES', value: siteConfig.about.interests },
    { label: 'OBJETIVO ACTUAL', value: siteConfig.about.goals },
  ]

  return (
    <section className="section about-section" id="about">
      <div className="section-container">
        <div className="about-heading">
          <SectionHeading eyebrow="UN POCO DE CONTEXTO" title="Detrás del código." />
          <span className="about-index">01 / MIA BENÍTEZ<br />DETRÁS DE LOS PÍXELES</span>
        </div>
        <div className="about-grid">
          <div className="portrait-placeholder">
            <div className="portrait-frame">
              <img src={siteConfig.about.photo} alt="Ilustración de perfil de Mia Benítez" />
              <span className="portrait-cross" />
              <span className="portrait-coordinate">RETRATO / MIA BENÍTEZ</span>
            </div>
            <span className="portrait-caption"><span>FIG. A</span> ILUSTRACIÓN DE PERFIL</span>
          </div>
          <div className="about-copy">
            <span className="about-kicker">EN FORMACIÓN CONSTANTE. CURIOSA POR NATURALEZA.</span>
            <p className="about-bio">{siteConfig.about.biography}</p>
            <div className="about-details">
              {details.map((detail) => (
                <div className="about-detail" key={detail.label}>
                  <span>{detail.label}</span><p>{detail.value}</p><ArrowDownRight size={16} aria-hidden="true" />
                </div>
              ))}
            </div>
            <p className="about-edit-note">Personaliza esta sección en <code>src/data/siteConfig.ts</code>.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
