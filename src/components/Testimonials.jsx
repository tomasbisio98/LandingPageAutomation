import './Testimonials.css'

const testimonials = [
  {
    quote:
      'En dos semanas automatizamos el seguimiento de 200 leads que estaban parados. Cerramos 14 ventas que de otra forma hubieran quedado en el olvido.',
    name: 'Martín R.',
    role: 'Director comercial · Agencia digital',
    initials: 'MR',
    color: '#6C63FF',
  },
  {
    quote:
      'Antes tardábamos 3 días en responder presupuestos. Ahora el cliente lo recibe en 5 minutos con toda la personalización. Las conversiones subieron un 35%.',
    name: 'Laura P.',
    role: 'CEO · Consultora de RRHH',
    initials: 'LP',
    color: '#00D4AA',
  },
  {
    quote:
      'No creía que algo así funcionara para una pyme como la nuestra. Llevamos 4 meses y ahorramos unas 20 horas semanales entre el equipo de ventas y administración.',
    name: 'Carlos M.',
    role: 'Fundador · E-commerce de moda',
    initials: 'CM',
    color: '#FF6B6B',
  },
  {
    quote:
      'El agente de WhatsApp resuelve el 75% de las consultas sin que nadie tenga que intervenir. Mi equipo de soporte ahora puede enfocarse en los casos que de verdad lo necesitan.',
    name: 'Sofía V.',
    role: 'COO · Infoproductos y cursos online',
    initials: 'SV',
    color: '#FFD93D',
  },
]

function Stars() {
  return (
    <div className="testimonial__stars" aria-label="5 estrellas">
      {Array(5).fill(0).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#FFD93D">
          <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7L7 1z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header">
          <div className="badge">Testimonios</div>
          <h2>Negocios que ya lo viven</h2>
          <p>Resultados reales de empresas como la tuya que decidieron dejar de perder tiempo.</p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <Stars />
              <blockquote className="testimonial-card__quote">"{t.quote}"</blockquote>
              <div className="testimonial-card__author">
                <div
                  className="testimonial-card__avatar"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
