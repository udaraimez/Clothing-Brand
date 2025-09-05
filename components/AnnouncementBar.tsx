
import React, { useState, useEffect } from 'react';

const announcements = [
    { text: "LIMITED DROP: 20% OFF ALL NEW ARRIVALS 🔥", cta: "Shop Now", link: "#" },
    { text: "FREE SHIPPING ON ORDERS OVER $75+", cta: "Learn More", link: "#" },
    { text: "FOLLOW US ON INSTAGRAM FOR A 10% COUPON", cta: "Follow Us", link: "#" },
];

const AnnouncementBar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (announcements.length > 1) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
            }, 5000); // Cycle every 5 seconds

            return () => clearInterval(interval);
        }
    }, []);


    if (!isVisible) {
        return null;
    }

    const currentAnnouncement = announcements[currentIndex];

    return (
        <div className="bg-brand-primary text-white text-sm font-medium" role="banner">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-center h-10">
                     <div key={currentIndex} className="animate-fade-in-out text-center">
                         <p className="px-10">
                           {currentAnnouncement.text}
                           <a href={currentAnnouncement.link} className="ml-2 font-bold underline hover:text-gray-200 transition-colors">
                               {currentAnnouncement.cta}
                           </a>
                         </p>
                       </div>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-black/20 transition-colors z-10"
                        aria-label="Dismiss announcement"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementBar;