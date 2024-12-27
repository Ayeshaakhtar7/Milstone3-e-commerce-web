'use client';

import { useRouter } from 'next/navigation';
import HeroBanner from '../components/Hero/page';
import Features from '../components/featured/page';
import BestSellers from '../components/bestSeller/page';
import NewsLetter from '@/components/Newsletters';
import Testimonials from '@/app/testimonials/page';
import { Button } from '@/components/ui/button';
import Image from "next/image";
export default function Home() {

  const products = [
    {
      id: 4,
      name: 'Product 4',
      price: '$59.99',
      image: '/photos/1.png',
    },
    {
      id: 5,
      name: 'Product 5',
      price: '$69.99',
      image: '/photos/2.jpg',
    },
    {
      id: 6,
      name: 'Product 6',
      price: '$79.99',
      image: '/photos/3.jpg',
    },
  ];

  
  const router = useRouter();

  const handleBuyNow = () => {
    router.push('/cart'); 
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
  <HeroBanner/>
  <Features/>
     <main className="flex-grow p-8">
        <section className="bg-slate-300 p-8 rounded-lg shadow-lg my-8">
              <h2 className="text-[48px] font-bold uppercase text-center">New Landed</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white border border-gray-200 p-4 rounded-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400} 
                      height={300} 
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-2xl font-semibold text-gray-800">{product.name}</h3>
                    <p className="mt-2 text-xl font-semibold text-teal-600">{product.price}</p>
                    <Button
  onClick={() => handleBuyNow()}
  variant="outline"
  className="text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white transition-colors"
>
  Buy Now
</Button>
                  </div>
                ))}
              </div>
            </section>

        <BestSellers/>
        <NewsLetter/>
        <Testimonials/>
      </main>

    </div>
  );
}
