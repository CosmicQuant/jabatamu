import React from 'react';
import { Link } from 'react-router-dom';

const LOGO_URL = import.meta.env.BASE_URL + 'jabatamulogo.jpeg';
// Update to your actual WhatsApp number (Kenya format: 2547XXXXXXXX)
const WHATSAPP_NUMBER = '254115401049';

export const Footer: React.FC = () => {
    const handleWhatsApp = () => {
        const message = encodeURIComponent("Hello JabaTamu! I'd like to place an order. ðŸŒ¿");
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer');
    };

    return (
        <footer className="bg-stone-100 dark:bg-black border-t border-black/5 dark:border-white/5 transition-colors duration-500">

            {/* WhatsApp CTA Banner */}
            <div className="bg-green-600 py-10 px-6">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div className="space-y-1">
                        <p className="text-white font-black text-2xl uppercase tracking-tighter">Order via WhatsApp</p>
                        <p className="text-green-200 font-medium text-sm">Same-day delivery in Nairobi, Mombasa, Diani, Watamu &amp; Kilifi. Fresh, fast, and direct.</p>
                    </div>
                    <button
                        onClick={handleWhatsApp}
                        className="flex items-center gap-3 bg-white text-green-700 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-green-50 transition-all active:scale-95 shadow-lg whitespace-nowrap"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                        Chat on WhatsApp
                    </button>
                </div>
            </div>

            {/* Main footer content */}
            <div className="container mx-auto px-6 pt-24 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                    <div className="col-span-2 space-y-8 text-center md:text-left">
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <div className="w-14 h-14 rounded-full overflow-hidden border border-black/10 dark:border-white/10">
                                <img src={LOGO_URL} alt="JabaTamu Logo" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-3xl font-black text-stone-900 dark:text-white italic">JabaTamu</span>
                        </div>
                        <p className="text-stone-600 dark:text-stone-500 max-w-sm font-medium leading-relaxed">
                            The intersection of ancient Highland tradition and modern botanical science. Redefining energy for the 21st century.
                        </p>
                    </div>
                    <div className="space-y-6 text-center md:text-left">
                        <h4 className="text-stone-900 dark:text-white font-black uppercase tracking-[0.2em] text-xs">Explore</h4>
                        <ul className="space-y-4 text-stone-600 dark:text-stone-500 font-bold uppercase text-[10px] tracking-widest">
                            <li><Link to="/lab" className="hover:text-stone-900 dark:hover:text-white transition-colors">The Lab</Link></li>
                            <li><Link to="/vibe" className="hover:text-stone-900 dark:hover:text-white transition-colors">The Vibe</Link></li>
                            <li><Link to="/roots" className="hover:text-stone-900 dark:hover:text-white transition-colors">Our Roots</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-6 text-center md:text-left">
                        <h4 className="text-stone-900 dark:text-white font-black uppercase tracking-[0.2em] text-xs">Connect</h4>
                        <ul className="space-y-4 text-stone-600 dark:text-stone-500 font-bold uppercase text-[10px] tracking-widest">
                            <li><a href="#" className="hover:text-stone-900 dark:hover:text-white transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-stone-900 dark:hover:text-white transition-colors">TikTok</a></li>
                            <li><a href="#" className="hover:text-stone-900 dark:hover:text-white transition-colors">X / Twitter</a></li>
                            <li>
                                <button onClick={handleWhatsApp} className="hover:text-green-600 dark:hover:text-green-500 transition-colors">
                                    WhatsApp
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-black/5 dark:border-white/5 text-stone-500 dark:text-stone-700 text-[9px] font-black uppercase tracking-[0.4em]">
                    <span>Â© {new Date().getFullYear()} JabaTamu â€” All Rights Reserved.</span>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-stone-900 dark:hover:text-stone-400 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-stone-900 dark:hover:text-stone-400 transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
