import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-gray-900 text-white text-center py-4">
            <p>&copy; {new Date().getFullYear()} only Rajneel's. All rights reserved. its only rajneel's project</p>
            <p>
                <Link to="/privacy" className="hover:text-gray-400">Privacy Policy</Link> |
                <Link to="/terms" className="hover:text-gray-400"> Terms of Service</Link>
            </p>
        </div>
    );
};

export default Footer;
