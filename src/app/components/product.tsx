


"use client";

import { CartContext } from "../components/cartContext";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { client } from "@/sanity/lib/client";
import { useState, useEffect, useContext } from "react";

// GROQ Query
const allProductsQuery = `*[_type == "product"]{
  _id,
  title,
  description,
  "productImage": productImage.asset->url,
  price,
  tags,
  dicountPercentage,
  isNew
}`;

// Product Interface
export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  tag: string;
  discountpercentage: number;
  newbadge: string;
  productImage: string;
}

export default function Product() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useContext(CartContext) ?? { addToCart: () => {} };

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await client.fetch(allProductsQuery);
       const displayedProducts = productsData.slice(1, 9);
      setProducts(displayedProducts);
    };
    fetchProducts();
  }, []);



  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const productsData = await client.fetch(allproductsQuery);
  //     const displayedProducts = productsData.slice(1, 9);
  //     setProducts(displayedProducts);
  //   };

  //   fetchProducts();
  // }, []); 

  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="relative w-full mb-6">
       
       
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 mt-10">Our Products</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="border border-gray-300 rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition duration-300 text-center"
          >
            <Link href={`/product/productDetail/${product._id}`}>
              <Image
                src={product.productImage}
                alt={product.title}
                width={300}
                height={300}
                className="rounded-lg w-full h-48 object-cover"
              />
            </Link>
            <h2 className="mt-4 text-lg font-semibold text-gray-800">{product.title}</h2>
            <p className="mt-1 text-gray-600">${product.price}</p>
            {product.discountpercentage && (
              <p className="text-red-500 text-sm mt-1">
                Discount: {product.discountpercentage}%
              </p>
            )}
            {product.newbadge && (
              <span className="inline-block mt-1 px-2 py-1 text-xs bg-green-500 text-white rounded-full">
                New
              </span>
            )}
            {/* <button
              onClick={() => handleAddToCart(product)}
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Add to Cart
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}
Product


























