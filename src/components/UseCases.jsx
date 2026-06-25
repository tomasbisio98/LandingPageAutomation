import { useState } from 'react'
import './UseCases.css'

const cases = [
  {
    id: 'leads',
    label: 'Captación de leads',
    icon: '🎯',
    title: 'Captura y clasifica leads automáticamente',
    description:
      'Cada formulario completado dispara un flujo: el lead queda registrado en tu CRM, se clasifica por interés y urgencia con IA, y recibe un primer mensaje personalizado en menos de 60 segundos.',
    metrics: ['↑ 40% más leads contactados', '↓ 90% tiempo de clasificación', '0 leads sin respuesta'],
    tools: ['Typeform · Webflow', 'CRM de tu elección', 'IA de clasificación'],
  },
  {
    id: 'seguimiento',
    label: 'Seguimiento comercial',
    icon: '📲',
    title: 'Seguimiento por WhatsApp y email sin esfuerzo',
    description:
      'Flujos de nurturing que se activan solos: recordatorios, propuestas, seguimientos post-reunión. Tu equipo comercial solo entra en acción cuando el lead ya está listo para comprar.',
    metrics: ['3x más reuniones cerradas', 'Secuencias de hasta 14 días', 'Personalización por perfil'],
    tools: ['WhatsApp Business API', 'Email marketing', 'Calendario integrado'],
  },
  {
    id: 'agenda',
    label: 'Agenda automática',
    icon: '📅',
    title: 'El cliente reserva su reunión sin intermediarios',
    description:
      'Integra tu calendario, define disponibilidad y los interesados agendan directamente. Recibes un resumen del perfil del lead antes de cada llamada para llegar preparado.',
    metrics: ['0 emails de coordinación', 'Recordatorios automáticos', 'Brief del lead antes de llamar'],
    tools: ['Calendly · Cal.com', 'Google Calendar', 'Notion · CRM'],
  },
  {
    id: 'soporte',
    label: 'Atención al cliente',
    icon: '🤖',
    title: 'Soporte 24/7 sin ampliar tu equipo',
    description:
      'Un agente de IA responde las preguntas frecuentes, filtra consultas reales de ruido y escala solo lo que requiere atención humana. Disponible en WhatsApp, web y email.',
    metrics: ['80% consultas resueltas solas', '24/7 disponibilidad', 'Escalado inteligente'],
    tools: ['WhatsApp · Web chat', 'Base de conocimiento', 'GPT integrado'],
  },
  {
    id: 'presupuestos',
    label: 'Presupuestos y recordatorios',
    icon: '📄',
    title: 'Genera y envía presupuestos en segundos',
    description:
      'El cliente completa un formulario, el sistema genera el presupuesto automáticamente y lo envía con seguimiento. Los recordatorios de pago y renovación también son automáticos.',
    metrics: ['↓ 80% tiempo administrativo', 'Seguimiento post-envío', 'Firmas digitales integradas'],
    tools: ['Notion · Airtable', 'DocuSign · PandaDoc', 'Stripe · Facturación'],
  },
]

export default function UseCases() {
  const [active, setActive] = useState(0)
  const current = cases[active]

  return (
    <section className="use-cases section" id="casos-de-uso" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge">Casos de uso</div>
          <h2>Qué automatizamos<br /><span className="gradient-text">para tu negocio</span></h2>
          <p>Soluciones probadas para los procesos que más impacto tienen en tus resultados.</p>
        </div>

        {/* Tabs */}
        <div className="uc__tabs" role="tablist">
          {cases.map((c, i) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={active === i}
              className={`uc__tab ${active === i ? 'uc__tab--active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span>{c.icon}</span>
              <span>{c.label}</span>
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="uc__panel" key={active}>
          <div className="uc__panel-content">
            <h3 className="uc__panel-title">{current.title}</h3>
            <p className="uc__panel-desc">{current.description}</p>

            <div className="uc__metrics">
              {current.metrics.map((m, i) => (
                <div key={i} className="uc__metric">
                  <span className="uc__metric-dot" />
                  {m}
                </div>
              ))}
            </div>

            <a href="#cta" className="btn btn-primary">
              Implementar esto en mi negocio →
            </a>
          </div>

          <div className="uc__panel-visual">
            <div className="uc__flow-card">
              <div className="uc__flow-header">
                <span className="uc__flow-icon">{current.icon}</span>
                <div>
                  <strong>{current.label}</strong>
                  <span>Automatización activa</span>
                </div>
                <span className="uc__flow-status">● En vivo</span>
              </div>
              <div className="uc__flow-tools">
                <span className="uc__flow-tools-label">Herramientas integradas</span>
                {current.tools.map((t, i) => (
                  <div key={i} className="uc__tool">
                    <span className="uc__tool-dot" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
