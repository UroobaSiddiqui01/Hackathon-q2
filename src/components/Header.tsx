"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoBagOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaSearch, FaHeart, FaBars } from 'react-icons/fa'; // Import required icons

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="w-full max-w-screen-2xl mx-auto items-center">
        {/* Top Section */}
        <div className="bg-gray-100 border-b border-gray-300">
          <div className="max-w-[1440px] mx-auto h-10 flex items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Image
              src="/logo1.png"
              alt="Logo"
              className="h-6 w-6"
              width={24}
              height={24}
            />
            {/* Links */}
            <nav className="flex items-center space-x-4 sm:space-x-6 text-sm">
              <a href="Frenchicelist" className="hover:text-gray-500">Find a Store</a>
              <span className="border-l border-gray-300 h-4"></span> {/* Vertical Line */}
              <a href="contact" className="hover:text-gray-500">Help</a>
              <span className="border-l border-gray-300 h-4"></span> {/* Vertical Line */}
              <a href="joinus" className="hover:text-gray-500">Join Us</a>
              <span className="border-l border-gray-300 h-4"></span> {/* Vertical Line */}
              <a href="signin" className="hover:text-gray-500">Sign In</a>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-white shadow-md">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
            {/* Second Logo */}
            <Image
              src="/logo2.png"
              alt="Secondary Logo"
              className="h-12 w-12 sm:h-[78.47px] sm:w-[78.47px]"
              width={78.47}
              height={78.47}
            />

            {/* Hamburger Menu Icon for Mobile */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="p-2 rounded-md hover:bg-gray-200">
                <FaBars className="text-gray-600" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className={`hidden md:flex flex-grow justify-center items-center space-y-4 md:space-y-0 md:space-x-8 lg:space-x-8 text-sm flex-grow ${isOpen ? 'block' : 'hidden'} md:block`}>
              <h2 className="text-lg font-semibold">
                <a href="news" className="hover:text-gray-500">NEW & FEATURED</a>
              </h2>
              <a href="man" className="hover:text-gray-500">Men</a>
                <a href="women" className="hover:text-gray-500">Women</a>
                <a href="kids" className="hover:text-gray-500">Kids</a>
                <a href="/compo" className="hover:text-gray-500">Sale</a>
                <a href="/compo/first" className="hover:text-gray-500">SNKRS</a>
            </nav>

            {/* Search Bar and Right Corner Icons */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="flex items-center border border-gray-300 rounded px-2">
                <FaSearch className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-2 outline-none"
                />
              </div>
              {/* Right Corner Icons */}
              <div className="hidden md:flex  items-center space-x-4">
                <button className="p-2 ">
                <CiHeart size={20}/>
                </button>
                <button className="p-2">
                  <Link href="/seccompo/first"> <IoBagOutline size={15}/></Link>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-white shadow-md py-4">
              <nav className="flex flex-col items-center space-y-4">
                <h2 className="text-lg font-semibold">
                  <a href="#" className="hover:text-gray-500">NEW & FEATURED</a>
                </h2>
                <a href="man" className="hover:text-gray-500">Men</a>
                <a href="women" className="hover:text-gray-500">Women</a>
                <a href="kids" className="hover:text-gray-500">Kids</a>
                <a href="/compo" className="hover:text-gray-500">Sale</a>
                <a href="/compo/first" className="hover:text-gray-500">SNKRS</a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;





