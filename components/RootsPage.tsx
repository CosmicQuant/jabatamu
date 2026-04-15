
import React from 'react';

export const RootsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 space-y-32">
      {/* Hero */}
      <section className="relative container mx-auto px-6 py-20 overflow-hidden rounded-[4rem]">
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2574"
            alt="Highlands Landscape"
            className="w-full h-full object-cover opacity-50 dark:opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-50/60 via-stone-50/40 to-transparent dark:from-[#0a0a0a]/60 dark:via-[#0a0a0a]/40"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-20 relative z-10">
          <div className="flex-1 space-y-10">
            <h1 className="text-6xl md:text-8xl font-black text-stone-900 dark:text-white uppercase tracking-tighter leading-[0.9]">
              FROM THE <br /><span className="text-yellow-600">HIGHLANDS.</span>
            </h1>
            <p className="text-xl text-stone-600 dark:text-stone-500 font-medium leading-relaxed">
              Our story begins in the rich volcanic soils of East Africa, where the world's finest khat has been cultivated for centuries. JabaTamu honors this heritage by bringing it into the modern era.
            </p>
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-yellow-600/10 flex items-center justify-center border border-yellow-600/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 21 2c-2 4-2.5 5.5-3.6 11.2A7 7 0 0 1 11 20Z" /><path d="M11 20v-5" /><path d="M7 20l4-5" /><path d="M15 20l-4-5" /></svg>
              </div>
              <div>
                <h4 className="text-stone-900 dark:text-white font-black uppercase tracking-widest">Ethically Sourced</h4>
                <p className="text-stone-600 dark:text-stone-500 text-sm">Working directly with 50+ local cooperatives.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 aspect-[4/5] bg-stone-100 dark:bg-stone-900 rounded-[4rem] border border-black/5 dark:border-white/5 overflow-hidden">
            <img
              src={import.meta.env.BASE_URL + 'miraafarm2.jpg'}
              alt="Miiraa Farm"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sustainable Values */}
      <section className="bg-white dark:bg-[#050505] py-32 border-y border-black/5 dark:border-white/5 transition-colors duration-500">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-stone-900 dark:text-white uppercase tracking-tighter italic">01. THE FARMERS</h3>
              <p className="text-stone-600 dark:text-stone-500 font-medium">
                We pay above-market rates to our farmers, ensuring that the ancient skill of khat cultivation remains a sustainable and respected livelihood.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-stone-900 dark:text-white uppercase tracking-tighter italic">02. THE EARTH</h3>
              <p className="text-stone-600 dark:text-stone-500 font-medium">
                Regenerative agricultural practices are at the heart of our sourcing. We protect the soil that gives us life.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-stone-900 dark:text-white uppercase tracking-tighter italic">03. THE FUTURE</h3>
              <p className="text-stone-600 dark:text-stone-500 font-medium">
                A percentage of every bottle sold goes back into Highland community projects—education, infrastructure, and clean water.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="container mx-auto px-6 text-center space-y-12 pb-24">
        <h2 className="text-4xl font-black text-stone-900 dark:text-white uppercase tracking-tighter italic">Taste the Tradition.</h2>
        <div className="w-full h-[500px] bg-stone-100 dark:bg-stone-900 rounded-[3rem] overflow-hidden border border-black/10 dark:border-white/10">
          <img
            src={import.meta.env.BASE_URL + 'miraaplant.jpg'}
            alt="Miiraa Plant"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-stone-600 text-[10px] font-black uppercase tracking-[0.2em]">Sourced directly from Highland plantations</p>
      </section>
    </div>
  );
};
