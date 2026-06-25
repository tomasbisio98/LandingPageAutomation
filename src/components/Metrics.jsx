import './Metrics.css'

const metrics = [
  { value: '+80', label: 'Negocios automatizados', suffix: '' },
  { value: '18', label: 'Horas ahorradas por semana', suffix: 'h' },
  { value: '3x', label: 'Más seguimiento comercial', suffix: '' },
  { value: '48', label: 'Horas para primera automatización activa', suffix: 'h' },
]

export default function Metrics() {
  return (
    <section className="metrics section-sm">
      <div className="container">
        <div className="metrics__grid">
          {metrics.map((m, i) => (
            <div key={i} className="metrics__item">
              <span className="metrics__value gradient-text">
                {m.value}{m.suffix}
              </span>
              <span className="metrics__label">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
