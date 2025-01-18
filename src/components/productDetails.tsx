import Image from 'next/image';
import React from 'react';

const ProductDetail = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-md flex max-w-5xl w-full">
        {/* Image Section */}
        <div className="w-1/2 p-4 flex items-center justify-center">
          <Image
            src="/productD.png" // Replace with the actual image path
            alt="Nike Air Force 1"
            className="w-full max-w-sm"
            width={0}
            height={0}
          />
        </div>

        {/* Details Section */}
        <div></div>
        <div className="w-1/2 p-6 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Nike Air Force 1 PLT.AF.ORM</h1>
          <p className="text-gray-700 mb-6">
            Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its
            &quot;Inside out&quot;–inspired construction, including unique layering and exposed foam
            accents, ups the ante on this timeless Jordan Brand silhouette. Details like
            the deco stitching on the Swoosh add coveted appeal, while the unexpected
            shading, rich mixture of materials and aged midsole aesthetic give this
            release an artisan finish.
          </p>
          <p className="text-xl font-bold mb-4">₹ 8,695.00</p>
          <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
