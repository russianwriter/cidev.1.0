import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

export default function ThemeToggle({ onLight = false, className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  const tone = onLight
    ? 'border-fg/20 text-fg hover:border-fg hover:bg-solid hover:text-solid-fg'
    : 'border-cream/40 text-cream hover:border-cream hover:bg-cream hover:text-forest'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      title={isDark ? 'Modo claro' : 'Modo escuro'}
      data-cursor="hover"
      className={`relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border transition-colors duration-[250ms] ${tone} ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ y: 14, opacity: 0, rotate: -30 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -14, opacity: 0, rotate: 30 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center justify-center"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
