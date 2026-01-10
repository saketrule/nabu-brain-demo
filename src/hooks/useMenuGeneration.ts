import { useState } from 'react';
import type { MenuTemplate } from '../assets/templates/menu-templates';
import { MENU_TEMPLATES } from '../assets/templates/menu-templates';

export type GenerationState = 'idle' | 'scanning' | 'generating' | 'complete';

interface UseMenuGenerationReturn {
    state: GenerationState;
    progress: number;
    currentMenu: MenuTemplate | null;
    sourceImage: string | null;
    startScanning: (file: File) => void;
    applyMagicCommand: (command: string) => void;
    reset: () => void;
}

export const useMenuGeneration = (): UseMenuGenerationReturn => {
    const [state, setState] = useState<GenerationState>('idle');
    const [progress, setProgress] = useState(0);
    const [currentMenu, setCurrentMenu] = useState<MenuTemplate | null>(null);
    const [sourceImage, setSourceImage] = useState<string | null>(null);

    const startScanning = (file: File) => {
        if (state !== 'idle') return;

        const url = URL.createObjectURL(file);
        setSourceImage(url);
        setState('scanning');
        setProgress(0);

        // Simulate scanning process
        let scanProgress = 0;
        const scanInterval = setInterval(() => {
            scanProgress += 2;
            if (scanProgress >= 100) {
                clearInterval(scanInterval);
                setState('generating');
                startGeneration();
            } else {
                setProgress(scanProgress);
            }
        }, 50); // 2.5 seconds total scanning time
    };

    const startGeneration = () => {
        setProgress(0);
        // Simulate generation process
        let genProgress = 0;
        const genInterval = setInterval(() => {
            genProgress += 5;
            if (genProgress >= 100) {
                clearInterval(genInterval);
                setState('complete');
                setCurrentMenu(MENU_TEMPLATES.default);
            } else {
                setProgress(genProgress);
            }
        }, 50); // 1 second total generation time
    };

    const applyMagicCommand = (command: string) => {
        // Simple keyword matching for demo purposes
        const lowerCommand = command.toLowerCase();

        if (lowerCommand.includes('mexican') || lowerCommand.includes('spicy')) {
            setCurrentMenu(MENU_TEMPLATES.mexican);
        } else if (lowerCommand.includes('japanese') || lowerCommand.includes('sushi')) {
            setCurrentMenu(MENU_TEMPLATES.japanese);
        } else {
            // Create a temporary "custom" variation based on default if no match
            // In a real app, this would call an LLM.
            setCurrentMenu({
                ...MENU_TEMPLATES.default,
                name: 'Custom AI Variation',
            });
        }
    };

    const reset = () => {
        setState('idle');
        setProgress(0);
        setCurrentMenu(null);
        if (sourceImage) {
            URL.revokeObjectURL(sourceImage);
            setSourceImage(null);
        }
    };

    return {
        state,
        progress,
        currentMenu,
        sourceImage,
        startScanning,
        applyMagicCommand,
        reset
    };
};
