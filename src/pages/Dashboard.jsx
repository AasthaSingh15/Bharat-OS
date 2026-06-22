import { motion } from 'framer-motion'
import {
  Bell,
  ArrowRight,
  Calendar,
  Briefcase,
} from 'lucide-react'
import PersonalizedHero from '../components/dashboard/PersonalizedHero'
import DashboardCharts from '../components/dashboard/DashboardCharts'
import AIInsightsPanel from '../components/dashboard/AIInsightsPanel'
import LifeScoreCard from '../components/dashboard/LifeScoreCard'
import ImpactPanel from '../components/dashboard/ImpactPanel'
import LifeTimeline from '../components/dashboard/LifeTimeline'
import StatCard from '../components/ui/StatCard'
import GlassCard from '../components/ui/GlassCard'
import { stats, highlights, opportunities, reminders } from '../data/mockData'

const containerVariants = {
  animate: { transition: { staggerChildren: 0.07 } },
}

export default function Dashboard() {
  return (
    <div className="page dashboard">
      <PersonalizedHero />

      <motion.section
        className="stats-grid"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {stats.map((stat, i) => (
          <StatCard key={stat.label} {...stat} delay={0.1 + i * 0.07} />
        ))}
      </motion.section>

      <div className="life-os-grid">
        <LifeScoreCard />
        <ImpactPanel />
      </div>

      <LifeTimeline />

      <DashboardCharts />

      <div className="dashboard-bento">
        <AIInsightsPanel />

        <section className="dashboard-section">
          <div className="section-header">
            <div>
              <span className="section-header__badge">Live</span>
              <h2 className="section-header__title">Today's Highlights</h2>
              <p className="section-header__subtitle">AI-curated updates from your ecosystem</p>
            </div>
          </div>
          <div className="highlights-list">
            {highlights.map((item, i) => (
              <GlassCard key={item.id} className="highlight-card" delay={0.15 + i * 0.07}>
                <div className="highlight-card__header">
                  <span className={`tag tag--${item.tag.toLowerCase()}`}>{item.tag}</span>
                  <span className="highlight-card__time">{item.time}</span>
                </div>
                <h3 className="highlight-card__title">{item.title}</h3>
                <p className="highlight-card__desc">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </section>
      </div>

      <div className="dashboard-grid">
        <section className="dashboard-section">
          <div className="section-header">
            <div>
              <h2 className="section-header__title">Top Opportunities</h2>
              <p className="section-header__subtitle">Ranked by AI match score</p>
            </div>
          </div>
          <div className="opportunities-list">
            {opportunities.map((opp, i) => (
              <GlassCard key={opp.id} className="opportunity-row" delay={0.1 + i * 0.07}>
                <div className="opportunity-row__icon">
                  <Briefcase size={18} />
                </div>
                <div className="opportunity-row__info">
                  <h4>{opp.title}</h4>
                  <span>{opp.org} · {opp.type}</span>
                </div>
                <div className="opportunity-row__meta">
                  <span className="match-badge">{opp.match}% match</span>
                  <span className="deadline">
                    <Calendar size={14} /> {opp.deadline}
                  </span>
                </div>
                <button type="button" className="icon-btn" aria-label="View opportunity">
                  <ArrowRight size={18} />
                </button>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="dashboard-section">
          <div className="section-header">
            <div>
              <h2 className="section-header__title">Reminders</h2>
              <p className="section-header__subtitle">Critical deadlines ahead</p>
            </div>
          </div>
          <div className="reminders-stack">
            {reminders.map((reminder, i) => (
              <GlassCard key={reminder.id} className="reminder-card" delay={0.15 + i * 0.07}>
                <div className={`reminder-card__priority reminder-card__priority--${reminder.priority}`}>
                  <Bell size={16} />
                </div>
                <div className="reminder-card__content">
                  <p>{reminder.text}</p>
                  <span className="reminder-card__due">Due {reminder.due}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
