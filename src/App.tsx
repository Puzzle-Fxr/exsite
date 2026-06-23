import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import WebsiteSolutions from './pages/WebsiteSolutions'
import AppCreation from './pages/AppCreation'
import ITIntegration from './pages/ITIntegration'
import AIAgentCreation from './pages/AIAgentCreation'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/website-solutions" element={<WebsiteSolutions />} />
          <Route path="/app-creation" element={<AppCreation />} />
          <Route path="/it-integration" element={<ITIntegration />} />
          <Route path="/ai-agent-creation" element={<AIAgentCreation />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
