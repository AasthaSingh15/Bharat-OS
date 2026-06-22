import { motion } from 'framer-motion'
import { Shield, CheckCircle, AlertTriangle, HelpCircle } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import GlassCard from '../components/ui/GlassCard'
import { schemes } from '../data/mockData'

const statusConfig = {
  Eligible: { icon: CheckCircle, className: 'status--eligible' },
  'Partial Match': { icon: AlertTriangle, className: 'status--partial' },
  'Review Required': { icon: HelpCircle, className: 'status--review' },
}

export default function GovernmentSchemeAdvisor() {
  return (
    <div className="page scheme-advisor">
      <PageHeader
        title="Government Scheme Advisor"
        subtitle="Personalized scheme recommendations based on your profile and documents"
        badge="Govt. Verified"
      />

      <div className="scheme-grid">
        {schemes.map((scheme, i) => {
          const StatusIcon = statusConfig[scheme.status]?.icon || Shield
          const statusClass = statusConfig[scheme.status]?.className || ''

          return (
            <GlassCard key={scheme.id} className="scheme-card" delay={i * 0.07}>
              <div className="scheme-card__header">
                <div className="scheme-card__icon">
                  <Shield size={22} />
                </div>
                <span className={`scheme-status ${statusClass}`}>
                  <StatusIcon size={14} />
                  {scheme.status}
                </span>
              </div>

              <span className="scheme-card__category">{scheme.category}</span>
              <h3 className="scheme-card__name">{scheme.name}</h3>
              <p className="scheme-card__desc">{scheme.description}</p>
              <span className="scheme-card__benefit">{scheme.benefit}</span>

              <div className="eligibility-section">
                <div className="eligibility-header">
                  <span>Eligibility Match</span>
                  <span className="eligibility-percent">{scheme.eligibility}%</span>
                </div>
                <div className="eligibility-bar">
                  <motion.div
                    className="eligibility-bar__fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${scheme.eligibility}%` }}
                    transition={{ duration: 0.9, delay: 0.15 + i * 0.08 }}
                  />
                </div>
              </div>

              <button type="button" className="btn btn--ghost btn--full">
                Check Eligibility
              </button>
            </GlassCard>
          )
        })}
      </div>
    </div>
  )
}
