import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Brain, LayoutDashboard, Rocket } from 'lucide-react';

export function ProposalLanding() {
    return (
        <main className="pt-24 pb-32 px-4 max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center">
            {/* Header / Intro */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 max-w-4xl"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">
                    <Rocket size={14} /> AI Transformation Proposal
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 font-serif">
                    NABU x Displai <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light">
                        Foundations for Scale
                    </span>
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
                    We propose a phased approach to AI adoption. <strong>Phase 1</strong> builds the reliable data and workflow foundation you need today. <strong>Phase 2</strong> leverages that foundation to accelerate sales with instant visual AI.
                </p>
                <p className="text-sm text-slate-500 max-w-2xl mx-auto border-t border-white/10 pt-6 italic">
                    "Our phased approach prioritizes immediate operational efficiency. By organizing client intake first (Phase 1), we build the structured data foundation required for advanced 50,000-template scale automation (Phase 2), ensuring sustainable long-term value."
                </p>
            </motion.div>

            <div className="w-full max-w-7xl space-y-16">

                {/* PHASE 1 SECTION */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-white/10 flex-grow"></div>
                        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Phase 1: Foundation</h2>
                        <div className="h-px bg-white/10 flex-grow"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Solution 1: Professional Services (Workflows) */}
                        <Link to="/workflows" className="group h-full">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="h-full bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors relative overflow-hidden group-hover:border-primary/50 flex flex-col"
                            >
                                <div className="absolute top-0 right-0 p-32 bg-primary/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/30 transition-colors" />

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                                        <Brain className="text-white w-6 h-6" />
                                    </div>

                                    <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-primary-light">
                                        Solution 1
                                    </h2>
                                    <h3 className="text-3xl font-serif mb-4 text-white">
                                        Professional Services
                                    </h3>
                                    <p className="text-slate-400 mb-6 leading-relaxed">
                                        Tools your team keeps using. Turn chaotic client emails into structured briefs instantly. Real-time status tracking for every project.
                                    </p>

                                    <ul className="space-y-2 mb-8">
                                        <li className="flex items-center gap-2 text-sm text-slate-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            Client Inbox Organizer
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-slate-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            Client Profile Generator
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-slate-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            Status Tracker
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/5 flex items-center text-sm font-bold text-primary-light group-hover:gap-2 transition-all">
                                    View Solution <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </motion.div>
                        </Link>

                        {/* Solution 2: Business Intelligence (Finance) */}
                        <Link to="/finance" className="group h-full">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="h-full bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors relative overflow-hidden group-hover:border-blue-500/50 flex flex-col"
                            >
                                <div className="absolute top-0 right-0 p-32 bg-blue-500/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/30 transition-colors" />

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                                        <LayoutDashboard className="text-white w-6 h-6" />
                                    </div>

                                    <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-blue-300">
                                        Solution 2
                                    </h2>
                                    <h3 className="text-3xl font-serif mb-4 text-white">
                                        Business Intelligence
                                    </h3>
                                    <p className="text-slate-400 mb-6 leading-relaxed">
                                        Analysis + Insights + Prototype. Cross-reference churn data against reality. Find natural customer segments. Understand why top sellers win.
                                    </p>

                                    <ul className="space-y-2 mb-8">
                                        <li className="flex items-center gap-2 text-sm text-slate-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                            Churn Validation
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-slate-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                            Segmentation Analysis
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-slate-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                            Sales Insights
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/5 flex items-center text-sm font-bold text-blue-400 group-hover:gap-2 transition-all">
                                    View Solution <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </motion.div>
                        </Link>
                    </div>
                </div>

                {/* PHASE 2 SECTION */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-white/10 flex-grow"></div>
                        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Phase 2: Acceleration</h2>
                        <div className="h-px bg-white/10 flex-grow"></div>
                    </div>

                    {/* Napkins to Signage (Visualizer) */}
                    <Link to="/visualizer" className="group block">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-colors relative overflow-hidden group-hover:border-secondary/50"
                        >
                            <div className="absolute top-0 right-0 p-64 bg-secondary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-secondary/30 transition-colors" />

                            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-secondary-dark flex items-center justify-center mb-6 shadow-lg shadow-secondary/20 group-hover:scale-110 transition-transform duration-300">
                                        <Sparkles className="text-white w-6 h-6" />
                                    </div>

                                    <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-secondary-light">
                                        Future State
                                    </h2>
                                    <h3 className="text-4xl font-serif mb-4 text-white">
                                        Napkins to Signage
                                    </h3>
                                    <p className="text-slate-400 mb-8 max-w-lg leading-relaxed">
                                        Instant mockups for sales. Design acceleration. Drastically reduce pre-sales friction by allowing clients to visualize the end product instantly, before a designer even opens a file.
                                    </p>

                                    <div className="inline-flex items-center text-sm font-bold text-secondary-light group-hover:gap-2 transition-all">
                                        Try the Demo <ArrowRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>

                                {/* Visual representation of Napkin -> Signage */}
                                <div className="relative h-64 bg-black/40 rounded-xl overflow-hidden border border-white/10 group-hover:border-secondary/30 transition-colors flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl mb-2">🎨</div>
                                        <div className="text-sm text-slate-500 font-mono">Instant Visualization Engine</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                </div>

            </div>
        </main>
    );
}
