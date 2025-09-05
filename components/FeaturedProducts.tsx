
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

const FeaturedProducts: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-dark-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-wider">
                        New Drops
                    </h2>
                    <p className="text-gray-400 mt-2">Fresh designs, straight from the void.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {PRODUCTS.map((product, index) => (
                        <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
