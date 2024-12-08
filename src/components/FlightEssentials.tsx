import React from "react";

const FlightEssentials: React.FC = () => {
  return (
    <div className="bg-white px-4 py-8 sm:px-8">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold text-left mb-4">
        THE ESSENTIALS
      </h1>
      <p className="text-center mb-8 text-gray-700">
        Your built-to-last, all-week wears—but with style only Jordan Brand can
        deliver.
      </p>

      {/* Categories Section */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
        {/* Men's Section */}
        <div className="relative">
          <img
            src="/Frame0.png"
            alt="Men's Essentials"
            className="w-full h-auto rounded-lg"
          />
          <button className="absolute bottom-4 left-4 bg-white text-black font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition">
            Man&apos;s
          </button>
        </div>

        {/* Women's Section */}
        <div className="relative">
          <img
            src="/Frame2.png"
            alt="Women's Essentials"
            className="w-full h-auto rounded-lg"
          />
          <button className="absolute bottom-4 left-4 bg-white text-black font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition">
            Woman&apos;s
          </button>
        </div>

        {/* Kids' Section */}
        <div className="relative">
          <img
            src="/Frame3.png"
            alt="Kids' Essentials"
            className="w-full h-auto rounded-lg"
          />
          <button className="absolute bottom-4 left-4 bg-white text-black font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition">
            Kids&apos;
          </button>
        </div>
      </div>

      {/* Information Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-screen-lg">
          {/* Icons Section */}
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Icons</h3>
            <ul className="text-gray-700">
              <li>Air Force 1</li>
              <li>Huarache</li>
              <li>Air Max 90</li>
              <li>Air Max 95</li>
            </ul>
          </div>

          {/* Shoes Section */}
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Shoes</h3>
            <ul className="text-gray-700">
              <li>All Shoes</li>
              <li>Custom Shoes</li>
              <li>Jordan Shoes</li>
              <li>Running Shoes</li>
            </ul>
          </div>

          {/* Clothing Section */}
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Clothing</h3>
            <ul className="text-gray-700">
              <li>All Clothing</li>
              <li>Modest Wear</li>
              <li>Hoodies & Pullovers</li>
              <li>Shirts & Tops</li>
            </ul>
          </div>

          {/* Kids' Section */}
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Kids&apos;</h3>
            <ul className="text-gray-700">
              <li>Infant & Toddler Shoes</li>
              <li>Kids&apos; Shoes</li>
              <li>Kids&apos; Jordan Shoes</li>
              <li>Kids&apos; Basketball Shoes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightEssentials;






