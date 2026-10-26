export default function Doodle({ variant = 'squiggle', className = '', strokeWidth = 2.4 }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  const shapes = {
    squiggle: (
      <svg viewBox="0 0 120 34" className="h-full w-full" aria-hidden="true">
        <path
          {...common}
          d="M4 22c10-16 20-16 30 0s20 16 30 0 20-16 30 0 16 10 22 2"
          className="[stroke-dasharray:240] [stroke-dashoffset:240] motion-safe:animate-draw"
        />
      </svg>
    ),
    arrow: (
      <svg viewBox="0 0 90 70" className="h-full w-full" aria-hidden="true">
        <path {...common} d="M8 8c34 2 56 20 62 52" />
        <path {...common} d="M52 48l18 14 12-20" />
      </svg>
    ),
    spiral: (
      <svg viewBox="0 0 80 80" className="h-full w-full" aria-hidden="true">
        <path {...common} d="M40 40a4 4 0 1 1 4 4 12 12 0 0 1-12-12 20 20 0 0 1 20-20 28 28 0 0 1 28 28 32 32 0 0 1-32 32" />
      </svg>
    ),
    spark: (
      <svg viewBox="0 0 60 60" className="h-full w-full" aria-hidden="true">
        <path {...common} d="M30 6v18M30 36v18M6 30h18M36 30h18M13 13l12 12M35 35l12 12M47 13L35 25M25 35L13 47" />
      </svg>
    ),
    arc: (
      <svg viewBox="0 0 120 60" className="h-full w-full" aria-hidden="true">
        <path {...common} d="M4 56C4 26 28 4 58 4s54 22 54 52" />
        <path {...common} d="M22 56c0-22 16-40 36-40s36 18 36 40" opacity="0.5" />
      </svg>
    ),
    underline: (
      <svg viewBox="0 0 220 16" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
        <path {...common} d="M4 10c30-8 60-8 90 0s60 8 90 0 22-6 32-4" />
      </svg>
    ),
  }

  return <span className={className}>{shapes[variant] || shapes.squiggle}</span>
}
