import { useTheme } from '../../hooks/useTheme'

export default function BrandLogo({ className = '', onDark = false, alt = 'Cidev' }) {
  const { theme } = useTheme()
  const isDark = onDark || theme === 'dark'
  return (
    <img
      src={isDark ? '/cidev_fundo_escuro.png?v=2' : '/cidev_fundo_branco.png?v=2'}
      alt={alt}
      width={120}
      height={40}
      className={className}
    />
  )
}
