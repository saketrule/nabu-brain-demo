import { motion } from 'framer-motion';

export const ScanningOverlay = () => {
    return (
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-3xl">
            {/* Scanning Line */}
            <motion.div
                initial={{ top: '-10%' }}
                animate={{ top: '110%' }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent shadow-[0_0_20px_rgba(52,211,153,0.5)]"
            />

            {/* Bounding Boxes Simulation */}
            <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0.9, 1, 1.1],
                            x: Math.random() * 20 - 10,
                            y: Math.random() * 20 - 10
                        }}
                        transition={{
                            duration: 1.5,
                            delay: i * 0.4,
                            repeat: Infinity
                        }}
                        className="absolute border border-secondary/50 bg-secondary/10 rounded-lg"
                        style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                            width: `${100 + Math.random() * 100}px`,
                            height: `${40 + Math.random() * 40}px`,
                        }}
                    />
                ))}
            </div>

            {/* Overlay Backdrop */}
            <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm" />

            {/* Status Text */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 text-white font-mono text-sm">
                AI Vision Scanning...
            </div>
        </div>
    );
};
