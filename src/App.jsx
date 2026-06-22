import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import Dashboard from './pages/Dashboard'
import MemoryVault from './pages/MemoryVault'
import OpportunityEngine from './pages/OpportunityEngine'
import GovernmentSchemeAdvisor from './pages/GovernmentSchemeAdvisor'
import AIAssistant from './pages/AIAssistant'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="memory-vault" element={<MemoryVault />} />
          <Route path="opportunity-engine" element={<OpportunityEngine />} />
          <Route path="scheme-advisor" element={<GovernmentSchemeAdvisor />} />
          <Route path="ai-assistant" element={<AIAssistant />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
