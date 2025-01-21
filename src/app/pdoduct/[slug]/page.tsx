import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/product";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"; // Ensure `urlFor` is imported correctly

interface ProductPageProps {
  params: { slug: string }; // Fixed parameter type
}

// Function to fetch a single product
async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      productName,
      _type,
      image,
      price,
      description // Added description field
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  // Check if params exist and slug is passed
  if (!params || !params.slug) {
    return (
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold">Invalid product details</h1>
      </div>
    );
  }

  const { slug } = params; // Destructure `slug` directly
  const product = await getProduct(slug);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url() || ""}
              alt={product.productName}
              width={500}
              height={500}
              className="object-cover rounded"
            />
          )}
          
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.productName}</h1>
          <p className="text-2xl text-gray-700 font-semibold">${product.price}</p>
          {/* Description Section */}
          {product.description && (
            <p className="text-base text-gray-600 leading-relaxed">
              {product.description}
            </p>
          )}
          <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
