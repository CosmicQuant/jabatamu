import React from 'react';

const testimonials = [
    {
        name: 'Wanjiku M.',
        location: 'Westlands, Nairobi',
        text: 'This replaced my morning coffee entirely. The focus is real and the passion flavor is absolutely incredible.',
        stars: 5,
    },
    {
        name: 'Brian O.',
        location: 'Kilimani, Nairobi',
        text: 'I was skeptical at first but after the first bottle I ordered a whole week\'s supply. Genuinely life-changing energy.',
        stars: 5,
    },
    {
        name: 'Amina H.',
        location: 'Lavington, Nairobi',
        text: 'Cleanest energy drink I\'ve ever had. No crash, no jitters. Pure focus for hours. The pineapple flavour is elite.',
        stars: 5,
    },
];

const Star: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#EAB308" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

export const TestimonialStrip: React.FC = () => {
    return (
        <section className="py-24 bg-stone-100 dark:bg-[#0d0d0d] border-y border-black/5 dark:border-white/5 transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <div className="flex justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} />)}
                    </div>
                    <h2 className="text-3xl font-black text-stone-900 dark:text-white uppercase tracking-tighter">
                        What Nairobi Is Saying
                    </h2>
                    <p className="text-stone-500 dark:text-stone-600 text-sm font-medium">
                        Over 2,400 happy customers and counting.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="bg-white dark:bg-[#111111] rounded-[2rem] p-8 border border-black/5 dark:border-white/5 space-y-5 hover:border-yellow-400/30 transition-colors duration-300"
                        >
                            <div className="flex gap-0.5">
                                {[...Array(t.stars)].map((_, i) => <Star key={i} />)}
                            </div>
                            <p className="text-stone-700 dark:text-stone-300 font-medium leading-relaxed text-sm italic">
                                "{t.text}"
                            </p>
                            <div>
                                <p className="text-stone-900 dark:text-white font-black text-sm uppercase tracking-wide">{t.name}</p>
                                <p className="text-stone-400 dark:text-stone-600 text-[10px] font-bold uppercase tracking-widest">{t.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialStrip;
