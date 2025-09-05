import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon, GithubIcon } from './IconComponents';

const Footer: React.FC = () => {
    return (
        <footer className="bg-light-card dark:bg-dark-card border-t border-light-border dark:border-dark-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Info */}
                    <div className="md:col-span-1">
                        <a href="#" className="text-3xl font-display font-bold tracking-display text-dark-text dark:text-white uppercase mb-4 block">
                            Ryzout
                        </a>
                        <p className="text-medium-gray text-sm">Designs that defy the ordinary. Join the uprising.</p>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-medium-gray hover:text-dark-text dark:hover:text-white"><TwitterIcon /></a>
                            <a href="#" className="text-medium-gray hover:text-dark-text dark:hover:text-white"><InstagramIcon /></a>
                            <a href="#" className="text-medium-gray hover:text-dark-text dark:hover:text-white"><FacebookIcon /></a>
                            <a href="#" className="text-medium-gray hover:text-dark-text dark:hover:text-white"><GithubIcon /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 gap-8">
                        <div>
                            <h4 className="font-bold text-dark-text dark:text-white uppercase tracking-wider mb-4">Shop</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-medium-gray hover:text-dark-text dark:hover:text-white text-sm">New Drops</a></li>
                                <li><a href="#" className="text-medium-gray hover:text-dark-text dark:hover:text-white text-sm">Collections</a></li>
                                <li><a href="#" className="text-medium-gray hover:text-dark-text dark:hover:text-white text-sm">Men's</a></li>
                                <li><a href="#" className="text-medium-gray hover:text-dark-text dark:hover:text-white text-sm">Women's</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-dark-text dark:text-white uppercase tracking-wider mb-4">About</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-medium-gray hover:text-dark-text dark:hover:text-white text-sm">Our Story</a></li>
                                <li><a href="#" className="text-medium-gray hover:text-dark-text dark:hover:text-white text-sm">Careers</a></li>
                                <li><a href="#" className="text-medium-gray hover:text-dark-text dark:hover:text-white text-sm">Press</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-dark-text dark:text-white uppercase tracking-wider mb-4">Support</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-medium-gray hover:text-dark-text dark:hover:text-white text-sm">Contact Us</a></li>
                                <li><a href="#" className="text-medium-gray hover:text-dark-text dark:hover:text-white text-sm">FAQ</a></li>
                                <li><a href="#" className="text-medium-gray hover:text-dark-text dark:hover:text-white text-sm">Shipping & Returns</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                 <div className="mt-16 border-t border-light-border dark:border-dark-border pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Ryzout. All Rights Reserved. Not a real store.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;