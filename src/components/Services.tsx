import { ArrowUpRight, Code2, Gauge, LayoutTemplate, MonitorSmartphone, PanelsTopLeft, ScanLine } from 'lucide-react'
import SectionHeading from './SectionHeading'

const services = [
  { name: 'Desarrollo web', description: 'Sitios web hechos a medida, desde la estructura hasta el último detalle.', icon: Code2 },
  { name: 'Páginas de aterrizaje', description: 'Páginas enfocadas, claras y pensadas para presentar una idea.', icon: LayoutTemplate },
  { name: 'Diseño adaptable', description: 'Experiencias cuidadas en pantallas grandes, pequeñas y todo lo demás.', icon: MonitorSmartphone },
  { name: 'Aplicaciones web', description: 'Interfaces funcionales para productos y herramientas digitales.', icon: PanelsTopLeft },
  { name: 'Desarrollo de interfaces', description: 'Diseños de interfaz convertidos en componentes accesibles y consistentes.', icon: ScanLine },
  { name: 'Optimización web', description: 'Mejoras de rendimiento, calidad y experiencia de uso.', icon: Gauge },
]

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="section-container">
        <div className="services-heading-row">
          <SectionHeading eyebrow="EN QUÉ PUEDO AYUDARTE" title="Hecho para la web." description="Áreas de trabajo como desarrollador independiente." />
          <span className="services-aside">UNA PERSONA<br />MUCHA CURIOSIDAD</span>
        </div>
        <div className="services-grid">
          {services.map(({ name, description, icon: Icon }, index) => (
            <article className="service-card" key={name}>
              <div className="service-top"><span>0{index + 1} / 06</span><Icon size={18} strokeWidth={1.5} aria-hidden="true" /></div>
              <h3>{name}</h3>
              <p>{description}</p>
              <ArrowUpRight className="service-arrow" size={17} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
