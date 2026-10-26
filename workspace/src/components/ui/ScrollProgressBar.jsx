import { motion, useScroll } from 'framer-motion'

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[100] h-[3px] origin-left bg-coral"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
