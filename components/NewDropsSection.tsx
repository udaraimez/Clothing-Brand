
import React from 'react';
import type { Product } from '../types';
import ProductCard from './ProductCard';

interface NewDropsSectionProps {
    id?: string;
    products: Product[];
}

const NewDropsSection: React.FC<NewDropsSectionProps> = ({ id, products }) => {
    if (!products || products.length === 0) {
        return null;
    }

    const [featuredProduct, ...otherProducts] = products;

    return (
        <section id={id} className="py-24 md:py-32 bg-light-bg dark:bg-dark-bg scroll-mt-20 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-text dark:text-white uppercase tracking-display">
                        New Drops
                    </h2>
                    <p className="text-medium-gray mt-2">Fresh designs, straight from the void.</p>
                </div>

                {/* Featured Product Card */}
                <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg p-8 lg:p-12 mb-20 animate-fade-in-up">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Image */}
                        <div className="w-full">
                            <img 
                                src={featuredProduct.imageUrls[0]} 
                                alt={featuredProduct.name}
                                className="w-full h-auto aspect-square object-cover rounded-lg"
                            />
                        </div>
                        {/* Story & Details */}
                        <div style={{ animationDelay: '100ms' }}>
                            <p className="text-sm text-brand-primary uppercase tracking-wider font-semibold mb-2">{featuredProduct.category}</p>
                            <h3 className="text-4xl md:text-5xl font-display font-bold text-dark-text dark:text-white mb-4">{featuredProduct.name}</h3>
                            <p className="text-medium-gray dark:text-light-gray leading-relaxed mb-6">
                                {featuredProduct.story || "A unique design with a story to tell."}
                            </p>
                            <p className="text-3xl font-bold text-brand-primary mb-8">${featuredProduct.price.toFixed(2)}</p>
                            <a
                                href="#"
                                className="inline-block bg-brand-primary text-white font-bold py-3 px-8 rounded-sm uppercase tracking-wider text-sm hover:bg-brand-secondary transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-brand-primary/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-card dark:focus:ring-offset-dark-card focus:ring-brand-primary"
                            >
                                Buy Now
                            </a>
                        </div>
                    </div>
                </div>

                {/* Other Products */}
                {otherProducts.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherProducts.map((product, index) => (
                            <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${(index + 2) * 100}ms` }}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewDropsSection;