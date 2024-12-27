"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {Product} from "@/lib/db";
import NewsLetter from "@/components/Newsletters";

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState<Product[]>([]); // State for storing products
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState<string | null>(null); // For error handling

  useEffect(() => {
    // Fetching data from the API
    const fetchProducts = async () => {
      try {
       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data); // Set products data
      } catch (error) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this runs once when component mounts

  const filteredProducts: Product[] =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="bg-blue-50 min-h-screen">
      <header className="bg-gradient-to-r from-blue-800 via-blue-400 to-blue-800 text-white p-12 shadow-2xl relative">
        <h1 className="text-5xl font-extrabold text-center font-mono">Shop</h1>
        <p className="text-center mt-4 font-mono text-lg">
         Explore top-quality products to meet all your tech needs.
        </p>
      </header>

      <main className="p-8">
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 mx-2 rounded-lg ${
              selectedCategory === "All"
                ? "bg-blue-700 text-white"
                : "bg-gray-200 text-blue-700"
            }`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-lg ${
              selectedCategory === "Electronics"
                ? "bg-blue-700 text-white"
                : "bg-gray-200 text-blue-700"
            }`}
            onClick={() => setSelectedCategory("Electronics")}
          >
            Electronics
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-lg ${
              selectedCategory === "Accessories"
                ? "bg-blue-700 text-white"
                : "bg-gray-200 text-blue-700"
            }`}
            onClick={() => setSelectedCategory("Accessories")}
          >
            Accessories
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-lg ${
              selectedCategory === "Furniture"
                ? "bg-blue-700 text-white"
                : "bg-gray-200 text-blue-700"
            }`}
            onClick={() => setSelectedCategory("Furniture")}
          >
            Furniture
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 p-4 rounded-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={product.src}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-800">
                {product.name}
              </h3>
              <p className="text-orange-600 mt-2">${product.price.toFixed(2)}</p>
              <p className="mt-4 text-gray-700">{product.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ShopPage;
