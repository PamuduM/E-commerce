import React from 'react';

interface ProductCardProps {
    image: string;
    name: string;
    brand: string;
    description: string;
    price: number;
    rating: number;
}

const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg
        className={`h-4 w-4 ${filled ? 'text-yellow-500' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M10 15l-5.09 2.68 1.22-5.64L1 7.24l5.74-.5L10 2l2.26 4.74 5.74.5-3.13 4.8 1.22 5.64L10 15z"
        />
    </svg>
);


export function ProductCard({ image, name, brand, description, price, rating }: ProductCardProps) {
    return (
        <div className="w-full md:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <img src={image} alt={name} className="w-full h-48 object-cover" />
                <div className="p-4 flex flex-col">
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p className="text-gray-500 mb-2">{brand}</p>
                    <p className="text-gray-700 mb-4">{description}</p>
                    <div className="flex justify-between items-center mt-auto">
                        <span className="text-lg font-semibold text-gray-900">${price}</span>
                        <div className="flex space-x-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <StarIcon key={i} filled={i < rating} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
