
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { StickyCTA } from './components/Layout/StickyCTA';
import { Home } from './pages/Home';
import { WorkflowRedesigner } from './pages/WorkflowRedesigner';

import { ProposalLanding } from './pages/ProposalLanding';
import { FinanceIntelligence } from './pages/FinanceIntelligence';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white">
        <nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-background/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link to="/" className="font-bold text-xl tracking-tighter hover:text-primary transition-colors">Nabu Displai</Link>
            <div className="flex items-center gap-6">
              <Link to="/workflows" className="text-sm font-medium text-slate-400 hidden md:block hover:text-white transition-colors">
                Professional Services
              </Link>
              <Link to="/finance" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                Business Intelligence
              </Link>
              <Link to="/visualizer" className="text-sm font-medium text-slate-400 hidden md:block hover:text-white transition-colors">
                Napkins to Signage
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<ProposalLanding />} />
          <Route path="/visualizer" element={<Home />} />
          <Route path="/workflows" element={<WorkflowRedesigner />} />
          <Route path="/finance" element={<FinanceIntelligence />} />
        </Routes>

        <StickyCTA />
      </div>
    </BrowserRouter>
  );
}

export default App;
