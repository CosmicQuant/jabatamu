import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../constants';

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

    const passionProduct = PRODUCTS.find(p => p.flavor === 'Passion');
    const pineappleProduct = PRODUCTS.find(p => p.flavor === 'Pineapple');

    return (
        <section className="relative overflow-hidden min-h-screen flex flex-col">
            {/* Desktop Background Image */}
            <div className="absolute inset-0 -z-20 hidden md:block">
                <img
                    src="https://lh3.googleusercontent.com/d/1h3C6YGGBvJtjg0dktQf1pV8Z8DxLXtBV"
                    alt=""
                    className="w-full h-full object-cover opacity-50 dark:opacity-20"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-50 via-stone-50/90 to-stone-50/20 dark:from-[#0a0a0a] dark:via-[#0a0a0a]/90 dark:to-[#0a0a0a]/20" />
            </div>

            {/* Mobile/Narrow Background Video */}
            <div className="absolute inset-0 -z-20 block md:hidden">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-80 dark:opacity-50" src="/hero-mobile.mp4">
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-stone-50/20 via-stone-50/50 to-stone-50 dark:from-[#0a0a0a]/20 dark:via-[#0a0a0a]/50 dark:to-[#0a0a0a]" />
            </div>

            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Main content â€” split layout */}
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 min-h-screen pt-36 pb-24">

                {/* LEFT â€” Text */}
                <div className="flex-1 space-y-8 text-center md:text-left max-w-xl z-10">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 px-5 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-stone-600 dark:text-stone-300 text-[10px] font-black tracking-[0.3em] uppercase">
                        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        The Original Highland Elixir
                    </div>

                    {/* Social proof */}
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                        <StarRating />
                        <span className="text-[11px] font-black text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                            Kenya's #1 — Loved by hundreds of thousands
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-6xl md:text-8xl font-black text-stone-900 dark:text-white leading-[0.85] tracking-tighter">
                        REFINE YOUR <br />
                        <span className="text-brand italic">ENERGY.</span>
                    </h1>

                    <p className="text-lg text-stone-600 dark:text-stone-400 font-medium leading-relaxed">
                        Clean, focused, and purely botanical. JabaTamu is the premium cold-pressed khat juice for those who demand more from their day.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                        <button
                            onClick={navigateToShop}
                            className="group relative bg-stone-900 dark:bg-white text-white dark:text-black px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-yellow-500 dark:hover:bg-yellow-400 transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(251,191,36,0.2)]"
                        >
                            <span className="relative z-10">Shop the Batch</span>
                            <div className="absolute inset-0 bg-yellow-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
                        </button>
                        <Link
                            to="/lab"
                            className="bg-transparent text-stone-900 dark:text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                        >
                            Our Process
                        </Link>
                    </div>

                    {/* Urgency strip */}
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                        <span className="flex h-2 w-2 rounded-full bg-green-500 shrink-0" />
                        <span className="text-[11px] font-black text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                            In stock â€” Order by 2PM for same-day delivery in Nairobi
                        </span>
                    </div>
                </div>

                {/* RIGHT â€” Product bottles (desktop only) */}
                <div className="flex-1 hidden md:flex items-center justify-center gap-6 z-10">
                    {/* Passion bottle */}
                    <div className="relative group">
                        <div className="absolute -inset-6 bg-orange-400/20 rounded-[3rem] blur-2xl group-hover:bg-orange-400/30 transition-all duration-700" />
                        <div className="relative w-56 aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl rotate-[-5deg] group-hover:rotate-0 transition-transform duration-700">
                            <img
                                src={passionProduct?.image}
                                alt="JabaTamu Passion Burst"
                                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                <p className="text-white font-black text-xs uppercase tracking-widest">Passion Burst</p>
                                <p className="text-yellow-400 font-black text-base">KSh 900</p>
                            </div>
                        </div>
                    </div>

                    {/* Pineapple bottle â€” offset lower */}
                    <div className="relative group mt-20">
                        <div className="absolute -inset-6 bg-yellow-400/20 rounded-[3rem] blur-2xl group-hover:bg-yellow-400/30 transition-all duration-700" />
                        <div className="relative w-56 aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl rotate-[5deg] group-hover:rotate-0 transition-transform duration-700">
                            <img
                                src={pineappleProduct?.image}
                                alt="JabaTamu Pineapple Gold"
                                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                <p className="text-white font-black text-xs uppercase tracking-widest">Pineapple Gold</p>
                                <p className="text-yellow-400 font-black text-base">KSh 900</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-400">Scroll</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-stone-400"><path d="m6 9 6 6 6-6" /></svg>
            </div>
        </section>
    );
};

export default Hero;
