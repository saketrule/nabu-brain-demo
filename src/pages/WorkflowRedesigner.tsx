import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SCENARIOS } from '../components/Workflow/scenarioData';
import { ScenarioSelector } from '../components/Workflow/ScenarioSelector';
import { WorkflowVisualizer } from '../components/Workflow/WorkflowVisualizer';
import { Sparkles, RefreshCcw, ArrowRight, Brain } from 'lucide-react';

export function WorkflowRedesigner() {
    const [selectedScenarioId, setSelectedScenarioId] = useState<string | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const selectedScenario = SCENARIOS.find(s => s.id === selectedScenarioId);

    const handleSelect = (id: string) => {
        setSelectedScenarioId(id);
        setShowResult(false);
        setIsGenerating(false);
    };

    const handleRedesign = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            setShowResult(true);
        }, 1500);
    };

    const handleReset = () => {
        setSelectedScenarioId(null);
        setShowResult(false);
        setIsGenerating(false);
    };

    return (
        <main className="pt-24 pb-32 px-4 max-w-7xl mx-auto min-h-screen flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
                    <Sparkles size={14} /> Solution 1
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-white via-white to-slate-400 bg-clip-text text-transparent">
                    Custom AI Agent Workflows
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    We introduce custom AI workflows to streamline internal processes, so Displai can maximize the volume of clients it serves - From lead generation to output quality verification. Below is an example of specific use cases and how they can be automated.
                </p>
            </motion.div>

            {/* Scenario Selector */}
            <ScenarioSelector
                scenarios={SCENARIOS}
                selectedId={selectedScenarioId}
                onSelect={handleSelect}
            />

            {/* Action Area */}
            <AnimatePresence mode="wait">
                {selectedScenario && !showResult && !isGenerating && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="w-full max-w-2xl"
                    >
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                The Messy Reality
                            </h3>
                            <p className="text-xl text-slate-300 italic mb-8 border-l-4 border-red-500/30 pl-4 py-2 bg-red-500/5 rounded-r-lg">
                                "{selectedScenario.messyProcess}"
                            </p>

                            <button
                                onClick={handleRedesign}
                                className="w-full bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-lg shadow-primary/20"
                            >
                                <Sparkles size={20} />
                                Generate NABU Workflow
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </motion.div>
                )}

                {isGenerating && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex flex-col items-center justify-center p-12"
                    >
                        <div className="relative w-24 h-24 mb-8">
                            <div className="absolute inset-0 border-4 border-white/10 rounded-full" />
                            <div className="absolute inset-0 border-4 border-t-primary border-r-primary rounded-full animate-spin" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Brain className="text-white animate-pulse" size={32} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent animate-pulse">
                            Analyzing Process...
                        </h3>
                        <p className="text-slate-400 mt-2">Identifying automation opportunities</p>
                    </motion.div>
                )}

                {showResult && selectedScenario && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                                NABU Solution
                            </h2>
                            <button
                                onClick={handleReset}
                                className="text-sm text-slate-400 hover:text-white flex items-center gap-2 transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
                            >
                                <RefreshCcw size={14} /> Start Over
                            </button>
                        </div>

                        <WorkflowVisualizer
                            nodes={selectedScenario.redesign.nodes}
                            automationPercent={selectedScenario.redesign.automationPercent}
                            brainPercent={selectedScenario.redesign.brainPercent}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
