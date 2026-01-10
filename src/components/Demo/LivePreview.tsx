import React from 'react';
import { motion } from 'framer-motion';
import type { MenuTemplate } from '../../assets/templates/menu-templates';
import { clsx } from 'clsx';

interface LivePreviewProps {
    menu: MenuTemplate | null;
    isGenerating: boolean;
}

export const LivePreview: React.FC<LivePreviewProps> = ({ menu, isGenerating }) => {
    // Skeleton Loader Component
    const Skeleton = () => (
        <div className="w-full h-full p-8 space-y-8 animate-pulse">
            <div className="h-12 bg-white/10 rounded-lg w-3/4 mx-auto mb-12" />
            <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-4">
                        <div className="h-8 bg-white/10 rounded w-1/3" />
                        <div className="grid grid-cols-1 gap-4">
                            {[1, 2].map((j) => (
                                <div key={j} className="h-24 bg-white/5 rounded-xl border border-white/5" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    if (isGenerating) {
        return (
            <div className="w-full h-full bg-slate-900 rounded-3xl overflow-hidden border border-white/10">
                <Skeleton />
            </div>
        );
    }

    if (!menu) return null;

    // Dynamic Styles based on menu.style
    const getStyles = () => {
        switch (menu.style) {
            case 'rustic':
                return {
                    container: 'bg-[#2a2622] text-[#e6dcc8]',
                    header: 'font-serif text-amber-500 border-b border-amber-500/20',
                    card: 'bg-[#1e1b18] border-none shadow-none',
                    accent: 'text-amber-500'
                };
            case 'minimal':
                return {
                    container: 'bg-[#f5f5f5] text-slate-800',
                    header: 'font-sans font-light text-slate-900',
                    card: 'bg-white shadow-sm border border-slate-200',
                    accent: 'text-slate-400'
                };
            default: // modern
                return {
                    container: 'bg-slate-900 text-white',
                    header: 'font-sans font-bold text-white',
                    card: 'bg-white/5 border border-white/10 backdrop-blur-md',
                    accent: 'text-indigo-400'
                };
        }
    };

    const styles = getStyles();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            key={menu.id} // Re-animate on menu change
            className={clsx("w-full h-full overflow-y-auto rounded-3xl transition-colors duration-500", styles.container)}
        >
            <div className="relative p-8 md:p-12 min-h-full">
                {/* Sticky Header */}
                <div className="sticky top-0 z-10 py-4 -mt-4 mb-8 bg-inherit/80 backdrop-blur-md">
                    <h1 className={clsx("text-4xl text-center pb-4", styles.header)}>
                        {menu.name}
                    </h1>
                </div>

                <div className="space-y-12 max-w-2xl mx-auto">
                    {menu.categories.map((category) => (
                        <div key={category.name}>
                            <h2 className={clsx("text-2xl mb-6 font-medium", styles.accent)}>{category.name}</h2>
                            <div className="grid gap-4">
                                {category.items.map((item) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className={clsx("p-4 rounded-xl flex justify-between items-start gap-4 transition-colors duration-300", styles.card)}
                                    >
                                        <div>
                                            <h3 className="text-lg font-medium">{item.name}</h3>
                                            <p className="text-sm opacity-70 mt-1">{item.description}</p>
                                        </div>
                                        <span className="font-semibold">{item.price}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
