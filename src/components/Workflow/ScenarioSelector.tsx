import type { Scenario } from './types';
import { motion } from 'framer-motion';
import { Mail, Mic, Target, ArrowRight } from 'lucide-react';

interface ScenarioSelectorProps {
    scenarios: Scenario[];
    selectedId: string | null;
    onSelect: (id: string) => void;
}

const icons = {
    'inbox-chaos': Mail,
    'content-factory': Mic,
    'lead-chaser': Target,
};

export function ScenarioSelector({ scenarios, selectedId, onSelect }: ScenarioSelectorProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {scenarios.map((scenario) => {
                const Icon = icons[scenario.id as keyof typeof icons] || Mail;
                const isSelected = selectedId === scenario.id;

                return (
                    <motion.button
                        key={scenario.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onSelect(scenario.id)}
                        className={`
              relative p-6 rounded-2xl text-left transition-all duration-300 border
              ${isSelected
                                ? 'bg-white/10 border-primary/50 ring-2 ring-primary/20 shadow-lg shadow-primary/10'
                                : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                            }
            `}
                    >
                        <div className={`
              w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors
              ${isSelected ? 'bg-primary text-white' : 'bg-white/10 text-white/70'}
            `}>
                            <Icon size={24} />
                        </div>

                        <h3 className="text-xl font-semibold mb-2">{scenario.title}</h3>
                        <p className="text-sm text-slate-400 mb-4 h-10">{scenario.description}</p>

                        <div className={`
              flex items-center text-sm font-medium transition-colors
              ${isSelected ? 'text-primary' : 'text-slate-500'}
            `}>
                            Select Scenario <ArrowRight size={16} className="ml-2" />
                        </div>

                        {isSelected && (
                            <motion.div
                                layoutId="selector-ring"
                                className="absolute inset-0 rounded-2xl border-2 border-primary"
                                transition={{ duration: 0.3 }}
                            />
                        )}
                    </motion.button>
                );
            })}
        </div>
    );
}
