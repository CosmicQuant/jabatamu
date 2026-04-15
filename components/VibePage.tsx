
import React from 'react';

interface VibePageProps {
  onShopNow: () => void;
}

export const VibePage: React.FC<VibePageProps> = ({ onShopNow }) => {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <img 
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=2574" 
            alt="Party Vibe" 
            className="w-full h-full object-cover opacity-60 dark:opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50/20 via-stone-50/40 to-stone-50 dark:from-[#0a0a0a]/20 dark:via-[#0a0a0a]/40 dark:to-[#0a0a0a]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 to-transparent -z-10"></div>
        <div className="container mx-auto px-6 text-center space-y-12">
          <h1 className="text-[15vw] font-black text-stone-900 dark:text-white tracking-[0.1em] uppercase leading-none opacity-5 dark:opacity-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none">
            THE GLOW THE GLOW
          </h1>
          <div className="space-y-8 relative z-10 flex flex-col items-center">
            <h2 className="text-6xl md:text-9xl font-black text-stone-900 dark:text-white uppercase tracking-tighter leading-[0.8]">
              ALIVE IN <br /><span className="text-orange-600 dark:text-orange-500">THE MOMENT.</span>
            </h2>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-xl mx-auto font-medium">
              JabaTamu isn't just a drink; it's the social catalyst for the next generation of African creators.
            </p>
            
            <div className="pt-8">
              <button 
                onClick={onShopNow}
                className="group relative bg-stone-900 dark:bg-white text-white dark:text-black px-14 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-orange-600 dark:hover:bg-orange-500 transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(249,115,22,0.3)]"
              >
                <span className="relative z-10">Shop the Vibe</span>
                <div className="absolute inset-0 bg-orange-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mosaic */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
          <div className="bg-stone-900 rounded-3xl overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600" 
              alt="Creative Session"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute bottom-6 left-6 text-white font-black uppercase text-xs tracking-widest">Late Night Sprints</div>
          </div>
          <div className="col-span-2 row-span-2 bg-stone-900 rounded-3xl overflow-hidden relative group">
             <img 
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800" 
              alt="Community Event"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            />
             <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
             <div className="absolute bottom-10 left-10 text-white font-black uppercase text-xl tracking-widest italic">The Social Spark</div>
          </div>
          <div className="bg-stone-900 rounded-3xl overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600" 
              alt="Coastal Chill"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute bottom-6 left-6 text-white font-black uppercase text-xs tracking-widest">Coastal Chill</div>
          </div>
          <div className="bg-stone-900 rounded-3xl overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600" 
              alt="Fitness"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute bottom-6 left-6 text-white font-black uppercase text-xs tracking-widest">Clean Energy</div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="container mx-auto px-6 py-32 text-center max-w-4xl">
        <blockquote className="text-3xl md:text-5xl font-black text-stone-900 dark:text-white leading-tight italic">
          "We believe in energy that feels as good as it tastes. We believe in the hustle, the chill, and the connections in between."
        </blockquote>
      </section>
    </div>
  );
};
