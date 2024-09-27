// Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-800 text-white text-center py-4">
            <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
            <p>
                <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a> |
                <a href="/terms" className="hover:text-gray-400"> Terms of Service</a>
            </p>
        </div>
    );
};

export default Footer;
