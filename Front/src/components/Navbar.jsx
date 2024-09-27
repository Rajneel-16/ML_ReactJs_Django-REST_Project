// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you're using react-router for navigation

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">
                    <Link to="/">MyApp</Link>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="hover:text-gray-400">Home</Link>
                    </li>
                    <li>
                        <Link to="/insurance" className="hover:text-gray-400">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
