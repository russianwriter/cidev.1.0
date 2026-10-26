import { motion } from 'framer-motion'
import { Cloud, Code2, Cpu, LayoutDashboard, LifeBuoy, PenTool, Plug, Smartphone } from 'lucide-react'
import { services } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'
import Doodle from '../ui/Doodle'

const ICONS = { Cloud, Code2, Cpu, LayoutDashboard, LifeBuoy, PenTool, Plug, Smartphone }

export default function ServicesGrid() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-canvas py-28 md:py-36">
      <Doodle
        variant="star"
        className="pointer-events-none absolute right-[5%] top-24 hidden h-12 w-12 text-coral/50 lg:block"
      />

      <div className="container-page">
        <ScrollReveal className="mb-14 max-w-3xl">
          <p className="eyebrow eyebrow-coral mb-6">O que fazemos</p>
          <h2 className="text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
            Tudo que você precisa.
            <br />
            Nada que você não use.
          </h2>
        </ScrollReveal>

        <div className="grid auto-rows-[minmax(250px,auto)] grid-cols-1 gap-4 md:grid-cols-4">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon] || Plug
            const isLarge = service.span === 'md:col-span-2'

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-card border-2 border-line bg-surface p-7 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-fg/40 hover:shadow-[0_18px_40px_rgba(14,27,44,0.12)] ${service.span}`}
                data-cursor="hover"
              >
                <div className="flex items-start justify-between">
                  <span className="font-condensed text-sm tracking-[0.16em] text-fg-soft transition-colors duration-500">
                    {service.number}
                  </span>
                  <span className="text-fg transition-colors duration-500 group-hover:text-moss">
                    <Icon size={26} strokeWidth={1.5} />
                  </span>
                </div>

                <div className="mt-8">
                  <h3
                    className={`font-semibold leading-tight ${
                      isLarge ? 'text-2xl md:text-[1.75rem]' : 'text-xl'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-fg-soft">{service.desc}</p>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border-2 border-fg/20 px-3 py-1 font-condensed text-xs uppercase tracking-[0.12em] text-fg-soft transition-colors duration-500 group-hover:border-moss/40 group-hover:text-moss"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
