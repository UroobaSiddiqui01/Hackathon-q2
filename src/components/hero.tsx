import Image from 'next/image';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full">
        <div className="bg-gray-100">
  {/* Top Div with Heading */}
  <div className="bg-gray-100 text-black py-4 text-center">
    <h1 className=" text-2xl font-bold">Hello Nike App</h1>
    <p className=" text-black mt-2 inline">
      Download the app to access everything Nike.
    </p>
      <a  
        href="#" 
        className="text-black font-bold hover:underline inline ml-2"
        >
        Get Your Great
      </a>
    
  </div>
</div>



      {/* Hero Content */}
      <div className="max-w-screen-2xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
        

        {/* Right Section (Image) */}
        <div className="flex-1">
          <Image
            src="/heroImage.png"
            alt="Nike Shoe"
            className="w-full h-auto object-contain"
            width={800}
            height={800}
          />
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
        {/* Left Section (Text) */}
        <div className="flex-1 text-center md:text-center">
            <h2 className='mb-4 font-semibold'>First Look</h2>
          <h2 className="text-3xl font-bold mb-4">
            NIKE AIR MAX PULSE
          </h2>
          <p className="text-lg text-black mb-6">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br/>—designed to push you limits and help you go to the max.
          </p>
          <div className='space-x-2'>
          <a
            href="#"
            className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 "
          >
            Notify Me
          </a>
          <a
            href="#"
            className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 "
          >
            Shop Air Max
          </a>
          </div>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;
