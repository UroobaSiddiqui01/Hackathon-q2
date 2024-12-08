import Image from 'next/image';
import React from 'react';
import { FaSearch, FaHeart, FaShoppingBag } from 'react-icons/fa'; // Import required icons

const Header: React.FC = () => {
  return (
    <>
      <header className="w-full max-auto max-w-screen-2xl items-center">
        {/* Top Section */}
        <div className="bg-gray-100 border-b border-gray-300">
          <div className="max-w-[1440px] mx-auto h-10 flex items-center justify-between px-6">
            {/* Logo */}
            <Image
              src="/logo1.png"
              alt="Logo"
              className="h-6 w-6"
              width={24}
              height={24}
            />
            {/* Links */}
            <nav className="flex items-center space-x-6 text-sm">
  <a href="#" className="hover:text-gray-500">Find a Store</a>
  <span className="border-l border-gray-300 h-4"></span> {/* Vertical Line */}
  <a href="#" className="hover:text-gray-500">Help</a>
  <span className="border-l border-gray-300 h-4"></span> {/* Vertical Line */}
  <a href="login" className="hover:text-gray-500">Join Us</a>
  <span className="border-l border-gray-300 h-4"></span> {/* Vertical Line */}
  <a href="singup" className="hover:text-gray-500">Sign In</a>
</nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-[1440px] mx-auto h-12 flex items-center justify-between px-6">
          {/* Second Logo */}
          <Image
            src="/logo2.png"
            alt="Secondary Logo"
            className="h-[78.47px] w-[78.47px]"
            width={78.47}
            height={78.47}
          />
          
          {/* Navigation Links */}
          <div className="w-full flex justify-center">
          <nav className="flex justify-center items-center space-x-6 text-sm">
            <h2 className="text-lg font-semibold">
              <a href="#" className="hover:text-gray-500">NEW & FEATURED</a>
            </h2>
            <a href="#" className="hover:text-gray-500">Men</a>
            <a href="#" className="hover:text-gray-500">Women</a>
            <a href="#" className="hover:text-gray-500">Kids</a>
            <a href="#" className="hover:text-gray-500">Sale</a>
            <a href="#" className="hover:text-gray-500">SNKRS</a>
          </nav>
          </div>
          {/* Search Bar */}
          <div className="flex items-center border border-gray-300 rounded px-2">
            <FaSearch className="text-black-500" />
            <input
              type="text"
              placeholder="Search"
              className="pl-2 outline-none"
            />
          </div>
          {/* Right Corner Icons */}
          <div className="flex items-center space-x-4">
            <button>
            <FaHeart className="fill-white stroke-black stroke-[50]" />
            </button>
            <button>
              <FaShoppingBag className="fill-white stroke-black stroke-[50]" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

