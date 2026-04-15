import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LOGO_URL = import.meta.env.BASE_URL + 'jabatamulogo.jpeg';

interface NavbarProps {
    cartCount: number;
    onOpenCart: () => void;
    isDarkMode: boolean;
    toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, isDarkMode, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    const navigateToShop = (e?: React.MouseEvent) => {
        if (e) e.preventDefault();
        setMobileMenuOpen(false);
        if (location.pathname !== '/') {
            window.location.href = '/#shop';
        } else {
            const el = document.getElementById('shop');
            el?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { to: '/lab', label: 'The Lab', activeColor: 'text-green-600 dark:text-green-500 border-b-2 border-green-600 dark:border-green-500' },
        { to: '/roots', label: 'Our Roots', activeColor: 'text-yellow-600 dark:text-yellow-500 border-b-2 border-yellow-600 dark:border-yellow-500' },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
                <div className="container mx-auto px-6">
                    <div className={`glass rounded-[2rem] px-8 py-4 flex justify-between items-center transition-all duration-500 ${scrolled ? 'shadow-2xl border-black/10 dark:border-white/10 bg-white/90 dark:bg-[#111111]/90' : 'border-transparent bg-transparent'}`}>

                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-black/20 dark:border-white/20 transition-transform group-hover:rotate-[360deg] duration-1000">
                                <img src={LOGO_URL} alt="JabaTamu Logo" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-stone-900 dark:text-white hidden sm:block italic">JabaTamu</span>
                        </Link>

                        {/* Desktop nav links */}
                        <div className="hidden md:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-stone-500">
                            {navLinks.map(link => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={`hover:text-stone-900 dark:hover:text-white transition-colors py-2 ${location.pathname === link.to ? link.activeColor : ''}`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Right actions */}
                        <div className="flex items-center gap-3 sm:gap-4">
                            <button
                                onClick={toggleTheme}
                                className="p-3.5 text-stone-900 dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors bg-black/5 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5"
                                aria-label="Toggle Theme"
                            >
                                {isDarkMode ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                                )}
                            </button>
                            <button
                                onClick={navigateToShop}
                                className="hidden lg:block bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-stone-900 dark:text-white hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                            >
                                Shop
                            </button>
                            <button
                                onClick={onOpenCart}
                                className="relative p-3.5 text-stone-900 dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors bg-black/5 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5"
                                aria-label="Open cart"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-green-500 text-white dark:text-black text-[9px] font-black w-5 h-5 flex items-center justify-center rounded-full ring-4 ring-stone-50 dark:ring-[#0a0a0a]">
                                        {cartCount}
                                    </span>
                                )}
                            </button>

                            {/* Hamburger â€” mobile only */}
                            <button
                                onClick={() => setMobileMenuOpen(prev => !prev)}
                                className="md:hidden p-3.5 text-stone-900 dark:text-white bg-black/5 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5"
                                aria-label="Toggle menu"
                            >
                                {mobileMenuOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile menu drawer */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[65] md:hidden">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
                    <div className="absolute top-0 right-0 bottom-0 w-72 bg-white dark:bg-[#111111] shadow-2xl flex flex-col pt-28 pb-10 px-8 space-y-2 animate-in slide-in-from-right duration-300">
                        {navLinks.map(link => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`text-xl font-black uppercase tracking-tighter py-4 border-b border-black/5 dark:border-white/5 transition-colors ${location.pathname === link.to ? 'text-yellow-500' : 'text-stone-900 dark:text-white hover:text-yellow-500'}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button
                            onClick={navigateToShop}
                            className="mt-6 w-full bg-stone-900 dark:bg-white text-white dark:text-black py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-yellow-500 dark:hover:bg-yellow-400 transition-all"
                        >
                            Shop Now
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
