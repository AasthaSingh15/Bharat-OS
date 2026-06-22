import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Brain, Zap, FileSearch, TrendingUp } from 'lucide-react'
import { recommendations } from '../../data/mockData'
import FloatingCore from '../effects/FloatingCore'
import AnimatedCounter from '../ui/AnimatedCounter'

const iconMap = { Rocket: Zap, Shield: Brain, FileText: FileSearch }

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

export default function PersonalizedHero() {
  const greeting = getGreeting()

  return (
    <motion.section
      className="hero-os glass-card glass-card--hero"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="glass-card__shine" aria-hidden="true" />
      <div className="hero-os__content">
        <motion.div
          className="hero-os__badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="pulse-dot" />
          BharatOS Neural Engine · Online
        </motion.div>

        <h1 className="hero-os__title">
          {greeting},{' '}
          <span className="gradient-text shimmer-text">Aastha</span>
        </h1>

        <p className="hero-os__subtitle">
          Your AI operating system has analyzed{' '}
          <strong>18 opportunities</strong> and{' '}
          <strong>7 government schemes</strong> tailored to your profile.
        </p>

        <div className="hero-os__metrics">
          <div className="hero-os__metric">
            <AnimatedCounter value={94} suffix="%" delay={0.3} className="hero-os__metric-value" />
            <span className="hero-os__metric-label">Profile strength</span>
          </div>
          <div className="hero-os__metric-divider" />
          <div className="hero-os__metric">
            <AnimatedCounter value={3} delay={0.4} className="hero-os__metric-value" />
            <span className="hero-os__metric-label">Actions today</span>
          </div>
          <div className="hero-os__metric-divider" />
          <div className="hero-os__metric">
            <AnimatedCounter value={2} delay={0.5} className="hero-os__metric-value" />
            <span className="hero-os__metric-label">Urgent items</span>
          </div>
        </div>

        <div className="hero-os__recommendations">
          <div className="hero-os__rec-header">
            <Sparkles size={15} />
            <span>AI Recommendations</span>
          </div>
          <div className="hero-os__rec-list">
            {recommendations.map((rec, i) => {
              const Icon = iconMap[rec.icon] || TrendingUp
              return (
                <motion.button
                  key={rec.id}
                  type="button"
                  className={`rec-chip rec-chip--${rec.priority}`}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.1 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon size={14} />
                  <div className="rec-chip__text">
                    <span className="rec-chip__title">{rec.title}</span>
                    <span className="rec-chip__reason">{rec.reason}</span>
                  </div>
                  <ArrowRight size={14} className="rec-chip__arrow" />
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>

      <FloatingCore />
    </motion.section>
  )
}
