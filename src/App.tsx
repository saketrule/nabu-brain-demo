
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { StickyCTA } from './components/Layout/StickyCTA';
import { Home } from './pages/Home';
import { WorkflowRedesigner } from './pages/WorkflowRedesigner';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white">
        <nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-background/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link to="/" className="font-bold text-xl tracking-tighter hover:text-primary transition-colors">NABU</Link>
            <div className="flex items-center gap-6">
              <Link to="/workflow-redesigner" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                Workflow Redesigner
              </Link>
              <div className="text-sm font-medium text-slate-400">Brain Demo v0.1</div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workflow-redesigner" element={<WorkflowRedesigner />} />
        </Routes>

        <StickyCTA />
      </div>
    </BrowserRouter>
  );
}

export default App;
