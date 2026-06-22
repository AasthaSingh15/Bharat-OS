import { motion } from 'framer-motion'
import { Activity, CheckCircle2 } from 'lucide-react'
import { lifeScore } from '../../data/mockData'
import AnimatedCounter from '../ui/AnimatedCounter'
import GlassCard from '../ui/GlassCard'

export default function LifeScoreCard() {
  const progress = lifeScore.score * 3.6
  const scoreTone = lifeScore.score >= 90 ? 'excellent' : lifeScore.score >= 75 ? 'strong' : 'attention'

  return (
    <GlassCard className={`life-score-card life-score-card--${scoreTone}`} delay={0.15} glow>
      <div className="life-score-card__orb" aria-hidden="true" />
      <div className="life-score-card__top">
        <div>
          <span className="eyebrow">Unified Intelligence</span>
          <h2>{lifeScore.label}</h2>
          <p>{lifeScore.summary}</p>
        </div>
        <span className="life-score-card__trend">
          <Activity size={14} /> {lifeScore.trend}
        </span>
      </div>

      <div className="life-score-card__body">
        <div className="life-score-ring" style={{ '--score-angle': `${progress}deg` }}>
          <div className="life-score-ring__inner">
            <span className="life-score-ring__label">Score</span>
            <AnimatedCounter value={lifeScore.score} suffix="/100" className="life-score-ring__value" />
            <span className="life-score-ring__status">National demo ready</span>
          </div>
        </div>

        <div className="life-score-factors">
          {lifeScore.factors.map((factor, index) => (
            <motion.div
              key={factor.label}
              className="life-score-factor"
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + index * 0.07 }}
            >
              <div className="life-score-factor__head">
                <span><CheckCircle2 size={13} /> {factor.label}</span>
                <strong>{factor.value}%</strong>
              </div>
              <div className="life-score-factor__track">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: `${factor.value}%` }}
                  transition={{ delay: 0.35 + index * 0.08, duration: 0.9, ease: 'easeOut' }}
                />
              </div>
              <small>{factor.detail}</small>
            </motion.div>
          ))}
        </div>
      </div>
    </GlassCard>
  )
}
