import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://picsum.photos/seed/ryzouthero/1920/1080"
                    alt="Hero background"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative z-10 p-4 animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-display leading-tight mb-4">
                    Wear the Uprising
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-light-gray">
                    Unleash your identity with designs that defy the ordinary. Limited drops, infinite style.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                     <a
                        href="#men-collection"
                        className="inline-block w-full sm:w-auto bg-brand-primary text-white font-bold py-3 px-8 rounded-sm uppercase tracking-wider text-sm hover:bg-brand-secondary transition-colors duration-300 ease-in-out"
                    >
                        Explore The Collection
                    </a>
                    <a
                        href="#new-drops"
                        className="inline-block w-full sm:w-auto border border-brand-secondary text-white font-bold py-3 px-8 rounded-sm uppercase tracking-wider text-sm hover:bg-brand-secondary hover:text-white transition-colors duration-300 ease-in-out"
                    >
                        New Drops
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;