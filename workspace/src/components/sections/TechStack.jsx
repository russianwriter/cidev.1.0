import { motion } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import { stackGroups } from '../../data/content'

export default function TechStack() {
  return (
    <section id="stack" className="border-y-2 border-fg/15 bg-canvas py-28 md:py-32">
      <div className="container-page">
        <ScrollReveal className="mb-16 max-w-2xl">
          <p className="eyebrow eyebrow-coral mb-6">Tecnologia</p>
          <h2 className="text-[clamp(2rem,4.4vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.02em]">
            Ferramentas escolhidas a dedo.
          </h2>
          <p className="mt-5 leading-relaxed text-fg-soft">
            Nada de modinha por modinha. Usamos o que mantém seu produto de pé por anos.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-8">
          {stackGroups.map((group, i) => (
            <ScrollReveal key={group.cat} delay={i * 0.08}>
              <h3 className="mb-5 border-b-2 border-fg/15 pb-4 font-condensed text-sm font-semibold uppercase tracking-[0.16em] text-fg">
                {group.cat}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.06 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="rounded-full border-2 border-fg/25 px-3.5 py-1.5 font-condensed text-xs uppercase tracking-[0.12em] text-fg-soft hover:border-ink hover:bg-ink hover:text-cream dark:hover:border-moss dark:hover:bg-moss dark:hover:text-canvas"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
