import Image from 'next/image';
import React from 'react';

// Sample product data for demonstration. Replace this with API or prop-based data.
const product = {
  id: 1,
  name: "Nike Air Force 1 Mid '07",
  price: "₹ 10,795.00",
  description:
    "The Nike Air Force 1 Mid '07 updates a classic look with modern design and comfort. Premium materials and craftsmanship give you a bold style.",
  images: [
    "https://via.placeholder.com/400x300?text=Product+Image+1",
    "https://via.placeholder.com/400x300?text=Product+Image+2",
  ],
  colors: ["White", "Black"],
  sizes: ["7", "8", "9", "10"],
};

const ProductDetails: React.FC = () => {
  return (
    <div className="p-6 md:p-12 lg:p-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          {product.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Product Image ${index + 1}`}
              className="w-full rounded-lg shadow-md"
              width={400}
              height={300}
            />
          ))}
        </div>

        {/* Product Details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>
          <p className="text-lg text-gray-500 mt-2">{product.description}</p>
          <p className="text-2xl font-bold text-gray-800 mt-4">{product.price}</p>

          {/* Colors */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Available Colors:</h3>
            <div className="flex space-x-4 mt-2">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm font-medium text-gray-700 border rounded-md shadow-sm cursor-pointer hover:bg-gray-100"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Available Sizes:</h3>
            <div className="flex space-x-4 mt-2">
              {product.sizes.map((size, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm font-medium text-gray-700 border rounded-md shadow-sm cursor-pointer hover:bg-gray-100"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="w-full mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
