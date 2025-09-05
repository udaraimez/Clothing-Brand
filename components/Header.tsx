import React, { useState } from 'react';
import { SearchIcon, MenuIcon, XIcon } from './IconComponents';
import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "New Drops", href: "#new-drops" },
        { name: "Collections", href: "#men-collection" },
        { name: "Men", href: "#men-collection" },
        { name: "Women", href: "#women-collection" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-lg border-b border-light-border dark:border-dark-border transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-dark-text dark:text-light-gray hover:text-brand-primary dark:hover:text-brand-primary transition-colors">
                            {isMenuOpen ? <XIcon /> : <MenuIcon />}
                        </button>
                    </div>

                    {/* Brand Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="text-3xl font-display font-bold tracking-display text-dark-text dark:text-white uppercase">
                            Ryzout
                        </a>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex lg:space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-sm font-medium text-medium-gray dark:text-light-gray hover:text-brand-primary transition-colors relative group">
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <button className="hidden sm:block text-medium-gray dark:text-light-gray hover:text-brand-primary dark:hover:text-brand-primary transition-colors">
                            <SearchIcon />
                        </button>
                         <a
                            href="#"
                            className="border border-brand-primary text-brand-primary font-bold py-2 px-4 rounded-sm uppercase tracking-wider text-xs hover:bg-brand-primary hover:text-white dark:hover:text-white transition-colors duration-300"
                        >
                            Bulk Inquiries
                        </a>
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-light-bg dark:bg-dark-bg border-t border-light-border dark:border-dark-border animate-fade-in-up">
                    <nav className="flex flex-col items-center space-y-4 py-6">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                className="text-lg font-medium text-medium-gray dark:text-light-gray hover:text-brand-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;