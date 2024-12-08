import Image from "next/image";
import React from "react";

const FeaturedSection = () => {
  return (
    <section className="bg-white">
      {/* Container for Centering */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Heading */}
        <div className="text-start mb-6">
          <h1 className="text-2xl sm:text-4xl font-bold text-black">
            Featured
          </h1>
        </div>

        {/* Image Section */}
        <div className="relative mb-6">
          <Image
            src="/Image.png" // Replace with the actual image URL
            alt="Running outdoors"
            className="w-full h-auto object-cover rounded-md"
            width={1344}
            height={700}
          />
        </div>

        {/* Content Section */}
        <div className="text-center py-6">
          <h1 className="text-2xl sm:text-4xl font-bold text-black mb-4">
            STEP INTO WHAT FEELS GOOD
          </h1>
          <p className="text-gray-600 text-sm sm:text-lg mb-6">
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>
          <button className="bg-black text-white py-2 px-6 sm:py-3 sm:px-8 rounded-full hover:bg-gray-800 transition">
            Find Your Shoe
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;




