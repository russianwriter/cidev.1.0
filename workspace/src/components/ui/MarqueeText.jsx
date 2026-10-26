import { twMerge } from 'tailwind-merge'

export default function MarqueeText({ items, direction = 'forward', className, itemClassName }) {
  const animationClass = direction === 'reverse' ? 'animate-marquee-reverse' : 'animate-marquee'

  const trail = (list, keyPrefix) =>
    list.map((item, index) => (
      <div key={`${keyPrefix}-${index}`} className="flex shrink-0 items-center">
        <span className={twMerge('mx-8 md:mx-12', itemClassName)}>{item}</span>
        <span className="select-none text-sm text-coral" aria-hidden="true">
          &#9670;
        </span>
      </div>
    ))

  return (
    <div className={twMerge('group relative flex w-full overflow-hidden', className)}>
      <div className={twMerge('flex w-max shrink-0 whitespace-nowrap will-change-transform', animationClass)}>
        {trail(items, 'a')}
        {trail(items, 'b')}
      </div>
    </div>
  )
}
