import Image from 'next/image';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-100">
      {/* Top Div with Heading */}
      <div className="bg-gray-100 text-black py-6 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold">Hello Nike App</h1>
        <p className="text-black mt-2">
          Download the app to access everything Nike.
        </p>
        <a
          href="#"
          className="text-black font-bold hover:underline inline-block ml-2"
        >
          Get Your Great
        </a>
      </div>

      {/* Hero Content */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col-reverse md:flex-row items-center justify-center space-y-6 md:space-y-0">
        {/* Left Section (Text) */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-lg font-semibold mb-2">First Look</h2>
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">NIKE AIR MAX PULSE</h2>
          <p className="text-sm sm:text-lg text-black mb-6 leading-relaxed">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse — designed to push your limits and help you go to the max.
          </p>
          <div className="space-y-2 sm:space-x-4 flex flex-col sm:flex-row justify-center md:justify-start">
            <a
              href="#"
              className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800"
            >
              Notify Me
            </a>
            <a
              href="#"
              className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800"
            >
              Shop Air Max
            </a>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/heroImage.png"
            alt="Nike Shoe"
            className="w-full max-w-sm md:max-w-lg lg:max-w-xl h-auto object-contain"
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

