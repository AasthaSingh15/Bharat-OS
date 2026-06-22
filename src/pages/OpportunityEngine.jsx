import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Briefcase, Building2, Code2, Calendar, ExternalLink } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import GlassCard from '../components/ui/GlassCard'
import { opportunityCategories } from '../data/mockData'

const tabs = [
  { id: 'scholarships', label: 'Scholarships', icon: GraduationCap },
  { id: 'internships', label: 'Internships', icon: Briefcase },
  { id: 'jobs', label: 'Jobs', icon: Building2 },
  { id: 'hackathons', label: 'Hackathons', icon: Code2 },
]

export default function OpportunityEngine() {
  const [activeTab, setActiveTab] = useState('scholarships')
  const items = opportunityCategories[activeTab]

  return (
    <div className="page opportunity-engine">
      <PageHeader
        title="Opportunity Engine"
        subtitle="AI-matched scholarships, internships, jobs, and hackathons"
        badge="AI Powered"
      />

      <div className="tab-bar">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            className={`tab ${activeTab === id ? 'tab--active' : ''}`}
            onClick={() => setActiveTab(id)}
          >
            <Icon size={18} />
            {label}
            {activeTab === id && (
              <motion.div
                className="tab__indicator"
                layoutId="tab-indicator"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="opportunity-grid"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
        >
          {items.map((item, i) => (
            <GlassCard key={item.id} className="opp-card" delay={i * 0.06}>
              <div className="opp-card__header">
                <span className="match-badge">{item.match}% match</span>
                <button type="button" className="icon-btn" aria-label="Open">
                  <ExternalLink size={16} />
                </button>
              </div>
              <h3 className="opp-card__title">{item.title}</h3>
              <p className="opp-card__org">{item.org}</p>
              <div className="opp-card__details">
                <span className="opp-card__amount">{item.amount}</span>
                <span className="opp-card__deadline">
                  <Calendar size={14} /> {item.deadline}
                </span>
              </div>
              <div className="opp-card__bar">
                <motion.div
                  className="opp-card__bar-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${item.match}%` }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                />
              </div>
              <button type="button" className="btn btn--ghost btn--full">
                View Details
              </button>
            </GlassCard>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
