import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Brain } from 'lucide-react';

export function ProposalLanding() {
    return (
        <main className="pt-24 pb-32 px-4 max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 max-w-4xl"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">
                    <Sparkles size={14} /> Proposal Demo
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 font-serif">
                    Nabu Proposal <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light">
                        for Displai
                    </span>
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    A demonstration of how Nabu integrates AI workflows into your organization to drive efficiency and innovation.
                    Explore our two primary solutions below.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
                {/* Solution 1 Card */}
                <Link to="/visualizer" className="group">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="h-full bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors relative overflow-hidden group-hover:border-primary/50"
                    >
                        <div className="absolute top-0 right-0 p-32 bg-primary/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/30 transition-colors" />

                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                                <Sparkles className="text-white w-6 h-6" />
                            </div>

                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                Solution 1
                                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </h2>
                            <h3 className="text-3xl font-serif mb-4 text-white group-hover:text-primary-light transition-colors">
                                Turn Napkins into Displai Signage
                            </h3>
                            <p className="text-slate-400 mb-6 flex-grow">
                                Instant ideas to template visualizer. Drag, drop, and let Nabu Displai's visual intelligence digitize your menu instantly.
                            </p>
                        </div>
                    </motion.div>
                </Link>

                {/* Solution 2 Card */}
                <Link to="/workflows" className="group">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="h-full bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors relative overflow-hidden group-hover:border-secondary/50"
                    >
                        <div className="absolute top-0 right-0 p-32 bg-secondary/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-secondary/30 transition-colors" />

                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-secondary-dark flex items-center justify-center mb-6 shadow-lg shadow-secondary/20 group-hover:scale-110 transition-transform duration-300">
                                <Brain className="text-white w-6 h-6" />
                            </div>

                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                Solution 2
                                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                            </h2>
                            <h3 className="text-3xl font-serif mb-4 text-white group-hover:text-secondary-light transition-colors">
                                Custom AI Agent Workflows
                            </h3>
                            <p className="text-slate-400 mb-6 flex-grow">
                                Automate common use cases with intelligent partners that work 24/7. Transform manual operations into self-driving systems.
                            </p>
                        </div>
                    </motion.div>
                </Link>

                {/* Solution 3 Card */}
                <Link to="/finance" className="group md:col-span-2 lg:col-span-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="h-full bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors relative overflow-hidden group-hover:border-blue-500/50"
                    >
                        <div className="absolute top-0 right-0 p-32 bg-blue-500/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/30 transition-colors" />

                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                                <Brain className="text-white w-6 h-6" />
                            </div>

                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                Solution 3
                                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                            </h2>
                            <h3 className="text-3xl font-serif mb-4 text-white group-hover:text-blue-300 transition-colors">
                                AI Finance Intelligence
                            </h3>
                            <p className="text-slate-400 mb-6 flex-grow">
                                An always-on AI finance analyst that explains, prioritizes, and recommends actions. No dashboards, just answers.
                            </p>
                        </div>
                    </motion.div>
                </Link>
            </div>
        </main>
    );
}
