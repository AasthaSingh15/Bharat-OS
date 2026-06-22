import { FileText, TrendingUp, Shield, MessageSquare } from 'lucide-react'
import GlassCard from './GlassCard'
import AnimatedCounter from './AnimatedCounter'

const iconMap = {
  FileText,
  TrendingUp,
  Shield,
  MessageSquare,
}

export default function StatCard({ label, value, suffix = '', change, icon, delay = 0 }) {
  const Icon = iconMap[icon] || FileText

  return (
    <GlassCard className="stat-card" delay={delay} glow>
      <div className="stat-card__glow-ring" aria-hidden="true" />
      <div className="stat-card__icon">
        <Icon size={20} strokeWidth={1.75} />
      </div>
      <div className="stat-card__content">
        <span className="stat-card__label">{label}</span>
        <span className="stat-card__value">
          <AnimatedCounter value={value} suffix={suffix} delay={delay + 0.15} />
        </span>
        <span className="stat-card__change">{change}</span>
      </div>
    </GlassCard>
  )
}
