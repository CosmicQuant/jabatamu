
import React, { useState } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

const StarRating: React.FC<{ count?: number; size?: number }> = ({ count = 5, size = 12 }) => (
  <div className="flex gap-0.5">
    {[...Array(count)].map((_, i) => (
      <svg key={i} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="#EAB308" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAdd }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    onAdd(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group bg-white dark:bg-[#111111] rounded-2xl border border-black/5 dark:border-white/5 overflow-hidden transition-all duration-700 hover:border-black/20 dark:hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
      <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden">
        {/* Social Proof Badge — static, no bounce */}
        {product.flavor === 'Passion' && (
          <div className="absolute top-3 right-3 md:top-8 md:right-8 z-10">
            <span className="bg-yellow-400 text-black text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] px-2 py-1 md:px-4 md:py-2 rounded-full shadow-2xl">
              Most Popular
            </span>
          </div>
        )}
        {product.flavor === 'Pineapple' && (
          <div className="absolute top-3 right-3 md:top-8 md:right-8 z-10">
            <span className="bg-green-500 text-black text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] px-2 py-1 md:px-4 md:py-2 rounded-full shadow-2xl">
              Focus Formula
            </span>
          </div>
        )}

        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#111111] via-transparent to-transparent opacity-80"></div>

        <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 flex justify-between items-end">
          <div className="space-y-1">
            <span className={`px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-[0.2em] border backdrop-blur-md ${product.color}`}>
              {product.flavor} Formula
            </span>
          </div>
        </div>
      </div>

      <div className="p-3 md:p-5 space-y-2 md:space-y-3">
        <div>
          <div className="flex justify-between items-start gap-2">
            <h3 className="text-sm md:text-xl font-black text-stone-900 dark:text-white leading-tight tracking-tighter uppercase">{product.name}</h3>
            <div className="text-sm md:text-lg font-black text-green-600 dark:text-green-500 shrink-0">KSh {product.price.toLocaleString()}</div>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <StarRating count={5} size={10} />
            <span className="text-[9px] text-stone-500 dark:text-stone-400 font-bold hidden md:inline">(1,200+)</span>
          </div>
          <p className="text-stone-600 dark:text-stone-500 text-xs leading-relaxed font-medium hidden md:block mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>

        <button
          onClick={handleAdd}
          disabled={isAdded}
          className={`w-full py-2.5 md:py-3.5 rounded-xl flex items-center justify-center gap-2 font-black uppercase tracking-[0.15em] text-[9px] md:text-[10px] transition-all duration-300 ${isAdded
            ? 'bg-green-500 text-black scale-[0.98]'
            : 'bg-stone-900 dark:bg-white text-white dark:text-black hover:bg-yellow-500 dark:hover:bg-yellow-400 active:scale-95'
            }`}
        >
          {isAdded ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              Added!
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
              <span className="hidden md:inline">Add {product.flavor} — KSh {product.price.toLocaleString()}</span>
              <span className="md:hidden">Add to Cart</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
