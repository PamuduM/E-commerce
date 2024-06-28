import React from 'react';

export function Footer() {
    return (
        <footer className="bg-sky-950 text-white py-8">
            <div className="container mx-auto px-4">
                {/* Contact Details */}
                <div className="flex flex-wrap justify-between items-center mb-6">
                    <div className="w-full md:w-auto mb-4 md:mb-0">
                        <h4 className="text-lg font-semibold">Contact Us</h4>
                        <p className="mt-2">Email: contact@dtsmobile.com</p>
                        <p className="mt-1">Phone: +1 234 567 890</p>
                        <p className="mt-1">Address: 1234 Mobile St, Tech City, USA</p>
                    </div>
                    <div className="w-full md:w-auto mb-4 md:mb-0">
                        <h4 className="text-lg font-semibold">Follow Us</h4>
                        <div className="mt-2 space-x-4">
                            <a href="#" className="hover:text-gray-200">Facebook</a>
                            <a href="#" className="hover:text-gray-200">Twitter</a>
                            <a href="#" className="hover:text-gray-200">Instagram</a>
                        </div>
                    </div>
                </div>
                <hr className="border-t border-white opacity-20" />
                <div className="mt-6 flex flex-wrap justify-between items-center text-sm">
                    <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} DTS Mobile. All rights reserved.</p>
                    <p className="mb-4 md:mb-0">Made with <span className="text-red-500">♥</span> by Luci.</p>
                </div>
            </div>
        </footer>
    );
}
