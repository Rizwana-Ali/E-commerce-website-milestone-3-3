
"use client";
import Link from "next/link";
import { useCart } from "../components/cartContext";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";



const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart(); 
  const formattedPrice = (price: number) =>
    new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
    }).format(price);

  return (
    <div>
      <div className="relative w-full mb-6">
        <Image src="/shop.png" alt="Banner" width={1200} height={400} className="w-full h-auto object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold">Cart</h1>
          <p className="mt-2 text-lg">Home &gt; Shop</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 p-6">
        {/* Cart Items */}
        <div className="flex-1">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-pink-50">
                <th className="text-left p-4 border-b border-gray-200">Product</th>
                <th className="text-left p-4 border-b border-gray-200">Price</th>
                <th className="text-left p-4 border-b border-gray-200">Quantity</th>
                <th className="text-left p-4 border-b border-gray-200">Subtotal</th>
                <th className="text-left p-4 border-b border-gray-200">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item: any) => (  // Ensure each item has a unique 'id'
                <tr key={item.id}>
                  <td className="p-4 flex items-center gap-4">
                  


                   <Image
                                    src={urlFor(item.productImage).width(300).height(300).url()}
                                    alt={item.title || "Product Image"}
                                    width={80}
                                    height={80}
                                    className="rounded-lg"
                                  />
                  


                    <span>{item.title}</span>
                  </td>
                  <td className="p-4">{formattedPrice(item.price)}</td>
                  <td className="p-4">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="border p-2 w-16 text-center rounded"
                    />
                  </td>
                  <td className="p-4">{formattedPrice(item.price * item.quantity)}</td>
                  <td className="p-4">
                    <button
                      onClick={() => removeFromCart(item.id)}  // Ensure we pass the correct unique id
                      className="text-gold hover:underline"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cart Totals */}
        <div className="w-full lg:w-1/3 bg-pink-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-6">Cart Totals</h2>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-600">
              {formattedPrice(
                cart.reduce((total: any, item: any) => total + item.price * item.quantity, 0)
              )}
            </span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-bold">Total</span>
            <span className="font-bold text-gold">
              {formattedPrice(
                cart.reduce((total: any, item: any) => total + item.price * item.quantity, 0)
              )}
            </span>
          </div>


          <Link href="/checkout">
          <button
            onClick={() => console.log("Proceed to checkout")}
            className="w-full bg-white border border-gray-300 rounded-lg py-2 px-4 text-black font-semibold hover:shadow-md"
          >
            Check Out
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CartPage
