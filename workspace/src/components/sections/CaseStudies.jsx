import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { caseStudies } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'

const CARD_RATIO = 'aspect-[16/9]'

function CaseCard({ data }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 250, damping: 28 })
  const springY = useSpring(y, { stiffness: 250, damping: 28 })
  const rotateX = useTransform(springY, [-0.5, 0.5], ['5deg', '-5deg'])
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-5deg', '5deg'])
  const [slide, setSlide] = useState(0)
  const images = (data.images || []).slice(0, 1)
  const inView = useInView(ref, { amount: 0.2 })

  useEffect(() => {
    if (images.length < 2 || !inView) return
    const id = setInterval(() => setSlide((s) => (s + 1) % images.length), 5000)
    return () => clearInterval(id)
  }, [images.length, inView])

  const onMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div style={{ perspective: 1400 }}>
      <motion.article
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group relative overflow-hidden rounded-frame border-2 border-line bg-surface"
        data-cursor="view"
      >
        <div className={`relative ${CARD_RATIO} overflow-hidden bg-canvas-deep`}>
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={data.alt || ''}
              width={1600}
              height={900}
              decoding="async"
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                i === slide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 flex items-end p-7">
            <span className="rounded-full border-2 border-fg/20 bg-canvas/80 px-3 py-1 font-condensed text-xs uppercase tracking-[0.16em] text-fg backdrop-blur-sm">
              {data.industry}
            </span>
          </div>
        </div>

        <div className="flex items-end justify-between gap-4 p-7">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">{data.company}</h3>
            <p className="mt-1 font-display text-lg italic text-moss">{data.result}</p>
          </div>
          <span className="text-fg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
            <ArrowUpRight size={24} />
          </span>
        </div>

        <div className="absolute inset-0 translate-y-full border-t-2 border-coral bg-forest p-7 text-cream transition-transform duration-500 ease-out group-hover:translate-y-0">
          <div className="flex h-full flex-col justify-center">
            <p className="font-display text-xl italic text-lime md:text-2xl">{data.result}</p>
            <p className="mt-5 max-w-md leading-relaxed text-cream/85">{data.desc}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {data.services.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-cream/25 px-3 py-1 font-condensed text-xs uppercase tracking-[0.12em] text-cream/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  )
}

export default function CaseStudies() {
  return (
    <section id="trabalho" className="bg-canvas py-28 md:py-36">
      <div className="container-page">
        <ScrollReveal className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow eyebrow-coral mb-6">Trabalho selecionado</p>
            <h2 className="text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
              Resultado que dá para medir.
            </h2>
          </div>
          <a
            href="/portfolio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-card border-2 border-fg bg-canvas px-8 py-4 text-base font-bold text-fg transition-colors duration-[400ms] hover:bg-fg hover:text-canvas"
          >
            Mais projetos
            <ArrowUpRight size={20} />
          </a>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {caseStudies.filter((c) => c.home).map((cs, i) => (
            <ScrollReveal key={cs.id} delay={(i % 2) * 0.12} y={54}>
              <CaseCard data={cs} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
