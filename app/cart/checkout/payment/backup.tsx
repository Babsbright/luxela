"use client";
import Image from "next/image";
import { useCart } from "../../../context/CartContext";
// import sol from "/public/assests/sol.svg";
import lock from "/public/assests/lock.svg";
import { useState } from "react";
import PaymentPage2 from "./paymentPage2";
import Link from "next/link";
import Navbar from "../../../components/Homepage/Navbar2";
import MobileNav from "../../../components/Homepage/MobileNav2";
// import { items } from "../../data";

export default function Payment() {
  const [page, setPage] = useState<boolean>(false);
  const { cartItems } = useCart();
  const [buttonText] = useState("Proceed to Payment");

  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (acc: number, item: { price: number }) => acc + item.price,
      0
    );
    const shippingFee = 1.47;
    const total = subtotal + shippingFee;
    return { subtotal, shippingFee, total };
  };

  const { subtotal, shippingFee, total = 0 } = calculateTotal();

  // Redirect to payment link
  const handlePayment = () => {
    const totalAmount = calculateTotal();
    const actionLink = process.env.NEXT_PUBLIC_PAYMENT_ENDPOINT;
    const publicKey = process.env.NEXT_PUBLIC_PAYMENT_API_KEY;

    const paymentUrl = `${actionLink}&amount=${totalAmount}&apiKey=${publicKey}`;

    window.open(paymentUrl, "_blank");

    // Simulate a payment result (success or failure)
    setTimeout(() => {
      const paymentSuccess = Math.random() > 0.5;
      if (paymentSuccess) {
        alert("🎉 Payment was successful!");
        setPage(true);
      } else {
        alert("😓 Payment failed. Please try again.");
      }
    }, 5000);
  };

  return (
    <>
      {!page ? (
        <section className="bg-black w-full min-h-[100vh] text-white">
          <Navbar />
          <MobileNav />
          <div className="max-w-[1440px] px-4 md:px-8 flex flex-col mx-auto">
            <section className="my-10">
              <div>
                <p className="font-spaceGrotesk text-xs flex gap-x-3 mb-5 text-white/60">
                  Cart <span>&gt;</span>{" "}
                  <span className="text-white/60">Checkout</span>
                  <span>&gt;</span>
                  <span className="text-white">Payment</span>
                </p>
              </div>

              <section className="font-spaceGrotesk flex flex-col lg:flex-row max-lg:space-y-16 justify-between items-start lg:gap-x-8">
                <section className="w-full lg:w-1/2 flex flex-col space-y-4">
                  <section className="bg-zinc-900 w-full p-6 rounded-md">
                    <div className="flex justify-between mb-2 items-center">
                      <h2 className="text-sm mb-4">Order Summary</h2>
                      <Link href={"/cart"}>
                        <button className="px-2 py-1 hover:bg-luxela_purple hover:text-white text-luxela_lilac rounded-lg bg-luxela_lilac/30 text-xs">
                          Edit details
                        </button>
                      </Link>
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
                <div className="w-full lg:w-1/2 flex flex-col space-y-4">
                  <div className="bg-zinc-900 w-full px-6 pt-6 pb-3 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="text-sm mb-4">Shipping details</h2>
                      <button className="px-2 py-1 hover:bg-luxela_purple hover:text-white text-luxela_lilac rounded-lg bg-luxela_lilac/30 text-xs">
                        Edit details
                      </button>
                    </div>
                    <hr className="w-full h-[0.2px] border border-gray-700/50" />
                    <div className="text-xs text-white/70 my-2">
                      <p className="mb-2">Shipping address</p>
                      <p>
                        The transaction for Jane Doe, residing at 123 Fashion
                        Avenue, Lekki Phase 1, Lagos, Nigeria, was completed on
                        October 6, 2024.
                      </p>
                    </div>
                    <hr className="mt- w-full h-[0.2px] border border-gray-700/50" />
                    <div className="text-white/70 text-xs my-2">
                      <p className="mb-2">Delivery date</p>
                      <p>
                        Estimated Delivery Date
                        <span className="text-white">
                          {" "}
                          {""} October 12-15, 2024
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col w-full space-y-4">
                    <button
                      onClick={handlePayment}
                      className="
                      flex items-center 
                      justify-center gap-2 w-full
                       rounded-lg
                  font-spaceGrotesk font-medium h-10 bg-gradient-to-b from-luxela_lilac via-luxela_purple2 to-luxela_purple
                   text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac"
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
