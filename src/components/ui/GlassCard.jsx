import { motion } from 'framer-motion'

export default function GlassCard({
  children,
  className = '',
  delay = 0,
  hover = true,
  glow = false,
  ...props
}) {
  return (
    <motion.div
      className={`glass-card ${glow ? 'glass-card--glow' : ''} ${className}`}
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        hover
          ? {
              y: -4,
              scale: 1.008,
              transition: { duration: 0.25, ease: 'easeOut' },
            }
          : undefined
      }
      {...props}
    >
      <div className="glass-card__shine" aria-hidden="true" />
      {children}
    </motion.div>
  )
}
