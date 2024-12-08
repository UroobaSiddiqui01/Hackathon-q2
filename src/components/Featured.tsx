import Image from "next/image";
import React from "react";

const FeaturedSection = () => {
  return (
    <section className="bg-white">
      <div className="relative">
       {/* Top Div with Heading */}
  <div className="bg-white text-black mb-6 px-4 text-start">
    <h1 className=" text-4xl font-bold text-black">Featured</h1>
    
    
  </div>
</div>
<div className="max-w-screen-2xl mx-auto px-6 py-2 flex flex-col md:flex-row items-center space-y-6 md:space-y-0">

        <div className="flex-1">
        {/* Image Section with Heading Overlaid */}
        <div className="relative">
          <Image
            src="/Image.png" // Replace with the actual image URL
            alt="Running outdoors"
            className="w-full h-auto object-cover"
            width={1344}
            height={700} // Ensure the image has enough height to reveal heading
          />
        </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-center py-10 px-4">
        <h1 className="text-4xl font-bold text-black mb-4">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>
        <button className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition">
          Find Your Shoe
        </button>
      </div>
    </section>
  );
};

export default FeaturedSection;



