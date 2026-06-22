import { useEffect, useState } from 'react'

export default function useAnimatedCounter(end, duration = 1.8, delay = 0) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let frame
    let startTime

    const timeout = setTimeout(() => {
      const animate = (now) => {
        if (!startTime) startTime = now
        const elapsed = now - startTime
        const progress = Math.min(elapsed / (duration * 1000), 1)
        const eased = 1 - Math.pow(1 - progress, 4)
        setCount(Math.round(eased * end))
        if (progress < 1) frame = requestAnimationFrame(animate)
      }
      frame = requestAnimationFrame(animate)
    }, delay * 1000)

    return () => {
      clearTimeout(timeout)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [end, duration, delay])

  return count
}
