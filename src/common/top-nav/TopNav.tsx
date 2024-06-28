import { useState } from 'react';
import {Link} from "react-router-dom";

export function TopNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
            {/* Brand Name or Logo */}
            <h1 className="text-xl font-bold">DTS Mobile</h1>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-4">
                <a href="#" className="hover:text-gray-400 transition-colors">Home</a>
                <a href="#about" className="hover:text-gray-400 transition-colors">About</a>
                <a href="#shop" className="hover:text-gray-400 transition-colors">Shop</a>
                <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
            </nav>

            {/* Hamburger Menu for Mobile */}
            <button
                className="md:hidden focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
            >
                <svg
                    className="fill-current h-6 w-6"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6 10a1 1 0 011-1h8a1 1 0 110 2H7a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {/* Mobile Navigation Links */}
            {isMenuOpen && (
                <nav className="md:hidden absolute top-16 left-0 w-full bg-gray-800 space-y-4 py-4">
                    <Link to="/home#home" className="hover:text-gray-400 transition-colors">Home</Link>
                    <Link to="/home#about" className="hover:text-gray-400 transition-colors">About</Link>
                    <Link to="/home#shop" className="hover:text-gray-400 transition-colors">Shop</Link>
                    <Link to="/home#contact" className="hover:text-gray-400 transition-colors">Contact</Link>
                </nav>
            )}
        </div>
    );
}
