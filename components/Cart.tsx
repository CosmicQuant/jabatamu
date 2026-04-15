
import React from 'react';
import { CartItem, Product } from '../types';
import { PRODUCTS } from '../constants';

// Update this to your actual WhatsApp number (Kenya format: 2547XXXXXXXX)
const WHATSAPP_NUMBER = '254115401049';

interface CartProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onAdd: (product: Product) => void;
}

export const Cart: React.FC<CartProps> = ({ items, isOpen, onClose, onUpdateQuantity, onRemove, onAdd }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleWhatsAppCheckout = () => {
    const orderLines = items.map(item =>
      `â€¢ ${item.name} x${item.quantity} â€” KSh ${(item.price * item.quantity).toLocaleString()}`
    ).join('\n');
    const message = encodeURIComponent(
      `Hello JabaTamu! ðŸ‘‹\n\nI'd like to place an order:\n\n${orderLines}\n\n*Total: KSh ${total.toLocaleString()}*\n\nPlease confirm my order and delivery details. Thank you!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  // Items NOT currently in cart â€” for the upsell
  const upsellProducts = PRODUCTS.filter(p => !items.find(i => i.id === p.id));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-lg transition-opacity duration-500"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md bg-stone-50 dark:bg-[#0a0a0a] h-full shadow-2xl flex flex-col border-l border-black/5 dark:border-white/5 animate-in slide-in-from-right duration-500">
        <div className="p-10 border-b border-black/5 dark:border-white/5 flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-3xl font-black text-stone-900 dark:text-white tracking-tight uppercase">Your Batch</h2>
            <p className="text-[10px] text-stone-500 dark:text-stone-600 font-bold uppercase tracking-widest">{items.length} Elixir{items.length !== 1 ? 's' : ''} Selected</p>
          </div>
          <button onClick={onClose} className="p-3 text-stone-500 hover:text-stone-900 dark:hover:text-white transition-all bg-black/5 dark:bg-white/5 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-10 space-y-10">
          {items.length === 0 ? (
            <div className="text-center py-24 space-y-8">
              <div className="w-24 h-24 bg-black/5 dark:bg-white/5 rounded-[2.5rem] flex items-center justify-center mx-auto border border-black/10 dark:border-white/10 opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-400 dark:text-stone-700"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
              </div>
              <p className="text-stone-500 text-lg font-medium">Your basket is currently empty.</p>
              <button
                onClick={onClose}
                className="text-yellow-600 dark:text-yellow-500 font-black uppercase tracking-[0.2em] text-xs hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                Go find your energy
              </button>
            </div>
          ) : (
            <>
              {items.map(item => (
                <div key={item.id} className="flex gap-8 group">
                  <div className="w-28 h-36 bg-white dark:bg-[#111111] rounded-[2rem] overflow-hidden flex-shrink-0 border border-black/5 dark:border-white/5">
                    <img src={item.image} alt={item.name} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-2">
                    <div className="space-y-1">
                      <h3 className="text-xl font-black text-stone-900 dark:text-white leading-none uppercase tracking-tighter">{item.name}</h3>
                      <p className="text-[9px] text-stone-500 dark:text-stone-600 font-black uppercase tracking-widest">{item.flavor} Formula</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-5 bg-black/5 dark:bg-white/5 rounded-2xl px-4 py-2 border border-black/10 dark:border-white/10">
                        <button onClick={() => onUpdateQuantity(item.id, -1)} className="text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors p-1" disabled={item.quantity <= 1}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                        </button>
                        <span className="text-sm font-black text-stone-900 dark:text-white w-4 text-center">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, 1)} className="text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                        </button>
                      </div>
                      <span className="font-black text-stone-900 dark:text-white text-lg">KSh {(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                  <button onClick={() => onRemove(item.id)} className="text-stone-400 dark:text-stone-800 hover:text-red-500 self-start transition-colors pt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                  </button>
                </div>
              ))}

              {/* Complete the Pair upsell */}
              {upsellProducts.length > 0 && (
                <div className="bg-gradient-to-r from-yellow-400/10 to-green-400/10 border border-yellow-400/20 rounded-2xl p-5 space-y-3">
                  <p className="text-[10px] font-black text-stone-900 dark:text-white uppercase tracking-[0.2em]">ðŸŽ Complete the Pair â€” Save KSh 200</p>
                  {upsellProducts.map(p => (
                    <div key={p.id} className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shrink-0">
                          <img src={p.image} alt={p.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-xs font-black text-stone-900 dark:text-white uppercase">{p.flavor} Burst</p>
                          <p className="text-[10px] text-stone-500 font-bold">KSh {p.price.toLocaleString()}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => onAdd(p)}
                        className="bg-stone-900 dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-xl hover:bg-yellow-500 dark:hover:bg-yellow-400 transition-all active:scale-95 whitespace-nowrap"
                      >
                        + Add
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-10 border-t border-black/5 dark:border-white/5 bg-stone-100/60 dark:bg-black/60 space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-stone-500 dark:text-stone-600 font-black uppercase tracking-[0.2em] text-[10px]">Subtotal</span>
                <span className="text-stone-900 dark:text-white font-black">KSh {total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-500 dark:text-stone-600 font-black uppercase tracking-[0.2em] text-[10px]">Delivery</span>
                <span className="text-green-600 dark:text-green-500 font-black text-[10px] uppercase">Free Express</span>
              </div>
              <div className="pt-4 border-t border-black/5 dark:border-white/5 flex justify-between items-center">
                <span className="text-stone-900 dark:text-white font-black uppercase tracking-[0.2em] text-xs">Total</span>
                <span className="text-3xl font-black text-stone-900 dark:text-white tracking-tighter">KSh {total.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handleWhatsAppCheckout}
              className="group relative w-full bg-green-600 hover:bg-green-500 text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-all active:scale-[0.98] shadow-2xl shadow-green-600/20 flex items-center justify-center gap-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Order via WhatsApp
            </button>

            <div className="flex items-center justify-center gap-3 text-stone-400 dark:text-stone-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              <span className="text-[9px] font-black uppercase tracking-[0.2em]">Fast delivery within Nairobi</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
