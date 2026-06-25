import './Footer.css'

const links = {
  Producto: ['Cómo funciona', 'Casos de uso', 'Preguntas frecuentes', 'Precios'],
  Empresa: ['Sobre nosotros', 'Blog', 'Contacto'],
  Legal: ['Privacidad', 'Términos de uso', 'Cookies'],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">A360</span>
              <span className="footer__logo-text">Automatiza<strong>360</strong></span>
            </div>
            <p className="footer__tagline">
              Automatizaciones e IA para que tu negocio venda más,
              ahorre tiempo y escale sin depender de tareas manuales.
            </p>
            <div className="footer__socials">
              {['LinkedIn', 'Instagram', 'YouTube'].map((s) => (
                <a key={s} href="#" className="footer__social" aria-label={s}>{s[0]}</a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section} className="footer__col">
              <h4 className="footer__col-title">{section}</h4>
              <ul className="footer__col-links">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Automatiza360. Todos los derechos reservados.</p>
          <p>Hecho con sistemas que trabajan solos.</p>
        </div>
      </div>
    </footer>
  )
}
