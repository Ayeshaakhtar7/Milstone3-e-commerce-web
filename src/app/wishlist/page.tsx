"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import NewsLetter from "@/components/Newsletters";

async function fetchProductDetails(ids: number[]) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
    if (!response.ok) throw new Error("Failed to fetch products");
    const allProducts = await response.json();
    return allProducts.filter((product: Product) => ids.includes(product.id));
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const favoriteIds = JSON.parse(localStorage.getItem("favorites") || "[]");
      const favoriteProducts = await fetchProductDetails(favoriteIds);
      setFavorites(favoriteProducts);
    };
    fetchFavorites();
  }, []);

  const handleAddToCart = (product: Product) => {
    // Retrieve cart from localStorage or initialize it if not present
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    // Add product to the cart
    cart.push(product);
    // Save cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to your cart!`);
  };

  return (
    <main className="container mx-auto px-6 py-12 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-900 mb-10 text-center font-sans">
        Your Favorites
      </h1>
      <div className="space-y-8">
        {favorites.length > 0 ? (
          favorites.map((product) => (
            <Card key={product.id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex flex-col sm:flex-row items-center">
                {/* Product Image */}
                <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                  <Image
                    src={product.src}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="rounded-lg object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 sm:pl-6 space-y-4">
                  <h2 className="text-xl font-semibold text-blue-800">{product.name}</h2>
                  <p className="text-gray-700">{product.description}</p>
                  <p className="text-orange-600 font-bold text-lg">${product.price.toFixed(2)}</p>
                </div>
              </div>

              {/* Card Footer with Add to Cart Button and View Details */}
              <div className="flex justify-between items-center space-x-4 mt-4">
                <Button onClick={() => handleAddToCart(product)} variant="outline" color="teal" size="lg">
                  Add to Cart
                </Button>
                <Link
                  href={`/products/${product.id}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  View Details
                </Link>
              </div>
            </Card>
          ))
        ) : (
          <p className="text-gray-600 text-lg text-center">
            You have no favorite products yet.
          </p>
        )}
      </div>
    </main>
  );
}
