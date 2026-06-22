import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Vault,
  Rocket,
  Landmark,
  Bot,
  Sparkles,
  Cpu,
} from 'lucide-react'

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/memory-vault', label: 'Memory Vault', icon: Vault },
  { to: '/opportunity-engine', label: 'Opportunities', icon: Rocket },
  { to: '/scheme-advisor', label: 'Scheme Advisor', icon: Landmark },
  { to: '/ai-assistant', label: 'AI Assistant', icon: Bot },
]

export default function Sidebar() {
  return (
    <motion.aside
      className="sidebar"
      initial={{ x: -32, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="sidebar__glass" aria-hidden="true" />

      <div className="sidebar__brand">
        <div className="sidebar__logo">
          <Sparkles size={20} strokeWidth={1.75} />
          <div className="sidebar__logo-ring" aria-hidden="true" />
        </div>
        <div>
          <span className="sidebar__name">BharatOS</span>
          <span className="sidebar__tagline">AI Operating System</span>
        </div>
      </div>

      <div className="sidebar__status">
        <Cpu size={13} />
        <span>Neural core active</span>
        <span className="pulse-dot pulse-dot--sm" />
      </div>

      <nav className="sidebar__nav">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
            }
          >
            <span className="sidebar__link-icon">
              <Icon size={18} strokeWidth={1.75} />
            </span>
            <span>{label}</span>
            <span className="sidebar__link-glow" aria-hidden="true" />
          </NavLink>
        ))}
      </nav>

      <div className="sidebar__footer">
        <div className="sidebar__user glass-card">
          <div className="sidebar__avatar">
            A
            <span className="sidebar__avatar-ring" aria-hidden="true" />
          </div>
          <div>
            <span className="sidebar__user-name">Aastha</span>
            <span className="sidebar__user-role">Premium · Tier 1</span>
          </div>
        </div>
      </div>
    </motion.aside>
  )
}
