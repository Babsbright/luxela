"use client";
import { useCart } from "../../../context/CartContext";
import { useState } from "react";
import Image from "next/image";
import PaymentPage2 from "./paymentPage2";
import AuthNavbar from "@/app/auth/AuthNavbar";
import lock from "/public/assests/lock.svg";

export default function Payment() {
  const [page, setPage] = useState(false);
  const { cartItems } = useCart();
  // eslint-disable-next-line
  const [buttonText, setButtonText] = useState("Proceed to Payment");

  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (acc: number, item: { price: number }) => acc + item.price,
      0
    );
    const shippingFee = 1.47; // Example shipping fee
    const total = subtotal + shippingFee;
    return { subtotal, shippingFee, total };
  };

  const { subtotal, shippingFee, total = 0 } = calculateTotal();

  const handlePayment = () => {
    // Payment handling logic can be added here
    console.log("Proceeding to payment...");
    setPage(true);
  };

  return (
    <>
      {!page ? (
        <section className="bg-black w-full min-h-[100vh] text-white">
          <div className="hidden lg:block">
            <AuthNavbar />
          </div>
          <div className="max-w-[1440px] px-4 md:px-8 flex flex-col mx-auto">
            <div className="lg:hidden flex justify-center items-center pt-4">
              <Image
                className="max-sm:w-32"
                src={"/public/assests/Luxela white logo 1.svg"}
                alt="logo"
                width={150}
                height={50}
              />
            </div>

            <section className="my-10">
              <div>
                <p className="font-spaceGrotesk text-xs flex gap-x-3 mb-5 text-white/60">
                  Cart <span>&gt;</span>{" "}
                  <span className="text-white/60">Checkout</span>
                  <span>&gt;</span>
                  <span className="text-white">Payment</span>
                </p>
              </div>

              <section className="font-spaceGrotesk flex flex-col lg:flex-row max-lg:space-y-16 justify-between items-start gap-x-8">
                <section className="lg:w-1/2 flex flex-col space-y-4">
                  <section className="bg-zinc-900 w-full p-6 rounded-md">
                    <div className="flex justify-between mb-2 items-center">
                      <h2 className="text-sm mb-4">Order Summary</h2>
                      <button className="px-2 py-1 hover:bg-luxela_purple hover:text-white text-luxela_lilac rounded-lg bg-luxela_lilac/30 text-xs">
                        Edit details
                      </button>
                    </div>
                    <div className="flex flex-col gap-y-8 gap-x-8">
                      {cartItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between gap-y-8"
                        >
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
                              <p className="flex items-center">{item.price} </p>
                              <p className="text-[10px] text-white/70">
                                {item.size}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <hr className="mt-16 mb-4 w-full h-[0.2px] border border-gray-700/50" />
                    <div className="flex justify-between items-center">
                      <div className="text-white/70 flex flex-col space-y-4">
                        <p className="text-xs">Subtotal</p>
                        <p className="text-xs">Shipping fee</p>
                      </div>
                      <div className="flex flex-col space-y-4 items-end">
                        <div className="text-xs flex gap-x-1">
                          <span className="text-white/70 text-[10px]">
                            ${subtotal.toFixed(2)}
                          </span>
                        </div>
                        <div className="text-xs flex gap-x-1">
                          <span className="text-white/70 text-[10px]">
                            ${shippingFee.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <hr className="w-full h-[0.2px] mt-4 border border-gray-700/50" />
                    <div className="text-xs mt-4 flex justify-between items-center">
                      <p className="text-white/70">Total amount</p>
                      <div className="flex gap-x-1">
                        <span className="text-[10px] text-white/70">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </section>
                </section>

                {/* Payment Button */}
                <div className="lg:w-1/2 flex flex-col space-y-4 mt-4">
                  <div className="flex flex-col w-full space-y-4">
                    <button
                      onClick={handlePayment}
                      className="flex items-center justify-center gap-2 w-full rounded-md text-white bg-luxela_purple/20 hover:bg-luxela_purple px-4 py-2"
                    >
                      <Image src={lock} alt="lock" width={15} height={15} />
                      {buttonText} {/* Display dynamic button text */}
                    </button>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </section>
      ) : (
        <PaymentPage2 total={total} items={cartItems} />
      )}
    </>
  );
}
