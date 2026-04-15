import React from 'react';

const BASE = import.meta.env.BASE_URL;

const vibes = [
    { file: 'latenightsprint.jpg', label: 'Late Night Sprints', span: '' },
    { file: 'socialspark.jpg', label: 'The Social Spark', span: 'md:col-span-2 md:row-span-2' },
    { file: 'coastalchill.jpg', label: 'Coastal Chill', span: '' },
    { file: 'cleanenergy.jpg', label: 'Clean Energy', span: '' },
];

export const VibeSection: React.FC = () => {
    return (
        <section className="container mx-auto px-4 md:px-6 py-20 md:py-28 space-y-12">
            {/* Heading */}
            <div className="text-center space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">The JabaTamu Lifestyle</p>
                <h2 className="text-4xl md:text-6xl font-black text-stone-900 dark:text-white uppercase tracking-tighter leading-[0.9]">
                    Feel the Vibe.
                </h2>
            </div>

            {/* Mosaic grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:h-[520px]">
                {vibes.map(({ file, label, span }) => (
                    <div
                        key={file}
                        className={`bg-stone-900 rounded-2xl md:rounded-3xl overflow-hidden relative group ${span}`}
                    >
                        <img
                            src={BASE + file}
                            alt={label}
                            className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 aspect-square md:aspect-auto"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500" />
                        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white font-black uppercase text-[10px] md:text-xs tracking-widest">
                            {label}
                        </div>
                    </div>
                ))}
            </div>

            {/* Manifesto */}
            <blockquote className="text-center text-xl md:text-3xl font-black text-stone-900 dark:text-white leading-snug italic max-w-3xl mx-auto pt-4">
                "We believe in energy that feels as good as it tastes. We believe in the hustle, the chill, and the connections in between."
            </blockquote>
        </section>
    );
};

export default VibeSection;
