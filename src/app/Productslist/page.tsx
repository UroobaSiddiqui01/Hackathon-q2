import React from "react";

const ProductShowcase: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      {/* Header Section */}
      <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-6">
        <h1 className="text-2xl font-bold">New (500)</h1>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-white border border-gray-400 rounded-md text-sm font-medium hover:bg-gray-200">
            Hide Filters
          </button>
          <button className="px-4 py-2 bg-white border border-gray-400 rounded-md text-sm font-medium hover:bg-gray-200">
            Sort By
          </button>
        </div>
      </div>

      {/* Filters Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        {[
          "Shoes",
          "Sports Bras",
          "Tops & T-Shirts",
          "Hoodies & Sweatshirts",
          "Jackets",
          "Trousers & Tights",
          "Shorts",
          "Tracksuits",
          "Jumpsuits & Rompers",
          "Skirts & Dresses",
          "Socks",
          "Accessories & Equipment",
        ].map((filter, index) => (
          <button
            key={index}
            className="bg-white text-gray-700 border border-gray-300 rounded-md py-2 px-3 text-sm font-medium hover:bg-gray-200"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          {
            name: "Nike Air Force 1 Mid '07",
            price: "₹ 10,795.00",
            img: "/images/air-force-1.jpg",
          },
          {
            name: "Nike Court Vision Low Next Nature",
            price: "₹ 4,995.00",
            img: "/images/court-vision.jpg",
          },
          {
            name: "Nike Air Max 90",
            price: "₹ 8,695.00",
            img: "/images/air-max-90.jpg",
          },
        ].map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;