"use client";

import { useEffect, useState } from 'react';
import Loading from './loading';
import Image from 'next/image';
import { useCart } from '../../../../context/cart-context';
import { useRouter } from 'next/navigation';
import {Product} from "@/lib/db";

export default function ProductDetailPage({ params }: { params: { id: number } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch product");
        const data = await response.json();

        console.log('Fetched product:', data);
        setProduct(data); // Directly use data
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (!product) {
    return <Loading />;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.src
    });
    router.push('/cart');
  };

  return (
    <main className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <div className="relative">
          <Image
            src={product.src}
            alt={product.name}
            width={600}
            height={400}
            className="w-full h-64 object-cover rounded-t-lg"
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-blue-800 mb-3">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-orange-600 text-2xl font-semibold mb-6">${product.price.toFixed(2)}</p>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};
