import { useLayoutEffect, useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { processSteps } from '../../data/content'
import Doodle from '../ui/Doodle'

function Step({ step, index, active, dotRef }) {
  return (
    <div className="relative flex min-h-[52vh] items-center py-10">
      <span
        ref={dotRef}
        className={`absolute left-4 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 transition-[color,background-color,border-color,transform] duration-500 md:left-6 ${
          active
            ? 'scale-110 border-lime bg-lime'
            : 'border-cream/35 bg-cream/20'
        }`}
      />

      <div className="relative w-full max-w-2xl pl-14 md:pl-24">
        <span
          className={`pointer-events-none absolute -top-10 left-12 font-display text-[6rem] font-bold leading-none md:-top-16 md:left-20 md:text-[10rem] ${
            active ? 'text-lime/20' : 'text-cream/10'
          }`}
        >
          0{index + 1}
        </span>

        <div className="relative z-10">
          <span
            className={`inline-block rounded-full border-2 px-3 py-1 font-condensed text-xs font-semibold uppercase tracking-[0.16em] ${
              active ? 'border-lime bg-lime text-ink' : 'border-cream/40 text-cream'
            }`}
          >
            {step.duration}
          </span>
          <h3
            className={`mt-5 text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.05] ${
              active ? 'text-lime' : 'text-cream'
            }`}
          >
            {step.title}
          </h3>
          <p
            className={`mt-3 font-display text-xl font-semibold md:text-2xl ${
              active ? 'text-cream' : 'text-lime/70'
            }`}
          >
            {step.tagline}
          </p>
          <p className="mt-5 max-w-lg leading-relaxed text-cream/90">{step.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default function ProcessTimeline() {
  const trackRef = useRef(null)
  const railRef = useRef(null)
  const dotRefs = useRef([])
  const [rail, setRail] = useState({ top: 0, height: 0 })
  const [activeIndex, setActiveIndex] = useState(0)

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current
      if (!track) return
      const dots = dotRefs.current.filter(Boolean)
      if (dots.length < 2) return
      const trackRect = track.getBoundingClientRect()
      const first = dots[0].getBoundingClientRect()
      const last = dots[dots.length - 1].getBoundingClientRect()
      const firstCenter = first.top - trackRect.top + first.height / 2
      const lastCenter = last.top - trackRect.top + last.height / 2
      setRail({ top: firstCenter, height: Math.max(0, lastCenter - firstCenter) })
    }

    measure()
    const ro = new ResizeObserver(measure)
    if (trackRef.current) ro.observe(trackRef.current)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 0.55', 'end 0.55'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const n = processSteps.length
    const next = n < 2 ? 0 : Math.min(n - 1, Math.max(0, Math.floor(v * (n - 1) + 1e-4)))
    setActiveIndex((prev) => (prev === next ? prev : next))
  })

  return (
    <section id="processo" className="stage-forest grain relative overflow-hidden py-28 md:py-36">
      <Doodle
        variant="spiral"
        className="pointer-events-none absolute right-[6%] top-24 hidden h-14 w-14 text-coral/60 lg:block"
      />

      <div className="container-page relative z-10">
        <p className="eyebrow eyebrow-coral mb-6 text-cream">Como trabalhamos</p>
        <h2 className="text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-cream">
          Um caminho claro,
          <br />
          sem caixa-preta.
        </h2>
      </div>

      <div ref={trackRef} className="container-page relative mt-12">
        <div
          ref={railRef}
          className="absolute left-4 w-[3px] -translate-x-1/2 overflow-hidden rounded-full bg-cream/15 md:left-6"
          style={{ top: rail.top, height: rail.height }}
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="h-full w-full origin-top bg-lime"
          />
        </div>

        {processSteps.map((step, index) => (
          <Step
            key={step.title}
            step={step}
            index={index}
            active={index <= activeIndex}
            dotRef={(el) => {
              dotRefs.current[index] = el
            }}
          />
        ))}
      </div>
    </section>
  )
}
