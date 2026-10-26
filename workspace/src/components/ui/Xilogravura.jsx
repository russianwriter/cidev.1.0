export default function Xilogravura({ variant = 'sun', className = '' }) {
  const shapes = {
    sun: (
      <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
        <g fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <circle cx="100" cy="100" r="42" />
          <path d="M100 100c-3-2-2-8 1-14-2 5-1 11 2 13z" opacity="0.6" />
          <path
            d="M100 24l6 22-6 8-6-8z
               M147 39l-2 23-9 4-4-9z
               M176 76l-19 13-9-4 4-9z
               M186 124l-23-2-4-9 9-4z
               M167 168l-13-19 4-9 9 4z
               M124 186l-2-23 9-4 4 9z
               M76 186l13-19 9 4-4 9z
               M33 167l19-13 9 4-4 9z
               M14 124l23 2 4 9-9 4z
               M14 76l19 13-4 9-9-4z
               M33 33l13 19-9 4-4-9z
               M76 14l2 23-9 4-4-9z"
            strokeLinecap="round"
          />
          <path
            d="M74 96c4-16 12-24 26-24s22 8 26 24c-6-8-14-12-26-12s-20 4-26 12z"
            opacity="0.5"
          />
        </g>
      </svg>
    ),
    cactus: (
      <svg viewBox="0 0 160 220" className="h-full w-full" aria-hidden="true">
        <g fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <path
            d="M68 216V96c-1-10 2-16 10-16s10 6 10 16v120z"
          />
          <path
            d="M68 132c-14 2-22-4-24-18-1-10 0-22 2-34 1-6 5-8 9-6 3 2 4 6 3 12-2 10-3 18-2 26 1 8 5 12 12 12z"
          />
          <path
            d="M88 108c14-2 22 4 24 18 1 10-1 24-3 36-1 6-5 8-9 6-3-2-4-6-3-12 2-10 3-18 2-27-1-9-5-13-11-13z"
          />
          <g opacity="0.55" strokeWidth="1.6">
            <path d="M74 60h8v130h-8z" />
            <path d="M58 108l4 2M58 100l4 2M58 92l4 2" />
            <path d="M98 116l-4 2M98 124l-4 2M98 132l-4 2" />
          </g>
          <ellipse cx="80" cy="30" rx="22" ry="8" opacity="0.5" />
          <path d="M40 216h80l6 4H34z" />
        </g>
      </svg>
    ),
    cloud: (
      <svg viewBox="0 0 220 120" className="h-full w-full" aria-hidden="true">
        <g fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <path
            d="M46 84c-18 0-30-12-30-27 0-14 11-25 25-26 4-14 17-23 32-21 12 2 21 10 25 21 4-2 8-3 13-3 16 0 29 12 29 28 0 15-13 28-29 28z"
          />
          <path
            d="M60 60c6-8 14-8 20-2M96 54c6-6 13-6 18-1M120 62c5-6 11-6 15-2"
            fill="none"
            opacity="0.5"
            strokeWidth="1.6"
          />
          <path d="M40 92c6 4 14 4 20 0M100 94c6 4 14 4 20 0M150 90c5 3 12 3 17 0" fill="none" opacity="0.4" strokeWidth="1.6" />
        </g>
      </svg>
    ),
    bird: (
      <svg viewBox="0 0 160 100" className="h-full w-full" aria-hidden="true">
        <g fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <path d="M80 46c6-10 18-16 30-14-8 2-14 8-17 16 10-4 20-2 27 6-10-2-18 0-23 6 6 2 10 6 12 12-8-6-16-8-24-6 2 6 1 12-3 17-1-8-5-13-11-15-8 8-18 11-29 8 8-3 13-8 15-15-9 3-18 1-25-5 9 1 16-2 21-8-8-3-13-9-14-17 6 6 13 9 21 9-2-8 0-15 6-20-2 8 0 14 4 26z" />
          <path d="M82 50l-3-6 5 1z" opacity="0.6" />
        </g>
      </svg>
    ),
  }

  return <span className={className}>{shapes[variant] || shapes.sun}</span>
}
