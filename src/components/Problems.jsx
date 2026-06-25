import './Problems.css'

const problems = [
  {
    icon: '⏳',
    title: 'Pasas horas en tareas que podrían automatizarse',
    description: 'Copiar datos entre herramientas, enviar emails manualmente, actualizar hojas de cálculo…',
  },
  {
    icon: '📭',
    title: 'Los leads se enfrían porque nadie los sigue',
    description: 'El seguimiento depende de que alguien se acuerde. Y cuando nadie se acuerda, vendes menos.',
  },
  {
    icon: '🔀',
    title: 'Tus herramientas no se hablan entre sí',
    description: 'CRM, email, WhatsApp, calendario… cada uno por su lado. Información duplicada, errores y tiempo perdido.',
  },
  {
    icon: '📉',
    title: 'Escalar significa contratar más personal',
    description: 'Más volumen de trabajo solo puede resolverse con más personas. El modelo no escala.',
  },
  {
    icon: '😤',
    title: 'La atención al cliente te satura',
    description: 'Las mismas preguntas una y otra vez, a cualquier hora. Sin sistema, cada consulta es esfuerzo nuevo.',
  },
  {
    icon: '🎯',
    title: 'No tienes visibilidad de tu proceso comercial',
    description: 'No sabes cuántos leads tienes, en qué fase están o cuáles están listos para comprar.',
  },
]

export default function Problems() {
  return (
    <section className="problems section">
      <div className="container">
        <div className="section-header">
          <div className="badge">¿Te suena familiar?</div>
          <h2>Los problemas que frenan tu crecimiento</h2>
          <p>
            Si tu negocio depende de que alguien recuerde hacer algo, ya tienes un cuello de botella.
          </p>
        </div>

        <div className="problems__grid">
          {problems.map((p, i) => (
            <div key={i} className="problem-card">
              <span className="problem-card__icon">{p.icon}</span>
              <h3 className="problem-card__title">{p.title}</h3>
              <p className="problem-card__desc">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
