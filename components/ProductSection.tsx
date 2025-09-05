
import React from 'react';
import type { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductSectionProps {
    id?: string;
    title: string;
    subtitle: string;
    products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ id, title, subtitle, products }) => {
    return (
        <section id={id} className="py-24 md:py-32 bg-light-bg dark:bg-dark-bg scroll-mt-20 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-text dark:text-white uppercase tracking-display">
                        {title}
                    </h2>
                    <p className="text-medium-gray mt-2">{subtitle}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;