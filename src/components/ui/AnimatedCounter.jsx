import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', duration = 1.8, delay = 0, className = '' }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    let frame
    let startTime
    const timeout = setTimeout(() => {
      const animate = (now) => {
        if (!startTime) startTime = now
        const progress = Math.min((now - startTime) / (duration * 1000), 1)
        const eased = 1 - Math.pow(1 - progress, 4)
        setDisplay(Math.round(eased * value))
        if (progress < 1) frame = requestAnimationFrame(animate)
      }
      frame = requestAnimationFrame(animate)
    }, delay * 1000)
    return () => {
      clearTimeout(timeout)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [value, duration, delay])

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      {display.toLocaleString()}{suffix}
    </motion.span>
  )
}
