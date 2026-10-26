import { ArrowUpRight } from 'lucide-react'
import { caseStudies } from '../data/content'
import ScrollReveal from '../components/ui/ScrollReveal'

function Project({ data, reverse }) {
  return (
    <article className="border-t-2 border-line py-16 md:py-24">
      <div className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${reverse ? 'md:[&>div:first-child]:order-2' : ''}`}>
        <div className={`grid gap-2 ${data.images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : ''}`}>
          {data.images.map((src, i) => (
            <div key={src} className="overflow-hidden rounded-frame border-2 border-line bg-canvas-deep">
              <img
                src={src}
                alt={data.alts?.[i] || data.alt || ''}
                width={1600}
                height={900}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[16/9] bg-canvas-deep object-cover"
              />
            </div>
          ))}
        </div>

        <div>
          <p className="font-condensed text-xs uppercase tracking-[0.16em] text-moss">{data.industry}</p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
            {data.company}
          </h2>
          <p className="mt-2 font-display text-xl italic text-moss">{data.result}</p>
          <p className="mt-6 max-w-xl leading-relaxed text-fg-soft">{data.desc}</p>

          <dl className="mt-10 space-y-6">
            {[
              ['Desafio', data.challenge],
              ['O que fizemos', data.solution],
              ['Resultado', data.outcome],
            ].map(([label, text]) => (
              <div key={label}>
                <dt className="font-condensed text-xs uppercase tracking-[0.16em] text-fg">{label}</dt>
                <dd className="mt-2 max-w-xl leading-relaxed text-fg-soft">{text}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-2">
            {data.services.map((tag) => (
              <span
                key={tag}
                className="rounded-full border-2 border-line px-3 py-1 font-condensed text-xs uppercase tracking-[0.12em] text-fg-soft"
              >
                {tag}
              </span>
            ))}
          </div>

          {data.url ? (
            <a
              href={data.url}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-card border-2 border-fg bg-canvas px-5 py-2.5 text-sm font-bold text-fg transition-colors duration-[400ms] hover:bg-fg hover:text-canvas"
            >
              Ver projeto ao vivo
              <ArrowUpRight size={16} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export default function Portfolio() {
  return (
    <section className="bg-canvas pb-28 pt-28 md:pb-36 md:pt-36">
      <div className="container-page">
        <ScrollReveal className="max-w-3xl">
          <p className="eyebrow eyebrow-coral mb-6">Portfólio</p>
          <h1 className="text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
            Projetos que a gente construiu.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-soft">
            Os mesmos trabalhos da home, com o contexto que não cabe num card.
          </p>
        </ScrollReveal>

        <div className="mt-8">
          {caseStudies.map((cs, i) => (
            <ScrollReveal key={cs.id} delay={0.06} y={40}>
              <Project data={cs} reverse={i % 2 === 1} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
