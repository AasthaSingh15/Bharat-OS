import { Award, BriefcaseBusiness, Landmark, Trophy } from 'lucide-react'
import { impactMetrics } from '../../data/mockData'
import AnimatedCounter from '../ui/AnimatedCounter'
import GlassCard from '../ui/GlassCard'

const icons = [Award, Landmark, BriefcaseBusiness, Trophy]

export default function ImpactPanel() {
  return (
    <section className="impact-panel">
      <div className="section-header">
        <div>
          <span className="section-header__badge section-header__badge--cyan">Impact</span>
          <h2 className="section-header__title">Potential Benefits Unlocked</h2>
          <p className="section-header__subtitle">A live snapshot of what BharatOS has surfaced for you</p>
        </div>
      </div>

      <div className="impact-grid">
        {impactMetrics.map((metric, index) => {
          const Icon = icons[index]
          return (
            <GlassCard key={metric.label} className="impact-card" delay={0.12 + index * 0.07}>
              <div className="impact-card__icon">
                <Icon size={18} />
              </div>
              <span className="impact-card__label">{metric.label}</span>
              <div className="impact-card__value">
                {metric.prefix}
                <AnimatedCounter value={metric.value} suffix={metric.suffix} delay={0.2 + index * 0.08} />
              </div>
              <p>{metric.note}</p>
            </GlassCard>
          )
        })}
      </div>
    </section>
  )
}
