
import React from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProductSection from './components/ProductSection';
import NewDropsSection from './components/NewDropsSection';
import BackToTopButton from './components/BackToTopButton';
import ContactButton from './components/ContactButton';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
    const newDrops = PRODUCTS.filter(p => p.isNewDrop).slice(0, 4);
    const menProducts = PRODUCTS.filter(p => p.gender === 'Men' || p.gender === 'Unisex').slice(0, 4);
    const womenProducts = PRODUCTS.filter(p => p.gender === 'Women' || p.gender === 'Unisex').slice(0, 4);

    return (
        <div className="bg-light-bg dark:bg-dark-bg text-dark-text dark:text-light-gray font-sans transition-colors duration-300">
            <AnnouncementBar />
            <Header />
            <main>
                <Hero />
                <NewDropsSection id="new-drops" products={newDrops} />
                <ProductSection 
                    id="men-collection"
                    title="Men's Collection" 
                    subtitle="Curated styles for the modern man." 
                    products={menProducts} 
                />
                <ProductSection 
                    id="women-collection"
                    title="Women's Collection" 
                    subtitle="Bold looks for the empowered woman." 
                    products={womenProducts} 
                />
            </main>
            <Footer />
            <BackToTopButton />
            <ContactButton />
        </div>
    );
};

export default App;