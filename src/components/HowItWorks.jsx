import './HowItWorks.css'

const steps = [
  {
    number: '01',
    title: 'Diagnóstico gratuito',
    description:
      'Hacemos una llamada de 30 minutos para entender tu negocio, identificar los cuellos de botella y mapear las oportunidades de automatización con mayor impacto.',
    tags: ['Análisis de procesos', 'Mapa de herramientas', 'Priorización'],
  },
  {
    number: '02',
    title: 'Diseño e implementación',
    description:
      'Construimos los flujos de automatización, los integramos con tus herramientas actuales y los activamos. En 48 horas ya tienes el primer sistema funcionando.',
    tags: ['Make / n8n', 'WhatsApp · Email · CRM', 'IA integrada'],
  },
  {
    number: '03',
    title: 'Resultados desde el primer mes',
    description:
      'Mides el impacto real: leads respondidos, horas ahorradas, ventas cerradas. Seguimos iterando para maximizar cada resultado.',
    tags: ['Dashboard de resultados', 'Soporte continuo', 'Escala a tu ritmo'],
  },
]

export default function HowItWorks() {
  return (
    <section className="how-it-works section" id="como-funciona">
      <div className="container">
        <div className="section-header">
          <div className="badge">Cómo funciona</div>
          <h2>De cero a automatizado<br />en 3 pasos</h2>
          <p>Sin configuraciones eternas ni formación técnica. Nosotros implementamos, tú ves los resultados.</p>
        </div>

        <div className="hiw__steps">
          {steps.map((step, i) => (
            <div key={i} className="hiw__step">
              <div className="hiw__step-number">{step.number}</div>
              <div className="hiw__step-content">
                <h3 className="hiw__step-title">{step.title}</h3>
                <p className="hiw__step-desc">{step.description}</p>
                <div className="hiw__step-tags">
                  {step.tags.map((tag, j) => (
                    <span key={j} className="hiw__tag">{tag}</span>
                  ))}
                </div>
              </div>
              {i < steps.length - 1 && <div className="hiw__connector" />}
            </div>
          ))}
        </div>

        <div className="hiw__cta">
          <a href="#cta" className="btn btn-primary btn-lg">
            Quiero mi diagnóstico gratuito
          </a>
        </div>
      </div>
    </section>
  )
}
