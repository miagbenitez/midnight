import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { publicAsset } from '../data/publicAsset'

const links = [
  { label: 'Inicio', href: '#home' },
  { label: 'Proyectos', href: '#work' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Contacto', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navegación principal">
        <a className="brand" href="#home" aria-label="MIDNIGHT, inicio" onClick={closeMenu}>
          <img src={publicAsset('/logo.svg')} alt="MIDNIGHT®" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div id="primary-navigation" className={`nav-content${menuOpen ? ' is-open' : ''}`}>
          <div className="nav-links">
            {links.map((link, index) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                <span className="nav-index">0{index + 1}</span>{link.label}
              </a>
            ))}
          </div>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Hablemos <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
