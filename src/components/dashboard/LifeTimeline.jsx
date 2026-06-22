import { motion } from 'framer-motion'
import { BellRing, Briefcase, FileCheck2, Landmark, Rocket } from 'lucide-react'
import { lifeTimeline } from '../../data/mockData'
import GlassCard from '../ui/GlassCard'

const iconMap = {
  vault: FileCheck2,
  scheme: Landmark,
  opportunity: Rocket,
  career: Briefcase,
  alert: BellRing,
}

export default function LifeTimeline() {
  return (
    <GlassCard className="life-timeline" delay={0.2} glow>
      <div className="section-header">
        <div>
          <span className="section-header__badge section-header__badge--blue">AI Timeline</span>
          <h2 className="section-header__title">Your Life OS Flow</h2>
          <p className="section-header__subtitle">Documents, schemes, opportunities, and reminders in one chain</p>
        </div>
      </div>

      <div className="timeline-track">
        {lifeTimeline.map((item, index) => {
          const Icon = iconMap[item.type] || Rocket
          return (
            <motion.div
              key={item.id}
              className={`timeline-item timeline-item--${item.type}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + index * 0.08 }}
            >
              <div className="timeline-item__node">
                <Icon size={16} />
              </div>
              <div className="timeline-item__content">
                <h3>{item.title}</h3>
                <p>{item.meta}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </GlassCard>
  )
}
