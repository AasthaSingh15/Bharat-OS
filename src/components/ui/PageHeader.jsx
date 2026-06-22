import { motion } from 'framer-motion'

export default function PageHeader({ title, subtitle, badge }) {
  return (
    <motion.header
      className="page-header"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div>
        {badge && <span className="page-header__badge">{badge}</span>}
        <h1 className="page-header__title">{title}</h1>
        {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
      </div>
    </motion.header>
  )
}
