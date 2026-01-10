import { motion, AnimatePresence } from 'framer-motion';
import { useMenuGeneration } from '../../hooks/useMenuGeneration';
import { DropZone } from './DropZone';
import { ScanningOverlay } from './ScanningOverlay';
import { LivePreview } from './LivePreview';
import { MagicCommand } from './MagicCommand';

export const InteractiveDemo = () => {
    const { state, progress, currentMenu, sourceImage, startScanning, applyMagicCommand } = useMenuGeneration();

    const isScanning = state === 'scanning';
    const isGenerating = state === 'generating';
    const isComplete = state === 'complete';
    const showSplitView = isScanning || isGenerating || isComplete;

    return (
        <div className="w-full h-[700px] relative rounded-3xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-2xl shadow-2xl">
            <AnimatePresence mode='wait'>
                {state === 'idle' && (
                    <motion.div
                        key="dropzone"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 p-8"
                    >
                        <DropZone onFileSelect={startScanning} />
                    </motion.div>
                )}

                {showSplitView && (
                    <motion.div
                        key="split-view"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 flex"
                    >
                        {/* Left Side: Source Image / Scanning */}
                        <motion.div
                            initial={{ width: '100%' }}
                            animate={{ width: isComplete ? '30%' : '50%' }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="relative border-r border-white/10 bg-black/20 overflow-hidden"
                        >
                            {sourceImage && (
                                <img
                                    src={sourceImage}
                                    alt="Original Menu"
                                    className="w-full h-full object-cover opacity-60"
                                />
                            )}
                            {isScanning && <ScanningOverlay />}

                            {/* Progress Bar during generation steps */}
                            {(isScanning || isGenerating) && (
                                <div className="absolute bottom-0 left-0 h-1 bg-secondary transition-all duration-100" style={{ width: `${progress}%` }} />
                            )}
                        </motion.div>

                        {/* Right Side: Live Generation */}
                        <motion.div
                            initial={{ width: '0%', opacity: 0 }}
                            animate={{ width: isComplete ? '70%' : '50%', opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="relative bg-slate-900"
                        >
                            <LivePreview menu={currentMenu} isGenerating={isGenerating || isScanning} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Magic Command Bar */}
            <AnimatePresence>
                {isComplete && (
                    <MagicCommand onCommand={applyMagicCommand} />
                )}
            </AnimatePresence>
        </div>
    );
};
