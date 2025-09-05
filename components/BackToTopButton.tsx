
import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from './IconComponents';

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 bg-brand-primary text-white p-3 rounded-full shadow-lg hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-bg dark:focus:ring-offset-dark-bg focus:ring-brand-primary transition-all duration-300"
                    aria-label="Go to top"
                    style={{ opacity: isVisible ? 1 : 0 }}
                >
                    <ArrowUpIcon />
                </button>
            )}
        </>
    );
};

export default BackToTopButton;