import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../UI/Button';

export const Hero = () => {
    return (
        <div className="relative overflow-hidden w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary/10 blur-[100px] rounded-full -z-10" />

            <div className="text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
                >
                    <Sparkles className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-medium text-secondary">Solution 1: Instant Ideas to Template Visualizer</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-8 font-serif"
                >
                    Turn Napkins into <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                        Displai Signage
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto"
                >
                    Drag, drop, and let Nabu Displai's visual intelligence digitize your menu instantly.
                    Then, just ask AI to style it.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-center justify-center gap-4"
                >
                    <Button size="lg" className="gap-2">
                        Upload Menu Photo <ArrowRight className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="lg">
                        Watch Video
                    </Button>
                </motion.div>
            </div>
        </div>
    );
};
