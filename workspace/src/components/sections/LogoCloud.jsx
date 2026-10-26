import MarqueeText from '../ui/MarqueeText'
import { clients } from '../../data/content'

const Logo = ({ name }) => (
  <span
    className="font-display text-3xl font-bold tracking-tight text-fg/85 transition-colors duration-300 hover:text-fg md:text-5xl"
    data-cursor="hover"
  >
    {name}
  </span>
)

export default function LogoCloud() {
  const items = clients.map((c) => <Logo key={c} name={c} />)

  return (
    <section className="relative overflow-hidden border-b border-fg/10 bg-canvas py-12 md:py-16">
      <div className="container-page relative z-10 mb-12">
        <p className="eyebrow eyebrow-coral text-fg-soft">Parceiros</p>
      </div>

      <MarqueeText items={items} />

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-canvas to-transparent md:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-canvas to-transparent md:w-40" />
    </section>
  )
}
