import { motion } from 'framer-motion'
import MagneticButton from '../ui/MagneticButton'
import { WhatsApp } from '../ui/SocialIcons'
import Doodle from '../ui/Doodle'

export default function CTASection() {
  return (
    <section className="stage-forest grain relative flex min-h-[88vh] flex-col justify-center overflow-hidden py-32">
      <div className="arc-pattern pointer-events-none absolute inset-0 opacity-60" />

      <div
        className="cta-blob cta-blob-a pointer-events-none absolute -top-24 left-[8%] h-[36vw] w-[36vw] max-h-[560px] max-w-[560px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgb(255 178 36 / 0.1) 0%, transparent 70%)' }}
      />
      <div
        className="cta-blob cta-blob-b pointer-events-none absolute -bottom-32 right-[6%] h-[42vw] w-[42vw] max-h-[680px] max-w-[680px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgb(255 178 36 / 0.1) 0%, transparent 70%)' }}
      />

      <div className="container-page relative z-10 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="eyebrow eyebrow-coral mb-8 text-cream"
        >
          Pronto para começar?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.08 }}
          className="text-balance font-display text-[clamp(2.6rem,8.5vw,7rem)] font-semibold leading-[0.98] tracking-[-0.02em] text-cream"
          data-cursor="hover"
        >
          Vamos construir algo
          <br />
          <span className="italic text-lime">que dura.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-cream/80"
        >
          Conte a sua ideia. Em uma conversa de 30 minutos a gente sai com clareza sobre escopo, prazo e
          próximo passo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-11 flex flex-col items-center gap-5"
        >
          <MagneticButton
            onClick={() => window.open('https://wa.me/5588982313374', '_blank', 'noopener')}
            className="btn-lime group px-10 py-5 text-lg"
          >
            Agendar conversa
            <WhatsApp className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </MagneticButton>
          <a
            href="mailto:cidev@gmail.com"
            className="border-b border-cream/30 pb-1 font-condensed text-sm uppercase tracking-[0.16em] text-cream/70 transition-colors hover:border-cream hover:text-cream"
            data-cursor="hover"
          >
            ou escreva para cidev@gmail.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <div className="flex -space-x-3">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className={`h-10 w-10 rounded-full border-2 border-forest ${
                  i % 2 === 0 ? 'bg-cream/20' : 'bg-lime/50'
                }`}
              />
            ))}
          </div>
          <p className="font-condensed text-xs uppercase tracking-[0.18em] text-cream/60">
            Mais de 32 produtos no ar com a nossa assinatura
          </p>
        </motion.div>
      </div>

      <Doodle
        variant="squiggle"
        className="pointer-events-none absolute bottom-10 left-1/2 hidden h-8 w-44 -translate-x-1/2 text-coral/60 md:block"
      />
    </section>
  )
}
