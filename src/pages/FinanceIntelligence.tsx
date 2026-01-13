import { motion } from 'framer-motion';
import {
    TrendingDown,
    AlertTriangle,
    Database,
    Bot,
    Zap,
    Sparkles,
    Search,
    ArrowRight,
    LineChart,
    Users,
    PieChart,
    BarChart3
} from 'lucide-react';
import { useState } from 'react';

export function FinanceIntelligence() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState<null | { text: string; next: string }>(null);

    const handleAsk = (q: string) => {
        setQuestion(q);
        // Simulate AI thinking and responding
        setAnswer(null);
        setTimeout(() => {
            if (q.toLowerCase().includes('churn') || q.toLowerCase().includes('customer')) {
                setAnswer({
                    text: "Customer X's usage dropped 40% in the last 30 days. Support tickets indicate unresolved integration issues with their POS system.",
                    next: "View Customer X health score"
                });
            } else if (q.toLowerCase().includes('seller') || q.toLowerCase().includes('retention')) {
                setAnswer({
                    text: "Sarah J. has the highest retention rate (98%) in the Enterprise segment. Her accounts show 3x higher adoption of the 'Menu Scheduler' feature.",
                    next: "View Sarah's playbook"
                });
            } else {
                setAnswer({
                    text: "Tier-2 churn is primarily driven by price sensitivity. 60% of churned accounts cited 'Cost' as the main reason in exit surveys.",
                    next: "Analyze pricing sensitivity"
                });
            }
        }, 800);
    };

    return (
        <main className="pt-24 pb-32 px-4 max-w-5xl mx-auto min-h-screen">
            {/* 1. Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-500/20">
                    <Bot size={14} /> Solution 2
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-serif">
                    Business Intelligence
                </h1>
                <p className="text-xl text-slate-400 mb-2">
                    An always-on business analyst built on Displai’s Google Cloud data.
                </p>
                <div className="flex items-center justify-center gap-4 text-xs text-slate-500 font-mono">
                    <span className="flex items-center gap-1"><Database size={12} /> Powered by BigQuery</span>
                    <span>•</span>
                    <span>Natural Language Queries</span>
                    <span>•</span>
                    <span>Automated Insights + Custom Dashboards</span>
                </div>
            </motion.div>

            {/* 2. Hero: Today's Financial Health */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 mb-12 backdrop-blur-sm relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-32 bg-blue-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

                <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Today's Health Check</h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="text-6xl font-bold font-serif mb-2 text-white">$ 1.21 M</div>
                        <div className="text-lg text-slate-400 mb-4">Monthly Revenue (MTD)</div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-sm font-medium border border-red-500/20">
                            <AlertTriangle size={16} /> 23 accounts at risk
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-yellow-500 text-sm font-medium">
                            <TrendingDown size={16} /> Trending below forecast
                        </div>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 relative">
                        <div className="absolute -top-3 -right-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg flex items-center gap-1">
                            <Sparkles size={12} /> AI Insight
                        </div>
                        <p className="text-slate-300 leading-relaxed">
                            "Revenue is trending below forecast, driven by <span className="text-red-400 font-bold">23 accounts at risk of churn</span> (high usage drop). Enterprise segment retention is stable, but Tier-2 accounts are showing warning signs."
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 3. What Changed & Why */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    What changed in the last 14 days
                    <span className="text-sm font-normal text-slate-500 bg-white/5 py-1 px-3 rounded-full">AI Analysis</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Card 1: Churn Risk */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-900 border border-white/10 p-6 rounded-2xl hover:border-red-500/30 transition-colors group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="text-slate-400 text-sm font-medium">Churn Risk</div>
                            <div className="text-red-400 bg-red-500/10 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                                <Users size={12} /> 5 Critical
                            </div>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed mb-4">
                            <span className="text-white">5 accounts showed usage drop &gt; 15%</span> this week. All are on the legacy 'Basic' plan and have not enabled the new menu editor.
                        </p>
                        <a href="#" className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            View account list <ArrowRight size={10} />
                        </a>
                    </motion.div>

                    {/* Card 2: Segmentation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-slate-900 border border-white/10 p-6 rounded-2xl hover:border-yellow-500/30 transition-colors group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="text-slate-400 text-sm font-medium">Segment Performance</div>
                            <div className="text-yellow-400 bg-yellow-500/10 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                                <PieChart size={12} /> Tier-2 Drop
                            </div>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            <span className="text-white">Tier-2 fast casual renewal rate dropped 8%</span>, while Enterprise remains strong. This segment is price-sensitive to the Q4 markup.
                        </p>
                    </motion.div>

                    {/* Card 3: Pipeline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-slate-900 border border-white/10 p-6 rounded-2xl hover:border-orange-500/30 transition-colors group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="text-slate-400 text-sm font-medium">Pipeline Health</div>
                            <div className="text-orange-400 bg-orange-500/10 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                                <BarChart3 size={12} /> Coverage Gap
                            </div>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            <span className="text-white">Top sellers have 2x pipeline coverage</span>, but 3 sellers are below 50% quota coverage, putting the Q1 target at risk.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* 4. Recommendation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-2xl p-8 mb-16 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full" />

                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Zap className="text-yellow-400 fill-yellow-400" /> What the AI recommends
                </h2>

                <div className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Primary Recommendation</h3>
                    <p className="text-lg text-slate-200">
                        "Contact <span className="text-green-400 font-bold">these 5 at-risk accounts</span> immediately. They represent $420k in annual recurring revenue and their usage patterns suggest high churn probability."
                    </p>
                </div>

                <div className="flex flex-wrap gap-6 text-sm">
                    <div>
                        <div className="text-slate-500 mb-1">Confidence</div>
                        <div className="font-bold text-green-400">Very High</div>
                    </div>
                    <div>
                        <div className="text-slate-500 mb-1">Data used</div>
                        <div className="text-slate-300">Usage Logs, Support Tickets, Contract End Date</div>
                    </div>
                    <div>
                        <div className="text-slate-500 mb-1">Time to impact</div>
                        <div className="text-slate-300 text-white font-bold">Immediate</div>
                    </div>
                </div>
            </motion.div>

            {/* 5. Natural Language Q&A */}
            <div className="max-w-3xl mx-auto mb-20">
                <h2 className="text-2xl font-bold mb-8 text-center">Ask Anything</h2>

                <div className="bg-slate-900 border border-white/10 rounded-2xl p-2 mb-8 shadow-2xl">
                    <div className="flex items-center gap-3 px-4 py-3">
                        <Search className="text-slate-500" />
                        <input
                            type="text"
                            placeholder="Ask about churn, pipeline, retention, or segments..."
                            className="bg-transparent border-none outline-none flex-grow text-white placeholder:text-slate-600 h-8"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleAsk(question)}
                        />
                        <button
                            onClick={() => handleAsk(question)}
                            className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg transition-colors"
                        >
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

                {/* Preset Questions */}
                {!answer && (
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "Why did Customer X churn?",
                            "Which seller has best retention?",
                            "Show churn by segment"
                        ].map((q) => (
                            <button
                                key={q}
                                onClick={() => handleAsk(q)}
                                className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-slate-400 text-sm transition-colors"
                            >
                                {q}
                            </button>
                        ))}
                    </div>
                )}

                {/* AI Answer */}
                {answer && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-slate-800/50 border border-white/10 rounded-xl p-6"
                    >
                        <div className="flex gap-4 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                <Bot className="text-blue-400" size={18} />
                            </div>
                            <div>
                                <p className="text-white leading-relaxed mb-4">{answer.text}</p>
                                <div className="inline-flex items-center gap-2 text-xs text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-md">
                                    <LineChart size={12} /> Chart generated based on query
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-white/5 pt-4 mt-4 ml-12">
                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">What to watch next</div>
                            <div className="text-slate-300 text-sm hover:text-blue-400 cursor-pointer flex items-center gap-1">
                                {answer.next} <ArrowRight size={12} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* 6. How it works */}
            <div className="grid md:grid-cols-3 gap-8 border-t border-white/10 pt-16 mb-20 text-center">
                <div>
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-white">1</div>
                    <h3 className="font-bold mb-2">Connects to BigQuery</h3>
                    <p className="text-sm text-slate-400">Uses Displai’s existing finance and operational data.</p>
                </div>
                <div>
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-white">2</div>
                    <h3 className="font-bold mb-2">Understands Metrics</h3>
                    <p className="text-sm text-slate-400">Revenue, churn, pipeline, and segmentation rules are explicitly defined.</p>
                </div>
                <div>
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-white">3</div>
                    <h3 className="font-bold mb-2">Delivers Automatic Insights</h3>
                    <p className="text-sm text-slate-400">Natural language queries. Proactive alerts. Instant charts.</p>
                </div>
                <div className="col-span-full mt-4 text-xs text-slate-500">
                    Works alongside Looker and existing BI tools — no replacement required.
                </div>
            </div>

            {/* 7. Bottom CTA */}
            <div className="bg-slate-900 border border-white/10 rounded-3xl p-12 text-center max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Why better than simple dashboards</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8 text-sm text-slate-300">
                    <div className="bg-black/20 p-4 rounded-xl">Knows what dashboards you need to see</div>
                    <div className="bg-black/20 p-4 rounded-xl">Explains the "Why" behind the data</div>
                    <div className="bg-black/20 p-4 rounded-xl">Create complex reports via simple chat</div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-medium transition-colors">
                    Simulate with Displai data
                </button>
            </div>
        </main>
    );
}
