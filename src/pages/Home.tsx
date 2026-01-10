import { Hero } from '../components/Layout/Hero';
import { InteractiveDemo } from '../components/Demo/InteractiveDemo';
import pizzaMenuImg from '../assets/pizza-menu-example.jpg';

export function Home() {
    return (
        <main className="pt-16">
            <Hero />

            {/* Transformation Visualization Section */}
            <div className="max-w-7xl mx-auto px-4 pb-32">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold mb-4">From Text to Design, Instantly</h2>
                    <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Getting to a design from initial ideas (Like Menu Text / Image) and Displai Templates to let clients see sample menu designs instantly.
                    </p>
                </div>

                <div className="grid lg:grid-cols-[1fr,auto,1fr] gap-8 items-center">
                    {/* Input: Raw Text */}
                    <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 font-mono text-xs text-slate-400 h-[600px] overflow-y-auto shadow-2xl">
                        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                            <span className="ml-2 text-slate-500">menu-draft.txt</span>
                        </div>
                        <pre className="whitespace-pre-wrap font-mono text-slate-300">
                            {`🍕 PIZZA MENU

Classic Pizzas
Margherita – Tomato sauce, fresh mozzarella, basil
Pepperoni – Tomato sauce, mozzarella, classic pepperoni
Veggie Supreme – Bell peppers, onions, mushrooms, olives, mozzarella
BBQ Chicken – BBQ sauce, grilled chicken, red onions, mozzarella
Hawaiian – Tomato sauce, mozzarella, ham, pineapple

Signature Pizzas
Truffle Mushroom – Truffle oil, wild mushrooms, mozzarella, parmesan
Spicy Diavola – Tomato sauce, mozzarella, spicy salami, chili flakes
Four Cheese (Quattro Formaggi) – Mozzarella, parmesan, gorgonzola, ricotta
Mediterranean Delight – Feta, olives, sun-dried tomatoes, spinach
Meat Lovers – Pepperoni, sausage, bacon, ham, mozzarella

White Pizzas (No Tomato Sauce)
Garlic Ricotta – Ricotta, mozzarella, roasted garlic, herbs
Chicken Alfredo – Creamy alfredo sauce, chicken, mushrooms
Spinach & Artichoke – Cream sauce, spinach, artichoke, mozzarella

Build Your Own Pizza
Base: Tomato / White / Pesto
Cheese: Mozzarella / Vegan Cheese / Burrata
Toppings:
Veg: Mushrooms, onions, peppers, olives, jalapeños, spinach
Protein: Chicken, pepperoni, sausage, bacon, ham`}
                        </pre>
                    </div>

                    {/* Arrow Animation */}
                    <div className="flex justify-center py-4 lg:py-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center animate-pulse shadow-lg shadow-primary/20">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </div>

                    {/* Output: Rendered Design */}
                    <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-2 h-[600px] shadow-2xl overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <img
                            src={pizzaMenuImg}
                            alt="Generated Menu Design"
                            className="w-full h-full object-contain rounded-xl"
                        />
                        <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10 flex items-center gap-2">
                            Generated in 0.4s
                        </div>
                    </div>
                </div>

                <InteractiveDemo />
            </div>
        </main>
    );
}
