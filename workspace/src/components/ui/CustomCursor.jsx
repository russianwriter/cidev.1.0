import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState('default') // 'default' | 'hover' | 'text' | 'view'

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const ringX = useSpring(mouseX, { stiffness: 180, damping: 26 })
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 26 })

  const dotX = useSpring(mouseX, { stiffness: 600, damping: 40 })
  const dotY = useSpring(mouseY, { stiffness: 600, damping: 40 })

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  useEffect(() => {
    const onOver = (e) => {
      const el = e.target.closest?.('[data-cursor]')
      if (el) setCursorState(el.getAttribute('data-cursor'))
    }
    const onOut = (e) => {
      if (e.relatedTarget?.closest?.('[data-cursor]')) return
      setCursorState('default')
    }
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    return () => {
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  const dotVariants = {
    default: { width: 10, height: 10, borderRadius: 9999, backgroundColor: '#FFB224' },
    hover: { width: 54, height: 54, borderRadius: 9999, backgroundColor: '#FFB224' },
    text: { width: 3, height: 26, borderRadius: 2, backgroundColor: '#B45309' },
    view: { width: 68, height: 68, borderRadius: 9999, backgroundColor: '#FFB224' },
  }

  const ringVariants = {
    default: { width: 34, height: 34, opacity: 0.9, borderWidth: 1.5 },
    hover: { width: 54, height: 54, opacity: 0, borderWidth: 0 },
    text: { width: 0, height: 0, opacity: 0, borderWidth: 0 },
    view: { width: 68, height: 68, opacity: 0, borderWidth: 0 },
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{ x: dotX, y: dotY }}
      >
        <motion.div
          className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden font-condensed text-[10px] font-semibold uppercase tracking-[0.18em] text-ink"
          variants={dotVariants}
          animate={cursorState}
          transition={{ type: 'spring', stiffness: 420, damping: 30 }}
        >
          {cursorState === 'hover' && 'click'}
          {cursorState === 'view' && 'ver'}
        </motion.div>
      </motion.div>

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden rounded-full border-white md:block"
        style={{ x: ringX, y: ringY, mixBlendMode: 'difference' }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border-white"
          variants={ringVariants}
          animate={cursorState}
          transition={{ duration: 0.18 }}
        />
      </motion.div>
    </>
  )
}
