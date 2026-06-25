import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-icon">A360</span>
          <span className="navbar__logo-text">Automatiza<strong>360</strong></span>
        </a>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          <a href="#como-funciona" onClick={() => setMenuOpen(false)}>Cómo funciona</a>
          <a href="#casos-de-uso" onClick={() => setMenuOpen(false)}>Casos de uso</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        </nav>

        <div className="navbar__actions">
          <a href="#cta" className="btn btn-primary navbar__cta">
            Reservar llamada
          </a>
          <button
            className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
