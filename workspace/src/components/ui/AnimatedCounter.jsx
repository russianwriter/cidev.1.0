import CountUpRaw from 'react-countup'
import { useInView } from 'react-intersection-observer'

const CountUp = CountUpRaw.default || CountUpRaw

export default function AnimatedCounter({
  end,
  prefix = '',
  suffix = '',
  decimals = 0,
  separator = '.',
  decimal = ',',
}) {
  const [ref, inView] = useInView({ triggerOnce: true })

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp
          start={0}
          end={end}
          duration={1.4}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          separator={separator}
          decimal={decimal}
        />
      ) : (
        <span>
          {prefix}0{suffix}
        </span>
      )}
    </span>
  )
}
