"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const GearUpSection = () => {
  const products = [
    {
      id: 1,
      name: "Nike Dri-FIT ADV TechKnit Ultra",
      price: "₹ 3,895",
      image: "/men1.png",
      category: "Men's",
    },
    {
      id: 2,
      name: "Nike Dri-FIT Challenger",
      price: "₹ 2,495",
      image: "/men2.png",
      category: "Men's",
    },
    {
      id: 3,
      name: "Nike Dri-FIT ADV Run Division",
      price: "₹ 5,295",
      image: "/men1.png",
      category: "Men's",
    },
    {
      id: 4,
      name: "Nike Fast",
      price: "₹ 3,795",
      image: "/men2.png",
      category: "Men's",
    },
    {
      id: 7,
      name: "Women's Long-Sleeve Running Top",
      price: "₹ 2,995",
      image: "/gairl1.png",
      category: "Women's",
    },
    {
      id: 8,
      name: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
      price: "₹ 3,495",
      image: "/gairl2.png",
      category: "Women's",
    },
    {
      id: 9,
      name: "Women's Running Shorts",
      price: "₹ 2,395",
      image: "/gairl1.png",
      category: "Women's",
    },
    {
      id: 10,
      name: "Women's Sports Bra",
      price: "₹ 2,795",
      image: "/gairl2.png",
      category: "Women's",
    },
    
  ];

  const [currentMenIndex, setCurrentMenIndex] = useState(0);
  const [currentWomenIndex, setCurrentWomenIndex] = useState(0);

  const productsPerPage = 2;

  const handlePrev = (category: string) => {
    if (category === "Men's") {
      setCurrentMenIndex((prevIndex) =>
        prevIndex === 0
          ? products.filter((p) => p.category === "Men's").length - productsPerPage
          : prevIndex - productsPerPage
      );
    } else {
      setCurrentWomenIndex((prevIndex) =>
        prevIndex === 0
          ? products.filter((p) => p.category === "Women's").length - productsPerPage
          : prevIndex - productsPerPage
      );
    }
  };

  const handleNext = (category: string) => {
    if (category === "Men's") {
      setCurrentMenIndex((prevIndex) =>
        prevIndex + productsPerPage >= products.filter((p) => p.category === "Men's").length
          ? 0
          : prevIndex + productsPerPage
      );
    } else {
      setCurrentWomenIndex((prevIndex) =>
        prevIndex + productsPerPage >= products.filter((p) => p.category === "Women's").length
          ? 0
          : prevIndex + productsPerPage
      );
    }
  };

  const menProducts = products
    .filter((p) => p.category === "Men's")
    .slice(currentMenIndex, currentMenIndex + productsPerPage);

  const womenProducts = products
    .filter((p) => p.category === "Women's")
    .slice(currentWomenIndex, currentWomenIndex + productsPerPage);

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-black text-start mb-4 px-4">Gear Up</h1>

        <div className="flex flex-col lg:flex-row justify-between">
          {/* Men's Section */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 pr-4">
            <div className="flex items-center justify-between px-4 mb-6">
              <h2 className="text-2xl font-semibold text-black">Shop Men</h2>
              <div className="flex space-x-2">
                <button
                  className="text-black bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300 transition"
                  onClick={() => handlePrev("Men's")}
                >
                  <FaArrowLeft size={18} />
                </button>
                <button
                  className="text-black bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300 transition"
                  onClick={() => handleNext("Men's")}
                >
                  <FaArrowRight size={18} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 px-4">
              {menProducts.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full  object-cover mb-4"
                  />
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h2>
                  <p className="text-gray-500">{product.category}</p>
                  <p className="text-lg font-bold text-black mt-2">{product.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Women's Section */}
          <div className="lg:w-1/2 pl-4">
            <div className="flex items-center justify-between px-4 mb-6">
              <h2 className="text-2xl font-semibold text-black">Shop Women</h2>
              <div className="flex space-x-2">
                <button
                  className="text-black bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300 transition"
                  onClick={() => handlePrev("Women's")}
                >
                  <FaArrowLeft size={18} />
                </button>
                <button
                  className="text-black bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300 transition"
                  onClick={() => handleNext("Women's")}
                >
                  <FaArrowRight size={18} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 px-4">
              {womenProducts.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover mb-4"
                  />
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h2>
                  <p className="text-gray-500">{product.category}</p>
                  <p className="text-lg font-bold text-black mt-2">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GearUpSection;







