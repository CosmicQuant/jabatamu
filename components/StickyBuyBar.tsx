import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

interface StickyBuyBarProps {
    onAdd: (product: Product) => void;
    isCartOpen: boolean;
}

export const StickyBuyBar: React.FC<StickyBuyBarProps> = ({ onAdd, isCartOpen }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > window.innerHeight * 0.75);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!visible || isCartOpen) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[60] md:hidden bg-white/95 dark:bg-[#111111]/95 backdrop-blur-md border-t border-black/10 dark:border-white/10 px-4 py-3 shadow-2xl">
            <div className="flex items-center gap-3">
                <div className="flex-1 min-w-0">
                    <p className="text-[9px] font-black text-stone-400 dark:text-stone-500 uppercase tracking-widest">Quick Order</p>
                    <p className="text-sm font-black text-stone-900 dark:text-white truncate">Premium Khat Juice — KSh 900</p>
                </div>
                <div className="flex gap-2 shrink-0">
                    {PRODUCTS.map(p => (
                        <button
                            key={p.id}
                            onClick={() => onAdd(p)}
                            className={`px-4 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-wider transition-all active:scale-95 whitespace-nowrap ${
                                p.flavor === 'Passion'
                                    ? 'bg-orange-500 text-white hover:bg-orange-400'
                                    : 'bg-yellow-400 text-black hover:bg-yellow-300'
                            }`}
                        >
                            {p.flavor}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StickyBuyBar;
