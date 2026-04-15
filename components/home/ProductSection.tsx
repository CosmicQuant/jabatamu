import React, { forwardRef } from 'react';
import { ProductCard } from '../ProductCard';
import { PRODUCTS } from '../../constants';
import { Product } from '../../types';

interface ProductSectionProps {
    onAdd: (product: Product) => void;
}

export const ProductSection = forwardRef<HTMLDivElement, ProductSectionProps>(({ onAdd }, ref) => {
    const handleAddBundle = () => {
        PRODUCTS.forEach(p => onAdd(p));
    };

    return (
        <section id="shop" ref={ref} className="py-24 bg-white dark:bg-[#050505] transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
                    <div className="max-w-xl">
                        <h2 className="text-5xl font-black text-stone-900 dark:text-white mb-6 uppercase tracking-tighter leading-none">THE SIGNATURES</h2>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full mb-8"></div>
                        <p className="text-stone-600 dark:text-stone-500 text-lg font-medium leading-relaxed">
                            Cold-pressed in limited daily quantities to ensure maximum alkaloid retention and flavor clarity.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-stone-500 dark:text-stone-600 border border-black/5 dark:border-white/5 px-6 py-3 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        Certified Organic Sourcing
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
                    {PRODUCTS.map(product => (
                        <ProductCard key={product.id} product={product} onAdd={onAdd} />
                    ))}
                </div>

                {/* Bundle Banner */}
                <div className="mt-12 max-w-7xl mx-auto bg-gradient-to-r from-yellow-400 via-yellow-300 to-green-400 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-yellow-400/20">
                    <div className="text-center md:text-left space-y-1">
                        <p className="text-black font-black text-2xl uppercase tracking-tighter">🎁 Get Both Flavours</p>
                        <p className="text-black/70 font-semibold text-sm">Passion Burst + Pineapple Gold — the complete set</p>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="text-center">
                            <p className="text-black/50 font-bold text-xs line-through uppercase tracking-wider">KSh 1,800</p>
                            <p className="text-black font-black text-3xl tracking-tighter">KSh 1,600</p>
                            <p className="text-black/70 text-[10px] font-black uppercase tracking-[0.2em]">Save KSh 200</p>
                        </div>
                        <button
                            onClick={handleAddBundle}
                            className="bg-black text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-stone-800 transition-all active:scale-95 shadow-lg whitespace-nowrap"
                        >
                            Add Bundle to Cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default ProductSection;