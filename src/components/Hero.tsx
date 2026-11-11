import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { publicAsset } from '../data/publicAsset'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid">
        <div className="hero-copy">
          <motion.div
            className="eyebrow hero-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow-dot" /> {siteConfig.role.toUpperCase()}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            Creo <span>experiencias</span> digitales.
          </motion.h1>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
          >
            Soy desarrolladora web en formación. Me enfoco en lo visual y en darles vida a las
            páginas combinando diseño, código y creatividad.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a className="button button-primary" href="#work">
              Explorar proyectos <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a className="text-link" href="#contact">
              Hablemos <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
          aria-label="Composición abstracta de un eclipse digital"
          role="img"
        >
          <div className="art-coordinate">FIG. 001 <span>—</span> EL INTERMEDIO</div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="eclipse">
            <img src={publicAsset('/favicon.svg')} alt="" />
          </div>
          <div className="art-cross cross-one" />
          <div className="art-cross cross-two" />
          <div className="art-readout"><span>LAT.</span> 00° 00′ 00″<br /><span>PROF.</span> ∞</div>
          <div className="art-caption"><span className="caption-line" /> UN ESPACIO PARA LO QUE VIENE</div>
        </motion.div>
      </div>
      <div className="hero-bottom">
        <span>IDEAS QUE SE CONVIERTEN EN EXPERIENCIAS DIGITALES.</span>
        <a href="#work" aria-label="Desplazarse a proyectos seleccionados">DESLIZA PARA EXPLORAR <ArrowDown size={13} /></a>
        <span>HECHO CON INTENCIÓN · 2026</span>
      </div>
    </section>
  )
}

export default Hero
