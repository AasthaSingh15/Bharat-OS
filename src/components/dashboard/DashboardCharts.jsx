import { motion } from 'framer-motion'
import GlassCard from '../ui/GlassCard'
import { chartData } from '../../data/mockData'

const W = 340
const H = 140
const PAD = { top: 12, right: 8, bottom: 24, left: 8 }

function buildPath(data, key, maxVal) {
  const innerW = W - PAD.left - PAD.right
  const innerH = H - PAD.top - PAD.bottom
  const points = data.map((d, i) => {
    const x = PAD.left + (i / (data.length - 1)) * innerW
    const y = PAD.top + innerH - (d[key] / maxVal) * innerH
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
  })
  return points.join(' ')
}

function buildArea(data, key, maxVal) {
  const line = buildPath(data, key, maxVal)
  const innerW = W - PAD.left - PAD.right
  const innerH = H - PAD.top - PAD.bottom
  const lastX = PAD.left + innerW
  const baseY = PAD.top + innerH
  return `${line} L ${lastX} ${baseY} L ${PAD.left} ${baseY} Z`
}

export default function DashboardCharts() {
  const { weeklyActivity, opportunityMix } = chartData
  const maxVal = Math.max(...weeklyActivity.flatMap((d) => [d.docs, d.opps, d.ai]))

  const aiPath = buildPath(weeklyActivity, 'ai', maxVal)
  const aiArea = buildArea(weeklyActivity, 'ai', maxVal)
  const oppPath = buildPath(weeklyActivity, 'opps', maxVal)

  const total = opportunityMix.reduce((s, d) => s + d.value, 0)
  let cumulative = 0
  const segments = opportunityMix.map((d) => {
    const start = cumulative
    cumulative += (d.value / total) * 100
    return { ...d, start, end: cumulative }
  })

  return (
    <div className="charts-row">
      <GlassCard className="chart-card" delay={0.15}>
        <div className="chart-card__header">
          <div>
            <h3 className="chart-card__title">Weekly Activity</h3>
            <p className="chart-card__subtitle">AI interactions & opportunity scans</p>
          </div>
          <div className="chart-legend">
            <span className="chart-legend__item"><i className="chart-legend__dot chart-legend__dot--ai" /> AI</span>
            <span className="chart-legend__item"><i className="chart-legend__dot chart-legend__dot--opp" /> Opps</span>
          </div>
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} className="chart-svg" aria-label="Weekly activity chart">
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(139,92,246,0.35)" />
              <stop offset="100%" stopColor="rgba(139,92,246,0)" />
            </linearGradient>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          {[0.25, 0.5, 0.75].map((pct) => (
            <line
              key={pct}
              x1={PAD.left}
              x2={W - PAD.right}
              y1={PAD.top + (H - PAD.top - PAD.bottom) * (1 - pct)}
              y2={PAD.top + (H - PAD.top - PAD.bottom) * (1 - pct)}
              className="chart-grid-line"
            />
          ))}
          <motion.path
            d={aiArea}
            fill="url(#areaGrad)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
          <motion.path
            d={oppPath}
            fill="none"
            stroke="rgba(96,165,250,0.7)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
          <motion.path
            d={aiPath}
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.2 }}
          />
          {weeklyActivity.map((d, i) => {
            const x = PAD.left + (i / (weeklyActivity.length - 1)) * (W - PAD.left - PAD.right)
            return (
              <text key={d.day} x={x} y={H - 4} className="chart-label" textAnchor="middle">
                {d.day}
              </text>
            )
          })}
        </svg>
      </GlassCard>

      <GlassCard className="chart-card chart-card--donut" delay={0.25}>
        <div className="chart-card__header">
          <div>
            <h3 className="chart-card__title">Opportunity Mix</h3>
            <p className="chart-card__subtitle">Distribution by category</p>
          </div>
        </div>
        <div className="donut-layout">
          <div className="donut-chart">
            <svg viewBox="0 0 120 120" className="donut-svg">
              {segments.map((seg, i) => {
                const r = 44
                const cx = 60
                const cy = 60
                const startAngle = (seg.start / 100) * 360 - 90
                const endAngle = (seg.end / 100) * 360 - 90
                const largeArc = endAngle - startAngle > 180 ? 1 : 0
                const x1 = cx + r * Math.cos((startAngle * Math.PI) / 180)
                const y1 = cy + r * Math.sin((startAngle * Math.PI) / 180)
                const x2 = cx + r * Math.cos((endAngle * Math.PI) / 180)
                const y2 = cy + r * Math.sin((endAngle * Math.PI) / 180)
                return (
                  <motion.path
                    key={seg.label}
                    d={`M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`}
                    fill={seg.color}
                    fillOpacity={0.85}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    style={{ transformOrigin: '60px 60px' }}
                  />
                )
              })}
              <circle cx="60" cy="60" r="28" className="donut-hole" />
            </svg>
            <div className="donut-center">
              <span className="donut-center__value">18</span>
              <span className="donut-center__label">Active</span>
            </div>
          </div>
          <div className="donut-legend">
            {opportunityMix.map((item, i) => (
              <motion.div
                key={item.label}
                className="donut-legend__item"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
              >
                <span className="donut-legend__dot" style={{ background: item.color }} />
                <span className="donut-legend__label">{item.label}</span>
                <span className="donut-legend__value">{item.value}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </GlassCard>
    </div>
  )
}
