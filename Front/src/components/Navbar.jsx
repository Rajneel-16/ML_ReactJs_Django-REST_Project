import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">
                    <Link to="/">Rajneel's App</Link>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="hover:text-gray-400">Home</Link>
                    </li>
                    <li>
                        <Link to="/insurance" className="hover:text-gray-400">Insurance</Link>
                    </li>
                    <li>
                        <Link to="/static" className="hover:text-gray-400">Static</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
