# Automatiza360 — Landing Page

Landing page premium orientada a conversión para **Automatiza360**, construida con React + Vite.

## Stack

- React 18
- Vite 5
- CSS puro con variables (design tokens)

## Levantar en local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura

```
src/
├── index.css              # Design tokens globales (colores, tipografía, espaciados)
├── App.jsx                # Composición principal
└── components/
    ├── Navbar             # Barra de navegación fija con blur al scroll
    ├── Hero               # Hero con dashboard animado y CTAs principales
    ├── Metrics            # Bloque de métricas / credibilidad
    ├── Problems           # Problemas frecuentes del cliente
    ├── Benefits           # Beneficios principales
    ├── HowItWorks         # Proceso en 3 pasos
    ├── UseCases           # Casos de uso con tabs interactivos
    ├── Testimonials       # Testimonios
    ├── FAQ                # Preguntas frecuentes con acordeón
    ├── FinalCTA           # CTA de cierre
    └── Footer             # Footer con links y redes
```

## Personalización rápida

Todos los tokens de diseño (colores, fuentes, espaciados) están en `:root` al inicio de `src/index.css`. Editar ahí propaga los cambios a toda la página.
