import { ArrowUpRight } from 'lucide-react'
import { Github, Linkedin, Instagram, Dribbble } from '../ui/SocialIcons'
import Doodle from '../ui/Doodle'
import BrandLogo from '../ui/BrandLogo'

const columns = [
  {
    title: 'Serviços',
    links: [
      { label: 'Desenvolvimento Web', href: '/#servicos' },
      { label: 'Apps Mobile', href: '/#servicos' },
      { label: 'Produtos SaaS', href: '/#servicos' },
      { label: 'IA Aplicada', href: '/#servicos' },
      { label: 'Cloud & DevOps', href: '/#servicos' },
    ],
  },
  {
    title: 'Estúdio',
    links: [
      { label: 'Quem somos', href: '/#quem-somos' },
      { label: 'Processo', href: '/#processo' },
      { label: 'Trabalho', href: '/#trabalho' },
      { label: 'Stack', href: '/#stack' },
      { label: 'Depoimentos', href: '/#depoimentos' },
      { label: 'Portfólio', href: '/portfolio' },
    ],
  },
]

let raf = 0

function scrollThrough(el) {
  if (!el) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.scrollIntoView()
    return
  }
  cancelAnimationFrame(raf)
  const start = window.scrollY
  const end = el.getBoundingClientRect().top + start - 88
  const dur = Math.min(2200, Math.max(1100, Math.abs(end - start) * 0.55))
  const t0 = performance.now()
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2)
  const stop = () => cancelAnimationFrame(raf)
  window.addEventListener('wheel', stop, { once: true, passive: true })
  window.addEventListener('touchstart', stop, { once: true, passive: true })
  const tick = (now) => {
    const p = Math.min(1, (now - t0) / dur)
    window.scrollTo(0, start + (end - start) * ease(p))
    if (p < 1) raf = requestAnimationFrame(tick)
  }
  raf = requestAnimationFrame(tick)
}

export default function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden bg-canvas pt-24 pb-8">
      <Doodle
        variant="squiggle"
        className="pointer-events-none absolute -right-10 top-10 hidden h-10 w-40 text-coral/70 md:block"
      />

      <div className="container-page relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
          <div className="md:col-span-1">
            <div className="mb-5 flex items-center gap-2">
              <BrandLogo className="h-14 w-auto shrink-0" />
              <span className="mb-1 h-1.5 w-1.5 self-end rounded-full bg-moss" />
            </div>
            <p className="mb-8 max-w-xs text-sm leading-relaxed text-fg-soft">
              Software house brasileira. Construímos produtos digitais com raiz, ofício e vontade de escalar.
            </p>
            <div className="flex gap-2 text-fg-soft">
              {[Github, Linkedin, Instagram, Dribbble].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="rounded-full border-2 border-line p-2.5 transition-colors hover:border-fg hover:bg-solid hover:text-solid-fg"
                  data-cursor="hover"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 font-condensed text-sm font-semibold uppercase tracking-[0.16em] text-fg">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3.5 text-sm text-fg-soft">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="transition-colors hover:text-fg"
                      data-cursor="hover"
                      onClick={
                        col.title === 'Estúdio' && link.href.startsWith('/#')
                          ? (e) => {
                              const id = link.href.slice(2)
                              const el = document.getElementById(id)
                              if (!el) return
                              e.preventDefault()
                              scrollThrough(el)
                              history.replaceState(null, '', link.href)
                            }
                          : undefined
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-5 font-condensed text-sm font-semibold uppercase tracking-[0.16em] text-fg">
              Contato
            </h4>
            <div className="flex flex-col gap-3.5 text-sm text-fg-soft">
              <a
                href="mailto:cidev@gmail.com"
                className="flex items-center gap-1.5 transition-colors hover:text-fg"
                data-cursor="hover"
              >
                cidev@gmail.com
                <ArrowUpRight size={14} className="text-coral" />
              </a>
              <p className="mt-2 leading-relaxed text-fg-soft">
                Acopiara, Ceará
                <br />
                Nordeste, Brasil
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t-2 border-fg/15 pt-8 text-xs text-fg-soft md:flex-row">
          <p>
            ©{' '}
            <span
              title="Ano de fundação da Cidev."
              className="cursor-help font-medium text-fg transition-colors hover:text-coral"
            >
              2026
            </span>{' '}
            Cidev. Todos os direitos reservados.
          </p>
          <p className="font-condensed uppercase tracking-[0.16em]">Feito no Brasil, rodando no mundo</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-fg">Privacidade</a>
            <span className="text-coral">·</span>
            <a href="#" className="transition-colors hover:text-fg">Termos</a>
            <span className="text-coral">·</span>
            <a href="#" className="transition-colors hover:text-fg">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
