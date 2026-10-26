import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const tick = () => {
      if (document.hidden) return
      setIndex((prev) => (prev + 1) % testimonials.length)
    }
    const timer = setInterval(tick, 6000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="depoimentos" className="relative overflow-hidden bg-canvas py-28 md:py-36">
      <div className="container-page relative">
        <ScrollReveal className="mb-12 text-center">
          <p className="eyebrow eyebrow-coral">O que dizem</p>
        </ScrollReveal>

        <div className="relative mx-auto flex min-h-[320px] max-w-4xl flex-col justify-center">
          <span
            className="pointer-events-none absolute -top-24 left-0 select-none font-display text-[14rem] leading-none text-coral/10 md:text-[20rem]"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <div className="relative z-10 text-center" data-cursor="text">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col items-center"
              >
                <blockquote className="font-display text-[clamp(1.6rem,4vw,3rem)] font-medium leading-[1.2] tracking-[-0.015em] text-fg">
                  {testimonials[index].quote}
                </blockquote>
                <figcaption className="mt-10">
                  <p className="font-condensed text-sm uppercase tracking-[0.18em] text-coral">
                    {testimonials[index].author}
                  </p>
                  <p className="mt-1 text-fg-soft">{testimonials[index].company}</p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="relative z-10 mt-14 flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Depoimento anterior"
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-fg/25 text-fg transition-colors hover:border-fg hover:bg-solid hover:text-solid-fg"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Próximo depoimento"
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-fg/25 text-fg transition-colors hover:border-fg hover:bg-solid hover:text-solid-fg"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-coral' : 'w-2 bg-fg/20 hover:bg-fg/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
