import React, { useState } from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-white shadow-md">
            <div className="container mx-auto">
                <div className="flex justify-between items-center px-10 py-5">

                    {/* Logo Section */}
                    <Link to={'/'}>
                        <div className="flex justify-start">
                            <img
                                src="https://d1yei2z3i6k35z.cloudfront.net/2278740/66d5e3c2c1e28_logo1.webp"
                                width="200"
                                loading="lazy"
                                className="object-contain"
                                alt="Logo"
                            />
                        </div>
                    </Link>

                    {/* Text Section */}
                    <div className="hidden lg:block text-center flex-1">
                        <p className="text-gray-700 text-base lg:text-lg">
                            <span>Before You Go to Sleep Tonight, </span>
                            <span className="font-bold text-black">Try It for Yourself...</span>
                        </p>
                    </div>

                    {/* Hamburger Icon for Mobile */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={toggleMenu} className="focus:outline-none text-2xl">
                            {isMenuOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex flex-row items-center space-x-6 text-lg">
                        <NavLink to={'/about'} className="transition-colors duration-300 hover:text-teal-600">
                            About Us
                        </NavLink>
                        <NavLink to={'/story'} className="transition-colors duration-300 hover:text-teal-600">
                            Our Story
                        </NavLink>
                        <NavLink to={'/vision'} className="transition-colors duration-300 hover:text-teal-600">
                            Our Vision
                        </NavLink>
                        <NavLink to={'/contact'} className="transition-colors duration-300 hover:text-teal-600">
                            Contact Us
                        </NavLink>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden flex flex-col items-center py-5 space-y-4 bg-gray-100">
                        <NavLink to={'/about'} className="mx-3 transition-colors duration-300" onClick={toggleMenu}>
                            About Us
                        </NavLink>
                        <NavLink to={'/story'} className="mx-3 transition-colors duration-300" onClick={toggleMenu}>
                            Our Story
                        </NavLink>
                        <NavLink to={'/vision'} className="mx-3 transition-colors duration-300" onClick={toggleMenu}>
                            Our Vision
                        </NavLink>
                        <NavLink to={'/contact'} className="mx-3 transition-colors duration-300" onClick={toggleMenu}>
                            Contact Us
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
