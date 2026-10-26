import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Github, Linkedin, Instagram } from '../ui/SocialIcons'
import ThemeToggle from '../ui/ThemeToggle'
import BrandLogo from '../ui/BrandLogo'

const NAV_LINKS = [
  { label: 'Quem somos', href: '/#quem-somos' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Processo', href: '/#processo' },
  { label: 'Trabalho', href: '/#trabalho' },
  { label: 'Stack', href: '/#stack' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 70))

  const onLight = scrolled && !open
  const textTone = 'text-fg'
  const linkTone = 'text-fg-soft hover:text-fg'

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          open
            ? 'border-b border-transparent bg-transparent py-3'
            : onLight
              ? 'border-b-2 border-line bg-canvas/90 py-3 shadow-[0_10px_30px_rgba(14,27,44,0.10)] backdrop-blur-xl'
              : 'border-b border-transparent bg-transparent py-5'
        }`}
      >
        <div className="container-page flex items-center justify-between">
          <a href="/" className="group z-50 flex items-center gap-2" data-cursor="hover">
            <BrandLogo className="h-12 w-auto shrink-0" onDark={open} />
            <span className="mb-1 h-1.5 w-1.5 self-end rounded-full bg-lime motion-safe:animate-blink" />
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`link-underline font-condensed text-sm font-semibold uppercase tracking-[0.14em] transition-colors ${linkTone}`}
                data-cursor="hover"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5 md:gap-3">
            <ThemeToggle onLight={!open} />

            <div className="hidden md:block">
              <button
                type="button"
                onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn rounded-card bg-solid px-5 py-2.5 font-condensed text-sm font-semibold uppercase tracking-[0.14em] text-solid-fg hover:bg-forest hover:text-cream"
              >
                Começar projeto
              </button>
            </div>

            <button
              className={`z-50 p-2 md:hidden ${open ? 'text-cream' : textTone}`}
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menu"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="stage-forest fixed inset-0 z-40 flex flex-col justify-center px-8 md:hidden"
          >
            <nav className="flex flex-col gap-5">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  onClick={() => setOpen(false)}
                  className="font-display text-5xl text-cream transition-colors hover:text-lime"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-12 flex gap-6 text-cream/70"
            >
              <a href="#" aria-label="GitHub"><Github size={22} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={22} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={22} /></a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
