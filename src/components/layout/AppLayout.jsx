import { useLocation, Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Sidebar from './Sidebar'
import AnimatedBackground from '../effects/AnimatedBackground'
import PageTransition from '../ui/PageTransition'

export default function AppLayout() {
  const location = useLocation()

  return (
    <div className="app-layout">
      <AnimatedBackground />
      <Sidebar />
      <main className="app-layout__main">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
    </div>
  )
}
