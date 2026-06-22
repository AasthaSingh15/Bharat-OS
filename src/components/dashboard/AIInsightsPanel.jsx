import { motion } from 'framer-motion'
import { Brain, Sparkles, ChevronRight } from 'lucide-react'
import GlassCard from '../ui/GlassCard'
import { aiInsights } from '../../data/mockData'

const typeColors = {
  priority: 'insight--purple',
  opportunity: 'insight--blue',
  vault: 'insight--cyan',
  trend: 'insight--violet',
}

export default function AIInsightsPanel() {
  return (
    <GlassCard className="insights-panel" delay={0.2} glow>
      <div className="insights-panel__header">
        <div className="insights-panel__title-group">
          <div className="insights-panel__icon">
            <Brain size={18} strokeWidth={1.75} />
          </div>
          <div>
            <h2 className="insights-panel__title">AI Insights</h2>
            <p className="insights-panel__subtitle">Real-time intelligence from BharatOS</p>
          </div>
        </div>
        <span className="insights-panel__live">
          <span className="pulse-dot" /> Live
        </span>
      </div>

      <div className="insights-panel__list">
        {aiInsights.map((insight, i) => (
          <motion.div
            key={insight.id}
            className={`insight-item ${typeColors[insight.type]}`}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
            whileHover={{ x: 4 }}
          >
            <div className="insight-item__accent" />
            <div className="insight-item__body">
              <div className="insight-item__top">
                <span className="insight-item__title">
                  <Sparkles size={12} /> {insight.title}
                </span>
                <span className="insight-item__confidence">{insight.confidence}%</span>
              </div>
              <p className="insight-item__message">{insight.message}</p>
              <button type="button" className="insight-item__action">
                {insight.action} <ChevronRight size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  )
}
