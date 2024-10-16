// app/cart/checkout/page.tsx
"use client";
import { useCart } from '../../context/CartContext'; 
import Image from "next/image";
import sol from "/public/assests/sol.svg";
import Button from "@/app/components/Button/button";
import Link from "next/link";
import { CheckoutInput } from "@/app/components/Input/input";
import { useState } from "react";
import Navbar from "../../components/Homepage/Navbar2";
import MobileNav from "../../components/Homepage/MobileNav2";


export default function Checkout() {
  const { cartItems, removeFromCart } = useCart(); // Access cart items from context
  const [data, setData] = useState({
    emailAddress: "",
    postalCode: "",
    shippingAddress: "",
  });

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { value: any; name: any; }; }) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleRemoveItem = (id: string) => {
    removeFromCart(id); // Remove item from cart context
  };

  // Calculate total price
  const calculateTotal = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingFee = 1.47; // Example shipping fee
    const total = subtotal + shippingFee; // Modify as per your requirements
    return {
      subtotal,
      shippingFee,
      total,
    };
  };

  const { subtotal, shippingFee, total } = calculateTotal();

  return (
    <section className="bg-black w-full min-h-[100vh] text-white">
    <Navbar />
    <MobileNav />
     <div className="max-w-[1440px] px-4 md:px-8 flex flex-col mx-auto">
    


        <section className="my-10">
          <div>
            <p className="font-spaceGrotesk text-xs flex gap-x-3 mb-5 text-white/60">
              Cart <span>&gt;</span>{" "}
              <span className="text-white">Checkout</span>
            </p>
          </div>

          <section className="font-spaceGrotesk flex flex-col lg:flex-row max-lg:space-y-16 justify-between items-start gap-x-8">
            <section className="bg-zinc-900 w-full lg:w-1/2 p-6 rounded-md">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-sm mb-4">Order Summary</h2>
                <Link href={"/cart"}>
                <button className="px-2 py-1 hover:bg-luxela_purple hover:text-white text-luxela_lilac rounded-lg bg-luxela_lilac/30 text-xs">
                  Edit details
                </button></Link>
               
              </div>
              <div className="flex flex-col gap-y-8 gap-x-8">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between gap-y-8">
                      <div className="flex justify-between gap-x-4 items-center">
                        <div className="bg-zinc-800 rounded-sm p-2">
                          <Image
                            width={45}
                            height={45}
                            src={item.image}
                            alt="product"
                          />
                        </div>

                        <div className="text-xs">
                          <p className="text-white/70">{item.name}</p>
                          <p className="flex items-center">
                            {item.price.toFixed(3)}{" "}
                            <span className="">
                              <Image className="w-5 h-5" src={sol} alt="sol" />
                            </span>
                          </p>
                          <p className="text-[10px] text-white/70">{item.size}</p>
                        </div>
                      </div>

                      <div className="text-sm">
                        <div className="flex flex-col items-end">
                          <button
                            className="font-spaceGrotesk text-[10px] px-2 mt-2 py-1 rounded-md bg-red-500/10 text-red-600 hover:bg-red-500 hover:text-white/70"
                            onClick={() => handleRemoveItem(item.id)} // Pass the item ID
                          >
                            Remove item
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Your cart is empty.</p>
                )}
              </div>
              <hr className="mt-16 mb-4 w-full h-[0.2px] border border-gray-700/50" />

              <div className="flex justify-between items-center">
                <div className="text-white/70 flex flex-col space-y-4">
                  <p className="text-xs">Subtotal</p>
                  <p className="text-xs">Shipping fee</p>
                </div>
                <div className="flex flex-col space-y-4 items-end">
                  <div className="text-xs flex gap-x-1">
                    <span className="text-white/70 text-[10px]">{subtotal.toFixed(2)}</span>
                    <span>{subtotal.toFixed(3)}</span>
                    <span>
                      <Image className="w-5 h-5" src={sol} alt="sol" />
                    </span>
                  </div>
                  <div className="text-xs flex gap-x-1">
                    <span className="text-white/70 text-[10px]">{shippingFee.toFixed(2)}</span>
                    <span>{shippingFee.toFixed(2)}</span>
                    <span>
                      <Image className="w-5 h-5" src={sol} alt="sol" />
                    </span>
                  </div>
                </div>
              </div>
              <hr className="w-full h-[0.2px] mt-4 border border-gray-700/50" />

              <div className="text-xs mt-4 flex justify-between items-center">
                <p className="text-white/70">Total amount (SOL)</p>
                <div className="flex gap-x-1">
                  <span className="text-[10px] text-white/70">{total.toFixed(2)}</span>
                  <span>{(total - shippingFee).toFixed(3)}</span>
                  <span>
                    <Image className="w-5 h-5" src={sol} alt="sol" />
                  </span>
                </div>
              </div>
              <hr className="mt-3 w-full h-[0.2px] border border-gray-700/50" />
              <Link href={"/cart/checkout/payment"}>
                <Button>Proceed to checkout</Button>
              </Link>
            </section>

            <section className="font-spaceGrotesk bg-zinc-900 w-full lg:w-1/2 p-6 rounded-md text-sm">
              <h2 className="mb-4 text-sm">Shipping Address</h2>
              <form className="space-y-6">
                <div className="flex gap-x-4 items-center">
                  <div className="w-1/2">
                    <CheckoutInput
                      label="Email address"
                      name="emailAddress"
                      value={data.emailAddress}
                      type="text"
                      placeholder="John@gmail.com"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="w-1/2">
                    <CheckoutInput
                      label="Postal code"
                      name="postalCode"
                      value={data.postalCode}
                      type="text"
                      placeholder="00024"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <CheckoutInput
                  label="Shipping address"
                  name="shippingAddress"
                  value={data.shippingAddress}
                  type="text"
                  placeholder="Enter your shipping address"
                  onChange={handleChange}
                />
              </form>
            </section>
          </section>
        </section>
      </div>
    </section>
  );
}
