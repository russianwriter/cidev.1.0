import ScrollReveal from '../ui/ScrollReveal'
import Doodle from '../ui/Doodle'
import { values } from '../../data/content'
import equipe from '../../assets/equipe.webp'

export default function Manifesto() {
  return (
    <section id="quem-somos" className="relative overflow-hidden bg-canvas py-28 md:py-36">
      <Doodle
        variant="squiggle"
        className="pointer-events-none absolute left-[4%] top-16 hidden h-8 w-32 text-coral/60 lg:block"
      />

      <div className="container-page grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <ScrollReveal>
          <div className="overflow-hidden rounded-frame border-2 border-line bg-canvas-deep">
            <img src={equipe} alt="Equipe Cidev" width={800} height={600} decoding="async" className="w-full object-contain" />
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal>
            <p className="eyebrow eyebrow-coral mb-6">Quem somos</p>
            <h2 className="max-w-xl text-[clamp(2.25rem,4.6vw,3.75rem)] font-bold leading-[1.04] tracking-[-0.02em]">
              Prazer, somos a Cidev.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-7 max-w-xl space-y-4 text-lg leading-relaxed text-fg-soft">
              <p>
                A Cidev é uma software house que transforma necessidades do negócio em software sob medida. Sites, sistemas web, automações e aplicativos pensados para organizar processos, fortalecer a presença online e dar mais clareza na hora de decidir.
              </p>
              <p>
                Acreditamos que tecnologia boa se sente na rotina, não no manual. Por isso unimos engenharia de alto nível a um atendimento próximo e transparente: cada projeto nasce da realidade de quem vai usá-lo e é construído para crescer junto com o negócio.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.18}>
            <a
              href="#processo"
              className="mt-9 inline-flex items-center gap-2 font-condensed text-sm uppercase tracking-[0.16em] text-fg transition-colors hover:text-coral"
              data-cursor="hover"
            >
              Como a gente trabalha
              <span aria-hidden="true">&rarr;</span>
            </a>
          </ScrollReveal>
        </div>
      </div>

      <div className="container-page mt-24 grid grid-cols-1 gap-10 border-t-2 border-fg/15 pt-14 md:grid-cols-3">
        {values.map((value, i) => (
          <ScrollReveal key={value.number} delay={i * 0.1}>
            <div className="flex flex-col">
              <span className="font-display text-5xl font-bold text-coral">{value.number}</span>
              <h3 className="mt-5 text-2xl font-bold">{value.title}</h3>
              <p className="mt-3 max-w-sm leading-relaxed text-fg-soft">{value.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
