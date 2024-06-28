import React, { useState } from 'react';
import {Link} from "react-router-dom";

export function SideNav() {
    const [isCategoriesOpen, setCategoriesOpen] = useState(false);

    return (
        <div className="w-64 bg-sky-950  text-white flex flex-col h-screen">
            <nav className="flex-grow">
                <ul className="py-4">
                    <li className="px-6 py-2 text-left  hover:bg-sky-700">
                        <Link to="/" className="block">Home</Link>
                    </li>
                    <li className="px-6 py-2 hover:bg-sky-700">
                        <button
                            onClick={() => setCategoriesOpen(!isCategoriesOpen)}
                            className="block w-full text-left focus:outline-none"
                        >
                            Categories
                        </button>
                        {isCategoriesOpen && (
                            <ul className="pl-4 mt-2 space-y-1">
                                <li className="px-6 py-2 hover:bg-sky-700">
                                    <Link to="/category/phones" className="block">Mobile Phones</Link>
                                </li>
                                <li className="px-6 py-2 hover:bg-sky-700">
                                    <Link to="/category/accessories" className="block">Accessories</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="px-6 py-2 text-left  hover:bg-sky-700">
                        <Link to="/compare" className="block">Compare</Link>
                    </li>
                </ul>
            </nav>
            <div className="px-6 py-4">
                <button className="w-full bg-sky-700 text-white py-2 rounded hover:bg-gray-200 hover:text-sky-900">
                    Login
                </button>
            </div>
        </div>
    );
}
