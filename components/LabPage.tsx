
import React from 'react';

export const LabPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 space-y-32">
      {/* Hero */}
      <section className="relative container mx-auto px-6 py-32 text-center space-y-8 overflow-hidden rounded-[4rem]">
        <div className="absolute inset-0 -z-20">
          <img
            src={import.meta.env.BASE_URL + 'lab1.png'}
            alt="Laboratory Science"
            className="w-full h-full object-cover opacity-50 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50/40 via-stone-50/60 to-stone-50 dark:from-[#0a0a0a]/40 dark:via-[#0a0a0a]/60 dark:to-[#0a0a0a]"></div>
        </div>
        <div className="relative z-10">
          <div className="inline-flex px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-600 dark:text-green-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            The Science of Purity
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-stone-900 dark:text-white tracking-tighter uppercase leading-[0.9] mb-8">
            Molecular <br /><span className="text-green-600 dark:text-green-500 italic">Purity.</span>
          </h1>
          <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto font-medium">
            Inside the JabaTamu laboratory, we blend traditional botanical wisdom with cutting-edge molecular extraction to create a consistent, clean energy experience.
          </p>
        </div>
      </section>

      {/* Process Grid */}
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-[#111111] p-12 rounded-[3rem] border border-black/5 dark:border-white/5 space-y-8 group hover:border-green-500/30 transition-colors">
            <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-600 dark:text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 3h15" /><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" /><path d="M6 14h12" /></svg>
            </div>
            <h3 className="text-3xl font-black text-stone-900 dark:text-white uppercase tracking-tighter">Cold-Press Extraction</h3>
            <p className="text-stone-600 dark:text-stone-500 font-medium leading-relaxed">
              We never use heat. Our proprietary cold-press process ensures that the delicate alkaloids and antioxidants in the khat leaves remain bio-available and potent.
            </p>
            <div className="aspect-video rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
              >
                <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=231f79f456e7592451001e3b5e406f36829705a1&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="bg-white dark:bg-[#111111] p-12 rounded-[3rem] border border-black/5 dark:border-white/5 space-y-8 group hover:border-yellow-500/30 transition-colors">
            <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center text-yellow-600 dark:text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M2 12h20" /><path d="m4.93 4.93 14.14 14.14" /><path d="m4.93 19.07 14.14-14.14" /></svg>
            </div>
            <h3 className="text-3xl font-black text-stone-900 dark:text-white uppercase tracking-tighter">Molecular Balancing</h3>
            <p className="text-stone-600 dark:text-stone-500 font-medium leading-relaxed">
              Every batch is tested for clarity and taste. We balance the herbal notes of khat with the acidity of passion and pineapple at a molecular level.
            </p>
            <div className="aspect-video rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 overflow-hidden">
              <img
                src={import.meta.env.BASE_URL + 'molecular.png'}
                alt="Molecular Analysis"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black/5 dark:bg-white/5 py-24 border-y border-black/5 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: "0.0%", label: "Synthetic Additives" },
              { val: "12hr", label: "Cold-Steep Time" },
              { val: "100%", label: "Organic Khat" },
              { val: "4hr", label: "Peak Freshness" }
            ].map((s, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl font-black text-stone-900 dark:text-white">{s.val}</div>
                <div className="text-[10px] text-stone-500 font-bold uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
