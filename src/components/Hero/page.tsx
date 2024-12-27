import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin, IoHome, IoStorefront, IoCart, IoAddCircle } from "react-icons/io5";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto h-auto px-4">
      {/* Hero Top Section */}
      <div className="text-center bg-gray-100 py-4">
        <p className="text-md font-semibold">Hy Future Forge!</p>
        <p className="text-sm text-gray-600">
        Where innovation meets craftsmanship, shaping cutting-edge solutions for a brighter tomorrow.
        </p>
      </div>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row justify-between items-stretch px-8 py-6 space-y-8 lg:space-y-0 lg:space-x-8 relative">
        
        {/* Left Side: Social Icons */}
        <div className="flex lg:flex-col justify-between absolute left-0 top-0 lg:h-full py-8 space-x-4 lg:space-x-0 lg:space-y-6">

          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-2">
            <IoLogoFacebook className="text-2xl text-teal-500 hover:scale-110 transition duration-300" />

          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-2">
            <IoLogoTwitter className="text-2xl text-teal-500 hover:scale-110 transition duration-300" />

          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-2">
            <IoLogoInstagram className="text-2xl text-teal-500 hover:scale-110 transition duration-300" />

          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-2">
            <IoLogoLinkedin className="text-2xl text-teal-500 hover:scale-110 transition duration-300" />
          </Link>
        </div>

        {/* Left Side: Hero Content */}
        <div
          className="flex-grow h-[500px] bg-cover bg-center relative overflow-hidden rounded-xl shadow-xl"
          style={{ backgroundImage: "url('/photos/image1.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
          <div className="absolute bottom-6 left-6 text-white max-w-lg space-y-4">
            <p className="text-lg font-medium text-teal-400 tracking-wide uppercase">
              Discover the Future
            </p>
            <h2 className="text-5xl font-extrabold leading-tight">
            FutureForge Shopping 
            </h2>
            <p className="text-lg font-light leading-relaxed text-gray-200">
            This shop is a hub for those who seek the latest in tech gadgets, smart devices, and lifestyle-enhancing products!
            </p>
            <Button variant="default" className="bg-teal-600 hover:bg-teal-500">
              Visit Now
            </Button>
          </div>
        </div>

        {/* Right Side: Info Cards */}
        <div className="flex flex-col space-y-6 w-full lg:w-[30%]">
          {/* Card 1 */}
          <Card className="h-[240px] bg-cover bg-center relative overflow-hidden rounded-xl shadow-xl" style={{ backgroundImage: "url('/photos/img2.jpg')" }}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 hover:opacity-60 transition duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold hover:text-teal-400 transition duration-300">
              Crafting Tomorrow
              </h3>
              <p className="mt-2 text-sm hover:text-gray-300">
              Shaping innovative solutions and ideas that define the future.
              </p>
            </div>
          </Card>

          {/* Card 2 */}
          <Card className="h-[240px] bg-cover bg-center relative overflow-hidden rounded-xl shadow-xl" style={{ backgroundImage: "url('/photos/img3.jpg')" }}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 hover:opacity-60 transition duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold hover:text-teal-400 transition duration-300">
              Step Into Tomorrow with FutureForge
              </h3>
              <p className="mt-2 text-sm hover:text-gray-300">
              Discover futuristic technologies and innovations today.
              </p>
            </div>
          </Card>
        </div>

        {/* Right Side: Decorative Icons */}
        <div className="flex flex-col justify-between absolute right-0 top-0 lg:h-full py-8 space-y-6">
          <Link href="/" className="group flex flex-col items-center space-y-2">
            <IoHome className="text-2xl text-teal-500 hover:scale-110 transition duration-300" />
          </Link>

          <Link href="/shop" className="group flex flex-col items-center space-y-2">
            <IoStorefront className="text-2xl text-teal-500 hover:scale-110 transition duration-300" />
          </Link>

          <Link href="/cart" className="group flex flex-col items-center space-y-2">
            <IoCart className="text-2xl text-teal-500 hover:scale-110 transition duration-300" />
          </Link>

          <Link href="/products" className="group flex flex-col items-center space-y-2">
            <IoAddCircle className="text-2xl text-teal-500 hover:scale-110 transition duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
