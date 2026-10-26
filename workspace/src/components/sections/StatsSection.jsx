import AnimatedCounter from '../ui/AnimatedCounter'
import ScrollReveal from '../ui/ScrollReveal'
import Doodle from '../ui/Doodle'
import { stats } from '../../data/content'

export default function StatsSection() {
  return (
    <section className="stage-forest grain relative overflow-hidden py-24 md:py-32">
      <Doodle
        variant="underline"
        className="pointer-events-none absolute left-1/2 top-10 h-4 w-56 -translate-x-1/2 text-coral/60"
      />

      <div className="container-page relative z-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-3">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08} className="flex flex-col">
              <span className="font-display text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-none tracking-[-0.03em] tabular-nums text-lime">
                <AnimatedCounter
                  end={stat.num}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </span>
              <span className="mt-3 font-condensed text-xs uppercase tracking-[0.18em] text-cream/85 md:text-sm">
                {stat.label}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
