
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
    <div className="group bg-white dark:bg-[#111111] rounded-2xl md:rounded-[3rem] border border-black/5 dark:border-white/5 overflow-hidden transition-all duration-700 hover:border-black/20 dark:hover:border-white/20 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
      <div className="relative aspect-[4/5] overflow-hidden">
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

        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
          <div className="space-y-1">
            <span className={`px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] border backdrop-blur-md ${product.color}`}>
              {product.flavor} Formula
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-12 space-y-4 md:space-y-8">
        <div className="space-y-1 md:space-y-3">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 md:gap-4">
            <h3 className="text-xl md:text-4xl font-black text-stone-900 dark:text-white leading-[0.9] tracking-tighter uppercase">{product.name}</h3>
            <div className="text-base md:text-2xl font-black text-green-600 dark:text-green-500 shrink-0">KSh {product.price.toLocaleString()}</div>
          </div>

          {/* Star rating + review count */}
          <div className="flex items-center gap-2">
            <StarRating />
            <span className="text-[10px] text-stone-500 dark:text-stone-400 font-bold uppercase tracking-widest hidden md:inline">(1,200+ reviews)</span>
          </div>

          <p className="text-stone-600 dark:text-stone-500 text-sm leading-relaxed font-medium hidden md:block">
            {product.description}
          </p>
        </div>

        <div className="flex-wrap gap-4 hidden md:flex">
          {product.benefits.map(benefit => (
            <div key={benefit} className="flex items-center gap-2">
              <div className="w-1 h-1 bg-green-500 rounded-full"></div>
              <span className="text-[10px] text-stone-500 dark:text-stone-400 font-bold uppercase tracking-widest">
                {benefit}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={handleAdd}
          disabled={isAdded}
          className={`w-full py-3 md:py-6 rounded-2xl flex items-center justify-center gap-2 md:gap-4 font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs transition-all duration-300 ${isAdded
              ? 'bg-green-500 text-black scale-[0.98]'
              : 'bg-stone-900 dark:bg-white text-white dark:text-black hover:bg-yellow-500 dark:hover:bg-yellow-400 active:scale-95'
            }`}
        >
          {isAdded ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              <span className="hidden md:inline">Added to Batch</span>
              <span className="md:hidden">Added!</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
              <span className="hidden md:inline">Add {product.flavor} Burst — KSh {product.price.toLocaleString()}</span>
              <span className="md:hidden">Add to Cart</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
