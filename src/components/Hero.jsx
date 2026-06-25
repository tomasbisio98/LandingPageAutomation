import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      {/* Fondo decorativo */}
      <div className="hero__bg">
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          {/* Badge */}
          <div className="badge hero__badge">
            <span className="hero__badge-dot" />
            Diagnóstico gratuito disponible
          </div>

          {/* Titular */}
          <h1 className="hero__title">
            Tu negocio puede vender más<br />
            <span className="gradient-text">sin trabajar el doble</span>
          </h1>

          {/* Subtítulo */}
          <p className="hero__subtitle">
            Implementamos automatizaciones e inteligencia artificial para que tu empresa
            capture más leads, dé seguimiento sin esfuerzo y libere horas de trabajo manual.
            <strong> Sin contratar más personal.</strong>
          </p>

          {/* CTAs */}
          <div className="hero__ctas">
            <a href="#cta" className="btn btn-primary btn-lg">
              Reserva tu llamada gratuita
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#como-funciona" className="btn btn-secondary btn-lg">
              Ver cómo funciona
            </a>
          </div>

          {/* Social proof rápida */}
          <div className="hero__proof">
            <div className="hero__avatars">
              {['#6C63FF','#00D4AA','#FF6B6B','#FFD93D'].map((c, i) => (
                <div key={i} className="hero__avatar" style={{ background: c }} />
              ))}
            </div>
            <p>
              <strong>+80 negocios</strong> ya automatizan con nosotros
            </p>
          </div>
        </div>

        {/* Visual derecha — dashboard / flujo */}
        <div className="hero__visual">
          <div className="hero__dashboard">
            {/* Header */}
            <div className="dashboard__header">
              <div className="dashboard__dots">
                <span /><span /><span />
              </div>
              <span className="dashboard__title">Panel de Automatizaciones</span>
            </div>

            {/* Métricas rápidas */}
            <div className="dashboard__metrics">
              <div className="dashboard__metric dashboard__metric--accent">
                <span className="dashboard__metric-value">+342</span>
                <span className="dashboard__metric-label">Leads capturados</span>
                <span className="dashboard__metric-badge">↑ 28% este mes</span>
              </div>
              <div className="dashboard__metric">
                <span className="dashboard__metric-value">18h</span>
                <span className="dashboard__metric-label">Ahorradas / semana</span>
                <span className="dashboard__metric-badge dashboard__metric-badge--green">↑ automatizado</span>
              </div>
            </div>

            {/* Flujo de automatización */}
            <div className="dashboard__flow">
              <div className="dashboard__flow-title">Flujo activo: Captación → CRM</div>
              {[
                { icon: '📋', label: 'Formulario recibido', status: 'done' },
                { icon: '🤖', label: 'IA clasifica lead', status: 'done' },
                { icon: '📲', label: 'WhatsApp de bienvenida', status: 'done' },
                { icon: '📅', label: 'Agenda reunión automática', status: 'active' },
                { icon: '📊', label: 'CRM actualizado', status: 'pending' },
              ].map((step, i) => (
                <div key={i} className={`flow__step flow__step--${step.status}`}>
                  <span className="flow__icon">{step.icon}</span>
                  <span className="flow__label">{step.label}</span>
                  <span className="flow__status-dot" />
                </div>
              ))}
            </div>

            {/* Notificación flotante */}
            <div className="dashboard__notification">
              <span>🔔</span>
              <div>
                <strong>Nuevo lead calificado</strong>
                <span>Ana García · hace 2 minutos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
