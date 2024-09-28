import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">
                    <NavLink to="/">Rajneel's App</NavLink>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-blue-400" : "hover:text-gray-400"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/insurance"
                            className={({ isActive }) =>
                                isActive ? "text-blue-400" : "hover:text-gray-400"
                            }
                        >
                            Insurance
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/static"
                            className={({ isActive }) =>
                                isActive ? "text-blue-400" : "hover:text-gray-400"
                            }
                        >
                            Static
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
