import { ArrowUpRight, ArrowUp } from 'lucide-react'
import { siteConfig, socialLinks } from '../data/siteConfig'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" aria-label="MIDNIGHT, volver al inicio"><img src="/logo.svg" alt="MIDNIGHT®" /></a>
          <p>Diseñado con intención.<br />Construido con código.</p>
        </div>
        <div className="footer-column"><span>EXPLORAR</span><a href="#work">Proyectos</a><a href="#about">Sobre mí</a><a href="#services">Qué hago</a></div>
        <div className="footer-column"><span>EN REDES</span>{socialLinks.length > 0 ? socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={12} /></a>) : <p>Redes por agregar</p>}</div>
        <div className="footer-column"><span>ESCRÍBEME</span>{siteConfig.email ? <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}<ArrowUpRight size={12} /></a> : <p>Email por agregar</p>}</div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} MIDNIGHT®</span>
        <span>DESARROLLADOR DIGITAL INDEPENDIENTE</span>
        <a href="#home">VOLVER ARRIBA <ArrowUp size={13} /></a>
      </div>
    </footer>
  )
}

export default Footer
