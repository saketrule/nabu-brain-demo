import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Send, Mic } from 'lucide-react';
import { Button } from '../UI/Button';

interface MagicCommandProps {
    onCommand: (cmd: string) => void;
    disabled?: boolean;
}

export const MagicCommand: React.FC<MagicCommandProps> = ({ onCommand, disabled }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() && !disabled) {
            onCommand(input);
            setInput('');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-lg z-30 px-4"
        >
            <form onSubmit={handleSubmit} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl opacity-50 blur group-hover:opacity-100 transition-opacity duration-500 animate-gradient-xy" />

                <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-2 flex items-center gap-2 shadow-2xl">
                    <div className="p-2 text-secondary">
                        <Sparkles className="w-5 h-5" />
                    </div>

                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        disabled={disabled}
                        placeholder='Ask AI to change styles (e.g., "Make it rustic Mexican")'
                        className="flex-1 bg-transparent border-none outline-none text-white placeholder-slate-500 text-sm h-10"
                    />

                    <div className="flex items-center gap-1">
                        <button
                            type="button"
                            className="p-2 hover:bg-white/10 rounded-lg text-slate-400 transition-colors"
                            title="Voice Input (Demo)"
                        >
                            <Mic className="w-4 h-4" />
                        </button>
                        <Button
                            type="submit"
                            size="sm"
                            className="h-9 px-3"
                            disabled={!input.trim() || disabled}
                        >
                            <Send className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </form>
        </motion.div>
    );
};
