import { Hero } from '../components/Layout/Hero';
import { InteractiveDemo } from '../components/Demo/InteractiveDemo';

export function Home() {
    return (
        <main className="pt-16">
            <Hero />

            {/* Placeholder for the main interactivity demo */}
            <div className="max-w-7xl mx-auto px-4 pb-32">
                <InteractiveDemo />
            </div>
        </main>
    );
}
