import React from 'react';
import { ProductCard } from '../../common/product-card/ProductCard';
import {CustomerFeedback} from "../../common/customer-feedback/CustomerFeedback";

//example fb post data]

const exampleFacebookPosts = [
    {
        id: "1",
        source: "https://example.com/image1.jpg",
        message: "Check out our latest product! 📱 #NewArrival"
    },
    {
        id: "2",
        source: "https://example.com/image2.jpg",
        message: "We're excited to announce our upcoming event! Save the date! 🎉 #Event"
    },
    {
        id: "3",
        source: "https://example.com/image3.jpg",
        message: "Happy customers, happy us! Thank you for your support! 😊 #HappyCustomers"
    }
];

export default exampleFacebookPosts;



// Example product data
const featuredProducts = [
    {
        image: 'https://via.placeholder.com/150',
        name: 'iPhone X',
        brand: 'Apple',
        description: 'A second-hand iPhone X in excellent condition.',
        price: 499.99,
        rating: 4
    },
    {
        image: 'https://via.placeholder.com/150',
        name: 'iPhone 8',
        brand: 'Apple',
        description: 'A refurbished iPhone 8 with warranty.',
        price: 299.99,
        rating: 3
    },
    {
        image: 'https://via.placeholder.com/150',
        name: 'iPhone 7',
        brand: 'Apple',
        description: 'Pre-owned iPhone 7, thoroughly tested.',
        price: 199.99,
        rating: 4.5
    }
];




 export function Home(){

    return (
        <div className="bg-sky-950 min-h-screen text-white">

            <section className="card py-16 px-8" id="#home">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold mb-4">DTS Mobile</h1>
                    <p className="text-2xl mb-6">
                        We got your desired iPhone
                    </p>
                    <p className="text-lg leading-relaxed">
                        At DTS Mobile, we specialize in second-hand and refurbished iPhones and accessories.
                        Discover top-quality, affordable iPhones with warranties and reliable customer service.
                        Your satisfaction is our priority, providing a seamless experience for all your mobile needs.
                    </p>
                </div>
            </section>

            {/* Featured Devices Section */}
            <section className="py-16 px-8" id="#shop">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8">Featured Devices</h2>
                    <div className="flex flex-wrap -mx-4">
                        {featuredProducts.map(product => (
                            <ProductCard
                                key={product.name}
                                image={product.image}
                                name={product.name}
                                brand={product.brand}
                                description={product.description}
                                price={product.price}
                                rating={product.rating}
                            />
                        ))}
                    </div>
                </div>
            </section>

                <CustomerFeedback facebookPosts={exampleFacebookPosts} ></CustomerFeedback>
        </div>
    );
 }

