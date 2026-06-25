import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <section className="final-cta section" id="cta">
      <div className="final-cta__bg">
        <div className="final-cta__glow" />
      </div>

      <div className="container">
        <div className="final-cta__inner">
          <div className="badge final-cta__badge">
            <span style={{ color: 'var(--color-accent2)', fontSize: '10px' }}>●</span>
            Plazas limitadas cada mes
          </div>

          <h2 className="final-cta__title">
            ¿Tu negocio todavía depende<br />
            <span className="gradient-text">de que alguien se acuerde?</span>
          </h2>

          <p className="final-cta__subtitle">
            Agenda una llamada gratuita de 30 minutos. Analizamos tu situación,
            te mostramos exactamente qué se puede automatizar y cuánto tiempo
            y dinero puedes recuperar. <strong>Sin compromiso de compra.</strong>
          </p>

          <div className="final-cta__actions">
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg final-cta__btn">
              Reservar llamada gratuita
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.75 9h10.5M9 3.75L14.25 9 9 14.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="final-cta__guarantees">
            {[
              '✓ Sin compromiso ni tarjeta',
              '✓ Diagnóstico 100% gratuito',
              '✓ Resultados visibles en 30 días',
            ].map((g, i) => (
              <span key={i} className="final-cta__guarantee">{g}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
