import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MagneticButton({ children, className, as = 'button', strength = 0.3, ...props }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 220, damping: 16 })
  const springY = useSpring(y, { stiffness: 220, damping: 16 })

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * strength)
    y.set((e.clientY - centerY) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const MotionTag = as === 'div' ? motion.div : motion.button

  return (
    <MotionTag
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className={className}
      data-cursor="hover"
      {...props}
    >
      {children}
    </MotionTag>
  )
}
