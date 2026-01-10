import React, { useCallback, useState } from 'react';
import { Upload, FileImage } from 'lucide-react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

interface DropZoneProps {
    onFileSelect: (file: File) => void;
    disabled?: boolean;
}

export const DropZone: React.FC<DropZoneProps> = ({ onFileSelect, disabled }) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        if (!disabled) setIsDragging(true);
    }, [disabled]);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (disabled) return;

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            onFileSelect(e.dataTransfer.files[0]);
        }
    }, [disabled, onFileSelect]);

    const handleClick = () => {
        if (disabled) return;
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (file) onFileSelect(file);
        };
        input.click();
    };

    return (
        <motion.div
            onClick={handleClick}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            whileHover={!disabled ? { scale: 1.01 } : {}}
            whileTap={!disabled ? { scale: 0.99 } : {}}
            className={clsx(
                "relative w-full h-full min-h-[400px] rounded-3xl border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center cursor-pointer overflow-hidden group",
                isDragging ? "border-primary bg-primary/10 scale-[1.02]" : "border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10",
                disabled && "pointer-events-none opacity-50"
            )}
        >
            <div className="p-8 text-center space-y-4 relative z-10">
                <div className={clsx(
                    "w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto transition-transform duration-500",
                    isDragging ? "scale-110" : "group-hover:scale-110"
                )}>
                    {isDragging ? <FileImage className="w-10 h-10 text-primary" /> : <Upload className="w-10 h-10 text-slate-400" />}
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Upload Menu Photo</h3>
                    <p className="text-slate-400 max-w-xs mx-auto text-sm">
                        Drag & drop a photo of your menu, or click to browse.
                    </p>
                </div>
            </div>

            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}
            />
        </motion.div>
    );
};
