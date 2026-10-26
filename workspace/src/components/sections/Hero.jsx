import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { MoveRight } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import { WhatsApp } from '../ui/SocialIcons'
import { heroProducts } from '../../data/content'

const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

function Header() {
  return (
    <div className="absolute inset-x-0 top-0 z-20 mx-auto w-full max-w-7xl px-4 pt-24 pb-4 opacity-100 md:pt-28 md:pb-6">
      <h1 className="max-w-3xl text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.035em] text-fg">
        Código com raiz,
        <br />
        produto que <span className="text-moss">escala</span>.
      </h1>
      <p className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-fg-soft md:text-xl">
        Somos uma software house que projeta, constrói e escala produtos digitais. Do primeiro
        rascunho ao lançamento, com equipe qualificada e código que continua sendo seu.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <MagneticButton
          onClick={() => window.open('https://wa.me/5588982313374', '_blank', 'noopener')}
          className="btn-ghost-light px-8 py-4 text-base"
        >
          Agendar conversa
          <WhatsApp className="h-5 w-5" />
        </MagneticButton>
        <button
          type="button"
          onClick={() => document.querySelector('#trabalho')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn-lime px-8 py-4 text-base"
        >
          Ver nosso trabalho
          <MoveRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

function ProductCard({ product, translate, lazy }) {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group/product relative h-96 w-[30rem] shrink-0"
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl">
        <img
          src={product.thumbnail}
          alt={product.title}
          width={480}
          height={384}
          decoding="async"
          loading={lazy ? 'lazy' : 'eager'}
          className="absolute inset-0 h-full w-full object-cover object-left-top"
        />
      </a>
      <div className="pointer-events-none absolute inset-0 bg-forest opacity-0 group-hover/product:opacity-80" />
      <h2 className="absolute bottom-4 left-4 text-cream opacity-0 group-hover/product:opacity-100">
        {product.title}
      </h2>
    </motion.div>
  )
}

export default function Hero() {
  const firstRow = heroProducts.slice(0, 5)
  const secondRow = heroProducts.slice(5, 10)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig)
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig)
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.45, 1]), springConfig)
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig)
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.22], [-40, 520]), springConfig)
  const veil = useSpring(useTransform(scrollYProgress, [0, 0.12], [1, 0]), springConfig)

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex h-[160vh] flex-col overflow-hidden bg-canvas pt-8 pb-0 antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        className="pointer-events-none absolute inset-0 z-[15] bg-gradient-to-r from-canvas via-canvas/80 to-transparent"
        style={{ opacity: veil }}
      />
      <motion.div className="relative z-10 mt-40" style={{ rotateX, rotateZ, translateY, opacity }}>
        <motion.div className="mb-12 flex flex-row-reverse space-x-20 space-x-reverse">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} lazy />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
