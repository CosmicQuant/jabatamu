import React from 'react';
import { Link } from 'react-router-dom';

const StarRating: React.FC<{ count?: number }> = ({ count = 5 }) => (
    <div className="flex gap-0.5">
        {[...Array(count)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#EAB308" stroke="none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ))}
    </div>
);

export const Hero: React.FC = () => {
    const navigateToShop = (e?: React.MouseEvent) => {
        if (e) e.preventDefault();
        const el = document.getElementById('shop');
        el?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative h-screen overflow-hidden flex flex-col">
            {/* Mobile video background — no negative z-index */}
            <div className="absolute inset-0 md:hidden overflow-hidden bg-black">
                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-90" src={import.meta.env.BASE_URL + 'hero-mobile.mp4'} />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Desktop Background Image */}
            <div className="absolute inset-0 hidden md:block">
                <img
                    src="https://lh3.googleusercontent.com/d/1h3C6YGGBvJtjg0dktQf1pV8Z8DxLXtBV"
                    alt=""
                    className="w-full h-full object-cover opacity-50 dark:opacity-20"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-50 via-stone-50/90 to-stone-50/20 dark:from-[#0a0a0a] dark:via-[#0a0a0a]/90 dark:to-[#0a0a0a]/20" />
            </div>

            {/* Ambient glow — desktop only */}
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none hidden md:block" />

            {/* Main content â€” split layout */}
            {/* Main content */}
            <div className="relative z-10 container mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-6 h-full pt-24 pb-10 md:pt-28 md:pb-10">

                {/* LEFT — Text */}
                <div className="flex-1 space-y-4 md:space-y-5 text-center md:text-left max-w-xl">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 md:bg-black/5 dark:bg-white/5 border border-white/20 md:border-black/10 dark:border-white/10 rounded-full text-white md:text-stone-600 dark:text-stone-300 text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                        The Original Highland Elixir
                    </div>

                    {/* Social proof */}
                    <div className="flex items-center gap-2 justify-center md:justify-start flex-wrap">
                        <StarRating />
                        <span className="text-[10px] font-black text-white/80 md:text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                            Kenya's #1 — Loved by hundreds of thousands
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white md:text-stone-900 dark:text-white leading-[0.85] tracking-tighter">
                        REFINE YOUR <br />
                        <span className="text-yellow-400 md:text-brand italic">ENERGY.</span>
                    </h1>

                    <p className="text-sm md:text-lg text-white/80 md:text-stone-600 dark:text-stone-400 font-medium leading-relaxed max-w-xs mx-auto md:max-w-none md:mx-0">
                        Clean, focused, and purely botanical. JabaTamu is the premium cold-pressed khat juice for those who demand more from their day.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-center md:justify-start">
                        <button
                            onClick={navigateToShop}
                            className="bg-yellow-400 text-black px-8 py-4 md:px-12 md:py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-yellow-300 transition-all active:scale-95 shadow-lg"
                        >
                            Shop the Batch
                        </button>
                        <Link
                            to="/lab"
                            className="text-center bg-white/10 text-white md:text-stone-900 dark:text-white px-8 py-4 md:px-12 md:py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] border border-white/30 md:border-black/10 dark:border-white/10 hover:bg-white/20 md:hover:bg-black/5 transition-all backdrop-blur-sm"
                        >
                            Our Process
                        </Link>
                    </div>

                    {/* Urgency strip */}
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                        <span className="flex h-2 w-2 rounded-full bg-green-400 shrink-0" />
                        <span className="text-[10px] font-black text-white/70 md:text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                            In stock — Same-day delivery in Nairobi, Mombasa, Diani, Watamu &amp; Kilifi
                        </span>
                    </div>
                </div>


                {/* RIGHT — Video phone mockup (desktop only) */}
                <div className="flex-1 hidden md:flex items-center justify-center py-4">
                    <div className="relative group h-full flex items-center">
                        {/* Ambient glow */}
                        <div className="absolute -inset-8 bg-yellow-400/20 rounded-[4rem] blur-3xl group-hover:bg-yellow-400/30 transition-all duration-700" />

                        {/* Phone-shaped video frame — height-constrained to fit viewport */}
                        <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/20 shadow-[0_40px_80px_rgba(0,0,0,0.35)] rotate-[-3deg] group-hover:rotate-0 transition-transform duration-700"
                             style={{ height: 'calc(100vh - 180px)', maxHeight: '580px', aspectRatio: '9/19', maxWidth: '260px' }}>
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700"
                                src={import.meta.env.BASE_URL + 'hero-mobile.mp4'}
                            />
                            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)] rounded-[2.5rem] pointer-events-none" />
                        </div>

                        {/* Floating label */}
                        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 rounded-2xl px-5 py-2.5 shadow-xl flex items-center gap-3 whitespace-nowrap">
                            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-900 dark:text-white">Live in Kenya</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce z-10">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/60 md:text-stone-400">Scroll</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 md:text-stone-400"><path d="m6 9 6 6 6-6" /></svg>
            </div>
        </section>
    );
};

export default Hero;
