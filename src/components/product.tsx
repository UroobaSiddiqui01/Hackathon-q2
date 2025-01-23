"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../../types/product";
import { client } from "@/sanity/lib/client";
import { four } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const BestOfAirMax = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(four);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <section className="bg-white py-10">
      {/* Heading Section */}
      <div className="max-w-screen-xl mx-auto mb-10 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
          Best of Air Max
        </h1>
        <p className="text-gray-500 mt-2">
          Discover our top picks for Nike Air Max shoes
        </p>
      </div>

      {/* Products Section */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center"
          >
            {product.image ? (
              <Link href={`/products/${product.slug?.current || ""}`}>
                <Image
                  src={urlFor(product.image).width(200).height(200).url() || ""}
                  alt={product.productName || "Product Image"}
                  width={200}
                  height={200}
                  className="object-cover rounded"
                />
                <h3 className="text-lg font-semibold mt-4 text-gray-900">
                  {product.productName}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{product.price}</p>
              </Link>
            ) : (
              <div>
                <p className="text-gray-500">No Image Available</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestOfAirMax;









