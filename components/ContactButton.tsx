
import React from 'react';
import { MailIcon } from './IconComponents';

const ContactButton: React.FC = () => {
    const email = 'udaraimez@gmail.com';

    return (
        <a
            href={`mailto:${email}`}
            className="fixed bottom-8 left-8 z-50 bg-brand-primary text-white p-3 rounded-full shadow-lg hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-bg dark:focus:ring-offset-dark-bg focus:ring-brand-primary transition-all duration-300"
            aria-label="Contact us via email"
        >
            <MailIcon />
        </a>
    );
};

export default ContactButton;