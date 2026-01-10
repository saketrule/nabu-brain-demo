import { motion } from 'framer-motion';
import { Button } from '../UI/Button';

export const StickyCTA = () => {
    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm"
        >
            <div className="mx-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-between gap-4">
                <div>
                    <p className="text-sm font-medium text-white">Ready to build?</p>
                    <p className="text-xs text-slate-400">Get early access to NABU Brain.</p>
                </div>
                <Button size="sm" variant="secondary">
                    Book Demo
                </Button>
            </div>
        </motion.div>
    );
};
