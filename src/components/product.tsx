"use client"
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BestOfAirMax = () => {
  const products = [
    {
      id: 1,
      name: "Nike Air Max Pulse",
      price: "₹ 13,995",
      image: "/shoes1.png", // Replace with the actual image URL
      category: "Men's Shoes",
    },
    {
      id: 2,
      name: "Nike Air Max Pulse",
      price: "₹ 13,995",
      image: "/shoes2.png", // Replace with the actual image URL
      category: "Women's Shoes",
    },
    {
      id: 3,
      name: "Nike Air Max 97 SE",
      price: "₹ 16,995",
      image: "/shoes3.png", // Replace with the actual image URL
      category: "Men's Shoes",
    },
    {
      id: 4,
      name: "Nike Air Max SYSTM",
      price: "₹ 13,995",
      image: "/shoes3.png", // Replace with the actual image URL
      category: "Women's Shoes",
    },
    {
      id: 5,
      name: "Nike Air Max Alpha",
      price: "₹ 14,995",
      image: "/shoes1.png", // Replace with the actual image URL
      category: "Men's Shoes",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= products.length ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-white py-10">
      {/* Heading Section */}
      <div className="flex justify-between items-center mb-6 px-4">
        <h1 className="text-4xl font-bold text-black">Best of Air Max</h1>
        <div className="flex items-center">
          <button className="mr-4 text-black py-2 px-6 rounded hover:bg-gray-200 transition">
            Shop
          </button>
          <div className="flex space-x-2">
            <button
              className="text-black bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300 transition"
              onClick={handlePrev}
            >
              <FaArrowLeft size={18} />
            </button>
            <button
              className="text-black bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300 transition"
              onClick={handleNext}
            >
              <FaArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products
          .slice(currentIndex, currentIndex + 3) // Display 3 products at a time
          .map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-500">{product.category}</p>
              <p className="text-lg font-bold text-black mt-2">{product.price}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default BestOfAirMax;






