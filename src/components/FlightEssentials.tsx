import React from 'react';

const FlightEssentials: React.FC = () => {
  return (
    <div className="bg-white p-8">
      <h1 className="text-3xl font-bold text-left mb-4">THE ESSENTIALS</h1>
      <p className="text-center mb-8">
        Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
      </p>
      <div className="flex justify-around mb-8">
        {/* Men's Section */}
        <div className="relative mx-2">
          <img src="/Frame0.png" alt="Men's Essentials" className="mb-4" />
          <button className="absolute bottom-10 left-0 mb-4 ml-4 bg-white text-black font-bold py-3 px-6 rounded-full transition">
            Man&apos;s
          </button>
        </div>
        {/* Women's Section */}
        <div className="relative mx-2">
          <img src="/Frame2.png" alt="Women's Essentials" className="mb-4" />
          <button className="absolute bottom-10 left-0 mb-4 ml-4 bg-white text-black font-bold py-3 px-6 rounded-full transition">
            Woman&apos;s
          </button>
        </div>
        {/* Kids' Section */}
        <div className="relative mx-2">
          <img src="/Frame3.png" alt="Kids' Essentials" className="mb-4" />
          <button className="absolute bottom-10 left-0 mb-4 ml-4 bg-white text-black font-bold py-3 px-6 rounded-full transition">
            Kids&apos;
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[880px] max-h-[192px]">
          <div className="items-center">
            <h3 className="font-bold mb-2">Icons</h3>
            <ul>
              <li>Air Force 1</li>
              <li>Huarache</li>
              <li>Air Max 90</li>
              <li>Air Max 95</li>
            </ul>
          </div>
          <div className="items-center">
            <h3 className="font-bold mb-2">Shoes</h3>
            <ul>
              <li>All Shoes</li>
              <li>Custom Shoes</li>
              <li>Jordan Shoes</li>
              <li>Running Shoes</li>
            </ul>
          </div>
          <div className="items-center">
            <h3 className="font-bold mb-2">Clothing</h3>
            <ul>
              <li>All Clothing</li>
              <li>Modest Wear</li>
              <li>Hoodies & Pullovers</li>
              <li>Shirts & Tops</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Kids&apos;</h3>
            <ul>
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





