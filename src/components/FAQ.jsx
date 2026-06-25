import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    question: '¿Necesito tener conocimientos técnicos para trabajar con vosotros?',
    answer:
      'No. Nosotros nos encargamos de todo el diseño, implementación y configuración. Tú solo necesitas contarnos cómo funciona tu negocio y qué resultados quieres conseguir.',
  },
  {
    question: '¿Cuánto tiempo tarda en estar todo funcionando?',
    answer:
      'La primera automatización puede estar activa en 48 horas. Un sistema completo de captación + seguimiento + CRM suele quedar operativo entre 1 y 3 semanas, dependiendo de la complejidad.',
  },
  {
    question: '¿Funciona con las herramientas que ya uso?',
    answer:
      'Muy probablemente sí. Trabajamos con más de 200 aplicaciones: WhatsApp, Gmail, HubSpot, Notion, Airtable, Calendly, Typeform, Stripe, Slack, Google Sheets y muchas más. Si tienes dudas sobre una herramienta específica, pregúntanos en la llamada.',
  },
  {
    question: '¿Qué pasa si algo falla o necesito cambios?',
    answer:
      'Ofrecemos soporte continuo. Si algo no funciona como esperabas o tu proceso cambia, lo ajustamos. No te dejamos solo con el sistema.',
  },
  {
    question: '¿Para qué tipo de negocio es esto?',
    answer:
      'Para cualquier negocio que tenga procesos repetitivos: agencias, consultoras, e-commerce, infoproductores, clínicas, inmobiliarias, servicios B2B, etc. Si tienes más de 10 conversaciones comerciales al mes, la automatización ya tiene sentido.',
  },
  {
    question: '¿Cuánto cuesta?',
    answer:
      'Depende del alcance. Por eso hacemos primero un diagnóstico gratuito: para entender tu situación y presentarte una propuesta adaptada a lo que realmente necesitas, sin pagar por cosas que no te aportan valor.',
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button
        className="faq-item__question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className="faq-item__icon">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="faq-item__answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="faq section" id="faq" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge">FAQ</div>
          <h2>Preguntas frecuentes</h2>
          <p>Lo que suele preguntarse antes de dar el paso.</p>
        </div>

        <div className="faq__list">
          {faqs.map((f, i) => (
            <FAQItem key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
