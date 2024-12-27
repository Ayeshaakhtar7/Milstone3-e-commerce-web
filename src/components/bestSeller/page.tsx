

import React from 'react';
import Image from 'next/image'; // Importing the Next.js Image component
import { Button } from '@/components/ui/button'; // Assuming this is the correct import for the Button component from ShadCN

const BestSellers = () => {
  // Array of product data
  const products = [
    {
      id: 4,
      name: 'Product 4',
      price: '$59.99',
      image: '/photos/4.jpeg',
    },
    {
      id: 5,
      name: 'Product 5',
      price: '$69.99',
      image: '/photos/5.jpeg',
    },
    {
      id: 6,
      name: 'Product 6',
      price: '$79.99',
      image: '/photos/6.jpeg',
    },
  ];

  // Function for handling "Buy Now" button click
  const handleBuyNow = (productId: number) => {
    alert(`You clicked Buy Now for Product ID: ${productId}`);
  };

  return (
    <section className="bg-slate-300 p-8 rounded-lg shadow-lg my-8">
      <h2 className="text-[48px] font-bold uppercase text-center">Best Sellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 p-4 rounded-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={400}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800">{product.name}</h3>
            <p className="mt-2 text-xl font-semibold text-teal-600">{product.price}</p>
            <Button
  onClick={() => handleBuyNow(product.id)}
  variant="outline"
  className="text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white transition-colors"
>
  Buy Now
</Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
