import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaSkype, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#202382] text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Menu Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">List</h3>
            <ul className="space-y-2">
              <li>New Landed</li>
              <li>Best sellers</li>
              <li>Recently viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>Accessories</li>
              <li>Furniture</li>
              <li>Electronics</li>
              <li>Monitor</li>
              <li>Ergonomic Chair</li>
            </ul>
          </div>

          {/* Our Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Company</h3>
            <ul className="space-y-2">
              <li>About us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Returns policy</li>
            </ul>
          </div>

          {/* Join Our Mailing List */}
          <div>
            <h3 className="text-lg font-semibold mb-4">join with us</h3>
            <div className="flex items-center bg-white/20 rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="abcfutureforge@email.com"
                className="w-full px-4 py-2 bg-transparent text-white placeholder-white outline-none"
              />
              <button className="px-3 py-2 bg-[#fdfdff] text-[#4E4D93]">Sign up</button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-[#4E4D93]"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-sm">
            © 2024 Future Forge
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-6 h-6" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6" />
            </Link>
            <Link href="https://www.skype.com" target="_blank" rel="noopener noreferrer">
              <FaSkype className="w-6 h-6" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-6 h-6" />
            </Link>
            <Link href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
              <FaPinterest className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
