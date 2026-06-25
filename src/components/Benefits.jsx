import './Benefits.css'

const benefits = [
  {
    icon: '⚡',
    title: 'Respuesta inmediata, sin esfuerzo',
    description: 'Cada lead recibe atención en segundos, no en horas. Nunca más una oportunidad perdida por falta de seguimiento.',
    accent: 'accent',
  },
  {
    icon: '🔁',
    title: 'Tus procesos corren solos',
    description: 'Captación, clasificación, seguimiento y agenda se ejecutan automáticamente mientras tú te enfocas en lo que importa.',
    accent: 'green',
  },
  {
    icon: '📈',
    title: 'Más ventas con el mismo equipo',
    description: 'Tus vendedores se concentran en cerrar, no en administrar. El sistema hace el trabajo pesado.',
    accent: 'accent',
  },
  {
    icon: '🔗',
    title: 'Todo conectado, sin fricción',
    description: 'WhatsApp, email, CRM, formularios y calendario sincronizados. Un ecosistema que funciona como uno solo.',
    accent: 'green',
  },
  {
    icon: '🧠',
    title: 'IA que entiende tu negocio',
    description: 'Clasificación inteligente de leads, respuestas automáticas contextuales y priorización basada en datos reales.',
    accent: 'accent',
  },
  {
    icon: '📊',
    title: 'Visibilidad total del embudo',
    description: 'Sabes en cada momento cuántos leads tienes, en qué etapa están y qué acciones hay que tomar.',
    accent: 'green',
  },
]

export default function Benefits() {
  return (
    <section className="benefits section" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge">Beneficios</div>
          <h2>Lo que cambia cuando<br /><span className="gradient-text">automatizas con nosotros</span></h2>
          <p>No vendemos software. Implementamos sistemas que generan resultados medibles desde la primera semana.</p>
        </div>

        <div className="benefits__grid">
          {benefits.map((b, i) => (
            <div key={i} className={`benefit-card benefit-card--${b.accent}`}>
              <div className="benefit-card__icon-wrap">
                <span className="benefit-card__icon">{b.icon}</span>
              </div>
              <h3 className="benefit-card__title">{b.title}</h3>
              <p className="benefit-card__desc">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
