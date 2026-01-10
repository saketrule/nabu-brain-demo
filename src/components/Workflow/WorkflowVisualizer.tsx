import type { WorkflowNode } from './types';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mail, FileText, Database, Sheet, Upload, Mic, Brain,
    PenTool, FormInput, Search, Star, Send
} from 'lucide-react';

interface WorkflowVisualizerProps {
    nodes: WorkflowNode[];
    automationPercent: number;
    brainPercent: number;
}

const iconMap: Record<string, any> = {
    'Mail': Mail,
    'FileText': FileText,
    'Database': Database,
    'Sheet': Sheet,
    'Upload': Upload,
    'Mic': Mic,
    'Brain': Brain,
    'PenTool': PenTool,
    'FormInput': FormInput,
    'Search': Search,
    'Star': Star,
    'Send': Send,
};

export function WorkflowVisualizer({ nodes, automationPercent, brainPercent }: WorkflowVisualizerProps) {
    return (
        <div className="relative w-full p-8 border border-white/10 rounded-3xl bg-black/40 backdrop-blur-xl overflow-hidden min-h-[400px] flex flex-col items-center justify-center">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10" />

            {/* Nodes Container */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-4 w-full justify-between max-w-5xl z-10">
                <AnimatePresence mode="wait">
                    {nodes.map((node, index) => {
                        const Icon = iconMap[node.icon || ''] || Mail;
                        return (
                            <motion.div
                                key={node.id}
                                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.4,
                                    type: 'spring',
                                    stiffness: 100
                                }}
                                className="relative group flex flex-col items-center"
                            >
                                {/* Connector Line (except for last item) */}
                                {index < nodes.length - 1 && (
                                    <motion.div
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={{ width: '100%', opacity: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.4 + 0.2 }}
                                        className="hidden md:block absolute top-8 left-[60%] w-[calc(100%+1rem)] h-[2px] bg-gradient-to-r from-primary/50 to-purple-500/50 -z-10 origin-left"
                                    />
                                )}

                                {/* Mobile Connector */}
                                {index < nodes.length - 1 && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: '2rem', opacity: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.4 + 0.2 }}
                                        className="md:hidden w-[2px] h-8 bg-gradient-to-b from-primary/50 to-purple-500/50 my-2"
                                    />
                                )}

                                {/* Node Card */}
                                <div className={`
                  relative w-48 p-4 rounded-2xl border flex flex-col items-center text-center gap-3 backdrop-blur-md transition-all duration-300
                  ${node.type === 'ai'
                                        ? 'bg-purple-500/10 border-purple-500/30 shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]'
                                        : 'bg-white/5 border-white/10 hover:border-primary/30'
                                    }
                `}>
                                    <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center
                    ${node.type === 'ai' ? 'bg-purple-500 text-white' : 'bg-white/10 text-white'}
                  `}>
                                        <Icon size={24} />
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-white text-sm">{node.label}</h4>
                                        {node.description && (
                                            <p className="text-xs text-slate-400 mt-1">{node.description}</p>
                                        )}
                                    </div>

                                    {node.type === 'ai' && (
                                        <div className="absolute -top-2 -right-2">
                                            <span className="flex items-center gap-1 bg-purple-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                                                <Brain size={10} /> AI
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Stats Footer */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: nodes.length * 0.4 + 0.5 }}
                className="mt-16 grid grid-cols-2 gap-8 w-full max-w-lg"
            >
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">{automationPercent}%</div>
                    <div className="text-sm text-slate-400">Rules Automation</div>
                </div>
                <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-1">{brainPercent}%</div>
                    <div className="text-sm text-slate-400">Brain Processing</div>
                </div>
            </motion.div>
        </div>
    );
}
