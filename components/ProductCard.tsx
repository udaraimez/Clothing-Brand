
import React, { useState } from 'react';
import type { Product } from '../types';
import { SparklesIcon, XIcon, ChevronLeftIcon, ChevronRightIcon } from './IconComponents';

interface ProductCardProps {
    product: Product;
}

const SIZES = ['S', 'M', 'L', 'XL'];

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState<string>('M');
    const [isStoryVisible, setIsStoryVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleStoryToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (product.story) {
            setIsStoryVisible(!isStoryVisible);
        }
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex(prev => (prev + 1) % product.imageUrls.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex(prev => (prev - 1 + product.imageUrls.length) % product.imageUrls.length);
    };
    
    const goToImage = (index: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex(index);
    };

    return (
        <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg group transition-all duration-300 flex flex-col hover:border-brand-primary hover:shadow-2xl hover:shadow-brand-primary/10">
            <div className="relative overflow-hidden rounded-t-lg aspect-square">
                {/* Story View - Appears on top */}
                {product.story && (
                    <div
                        className={`absolute inset-0 z-30 bg-light-card dark:bg-white text-dark-text dark:text-black p-6 transition-opacity duration-500 flex flex-col items-center justify-center text-center ${
                            isStoryVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                    >
                        <button
                            onClick={handleStoryToggle}
                            className="absolute top-3 right-3 text-gray-500 hover:text-black transition-colors"
                            aria-label="Close story"
                        >
                            <XIcon />
                        </button>
                        <p className="text-sm md:text-base leading-relaxed font-serif">{product.story}</p>
                    </div>
                )}

                {/* Image Slider */}
                <div className="absolute inset-0 z-10">
                    <div className="w-full h-full flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                        {product.imageUrls.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                alt={`${product.name} view ${index + 1}`}
                                className="w-full h-full object-cover flex-shrink-0"
                            />
                        ))}
                    </div>
                </div>

                {/* Slider Controls */}
                 <div className={`absolute inset-0 z-20 transition-opacity duration-500 ${isStoryVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Story Button */}
                    {product.story && (
                        <button
                            onClick={handleStoryToggle}
                            className="absolute top-3 right-3 bg-dark-bg/70 backdrop-blur-sm text-xs text-white font-semibold py-1.5 px-3 rounded-full flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-primary hover:text-white"
                            aria-label={`View story for ${product.name}`}
                        >
                            <SparklesIcon />
                            <span>Story</span>
                        </button>
                    )}

                    {/* Navigation Arrows */}
                    <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-dark-bg/50 p-1.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-brand-primary">
                        <ChevronLeftIcon />
                    </button>
                    <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-dark-bg/50 p-1.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-brand-primary">
                        <ChevronRightIcon />
                    </button>

                    {/* Dot Indicators */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {product.imageUrls.map((_, index) => (
                             <button
                                key={index}
                                onClick={(e) => goToImage(index, e)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'}`}
                                aria-label={`Go to image ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <p className="text-sm text-medium-gray mb-1">{product.category}</p>
                <h3 className="text-lg font-semibold text-dark-text dark:text-white min-h-[2.5em]">{product.name}</h3>
                
                <div className="flex-grow" /> {/* This spacer pushes content below it to the bottom */}

                {/* Size Selector */}
                <div className="mt-4 mb-4">
                    <div className="flex items-center gap-2 flex-wrap">
                        {SIZES.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`w-9 h-9 rounded-md border text-xs font-bold flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-card dark:focus:ring-offset-dark-card focus:ring-brand-primary ${
                                    selectedSize === size
                                        ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20'
                                        : 'bg-transparent text-medium-gray dark:text-gray-400 border-light-border dark:border-dark-border hover:border-brand-primary hover:text-dark-text dark:hover:text-white'
                                }`}
                                aria-label={`Select size ${size}`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
                
                <div className="flex items-center justify-between">
                    <p className="text-xl font-bold text-brand-primary">${product.price.toFixed(2)}</p>
                    <button 
                        className="bg-brand-primary text-white font-bold py-2 px-5 rounded-sm text-sm uppercase tracking-wider transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-card dark:focus:ring-offset-dark-card focus:ring-brand-primary"
                        aria-label={`Buy ${product.name}`}
                    >
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;