"use client";
import AuthNavbar from "@/app/auth/AuthNavbar";
import Image from "next/image";
import Logo from "/public/assests/Luxela white logo 1.svg";
import sol from "/public/assests/sol.svg";
// import qrcode from "/public/assests/qrcode.svg";
import lock from "/public/assests/lock.svg";
import { useState } from "react";
import PaymentPage2 from "./paymentPage2";

const items = [
  {
    name: "Mamba uniform",
    price: "0.064",
    size: "Size:XL",
    image: "/assests/product2.svg",
  },

  {
    name: "B/W Wrangler",
    price: "0.064",
    size: "Size:XL",
    image: "/assests/product2.svg",
  },
  {
    name: "Cargo Pants",
    price: "0.064",
    size: "Size:XL",
    image: "/assests/product2.svg",
  },
];

export default function Payment() {
  const [page, setPage] = useState(false);

  return (
    <>
      {!page ? (
        <section className="bg-black w-full min-h-[100vh] text-white">
          <div className="hidden lg:block">
            <AuthNavbar />
          </div>
          <div className="max-w-[1440px] px-4 md:px-8 flex flex-col mx-auto">
            <div className="lg:hidden flex justify-center items-center pt-4">
              <Image className="max-sm:w-32" src={Logo} alt="logo" />
            </div>

            <section className="my-10">
              <div>
                <p className=" font-spaceGrotesk text-xs flex gap-x-3 mb-5 text-white/60">
                  Cart <span>&gt;</span>{" "}
                  <span className="text-white/60">Checkout</span>
                  <span>&gt;</span>
                  <span className="text-white">Payment</span>
                </p>
              </div>

              <section className=" font-spaceGrotesk flex flex-col lg:flex-row max-lg:space-y-16 justify-between items-start gap-x-8">
                <section className="lg:w-1/2 flex flex-col space-y-4">
                  <section className="bg-zinc-900 w-full  p-6 rounded-md">
                    <div className="flex justify-between mb-2 items-center">
                      <h2 className="text-sm mb-4">Order Summary</h2>
                      <button className="px-2 py-1 hover:bg-luxela_purple hover:text-white text-luxela_lilac rounded-lg bg-luxela_lilac/30 text-xs">
                        Edit details
                      </button>
                    </div>
                    <div className="flex flex-col gap-y-8 gap-x-8">
                      {items.map((item, index) => {
                        return (
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
                                <p className="flex items-center">
                                  {item.price}{" "}
                                  <span className="">
                                    <Image
                                      className="w-5 h-5"
                                      src={sol}
                                      alt="sol"
                                    />
                                  </span>
                                </p>
                                <p className="text-[10px] text-white/70">
                                  {item.size}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
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
                            &35.87
                          </span>
                          <span>0.244</span>
                          <span>
                            {" "}
                            <Image className="w-5 h-5" src={sol} alt="sol" />
                          </span>
                        </div>
                        <div className="text-xs flex gap-x-1">
                          <span className="text-white/70 text-[10px]">
                            &1.47
                          </span>
                          <span>0.01</span>
                          <span>
                            {" "}
                            <Image className="w-5 h-5" src={sol} alt="sol" />
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                    <hr className="w-full h-[0.2px] mt-4 border border-gray-700/50" />

                    <div className="text-xs mt-4 flex justify-between items-center">
                      <p className="text-white/70">Total amount (SOL)</p>
                      <div className="flex gap-x-1">
                        <span className="text-[10px] text-white/70">
                          $37.34
                        </span>
                        <span>0.254</span>
                        <span>
                          {" "}
                          <Image className="w-5 h-5" src={sol} alt="sol" />
                        </span>{" "}
                      </div>
                    </div>
                    <hr className="mt-3 w-full h-[0.2px] border border-gray-700/50" />
                  </section>
                  <div className="bg-zinc-900 w-full p-6 rounded-md">
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Maxime veniam eius corporis recusandae tempore
                        necessitatibus eligendi ab dolor, doloribus iusto a,
                        aliquam excepturi atque sint eveniet soluta ipsam
                        consequatur ducimus?
                      </p>
                    </div>
                    <hr className="mt- w-full h-[0.2px] border border-gray-700/50" />
                    <div className="text-white/70 text-xs my-2">
                      <p className="mb-2">Delivery date</p>
                      <p>
                        Delivery between{" "}
                        <span className="text-white">
                          23 Sep and 25 Sep (7-10days from now)
                        </span>
                      </p>
                    </div>
                  </div>
                </section>
                <section className="w-full lg:w-1/2">
                  <section className="font-spaceGrotesk p-6 rounded-md text-sm">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-sm">Payment </h2>
                      <div className="flex text-xs items-center text-white/70">
                        {" "}
                        <Image className="" src={lock} alt="lock" />
                        <p>Payments are secure and encrypted</p>
                      </div>
                    </div>{" "}
                    <hr className="w-full h-[0.2px] border border-gray-700/50" />
                    <div className="text-xs my-3 flex justify-between items-center">
                      <p className="text-white/70">Amount to be paid (SOL)</p>
                      <div className="flex gap-x-1">
                        <span className="text-[10px] text-white/70">
                          $37.34
                        </span>
                        <span>0.254</span>
                        <span>
                          {" "}
                          <Image className="w-5 h-5" src={sol} alt="sol" />
                        </span>{" "}
                      </div>
                    </div>
                    <hr className="w-full h-[0.2px] border border-gray-700/50" />
                    <form className="space-y-6">
                      <div className="flex gap-x-4 items-center mt-2">
                        <div className="w-1/2 text-white/70">
                          <label htmlFor="network" className="text-xs">
                            Network
                          </label>
                          <div className="mt-2 px-2 bg-zinc-800 text-sm rounded-lg border-none py-2 text-white shadow-sm sm:text-sm">
                            <h2 className="flex gap-x-2 items-center text-xs">
                              <span>
                                {" "}
                                <Image
                                  className="w-5 h-5"
                                  src={sol}
                                  alt="sol"
                                />
                              </span>
                              SOLANA
                            </h2>
                          </div>
                          <h3 className="text-xs mt-3">
                            Conversion Rate: 1 SOL = $135.05
                          </h3>
                        </div>

                        <div className="w-1/2 text-white/70 flex flex-col">
                          <label htmlFor="network" className="text-xs">
                            Token
                          </label>
                          <select
                            name=""
                            id=""
                            className="mt-2 px-2 bg-zinc-800 text-sm rounded-lg border-none py-2 text-white shadow-sm sm:text-sm"
                          >
                            <option value="sol">SOL</option>
                            <option value="sol">SOL</option>
                            <option value="sol">SOL</option>
                          </select>
                          <div className="mt-7"></div>
                        </div>
                      </div>
                    </form>
                  </section>

                  <div className="flex flex-col md:flex-row max-md:gap-y-6 mt-4 justify-between items-end gap-x-3 px-6 py-2">
                    <button
                      className="flex items-center justify-center  gap-x-2 font-spaceGrotesk font-medium w-full h-10 bg-zinc-800
                bg-gradient-to-b from-luxela_lilac via-luxela_purple2 to-luxela_purple rounded-lg text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac"
                      onClick={() => setPage(!page)}
                    >
                      Proceed to checkout
                    </button>
                    <button
                      className="flex items-center justify-center  gap-x-2 font-spaceGrotesk font-medium w-full h-10 bg-zinc-800
                   rounded-lg text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac"
                    >
                      Cancel
                    </button>
                  </div>

                  {/* <div className="bg-zinc-900 w-full p-6 rounded-md">
                <div className="flex justify-center items-center gap-x-2">
                  <h2 className="text-lg">1.26</h2>
                  <Image className="w-5 h-5" src={sol} alt="sol" />
                </div>

                <div className="flex flex-col items-center text-xs text-white/70">
                  <Image className="my-3" src={qrcode} alt="qrcode" />
                  <p>
                    Powered by <span className="text-white">SOLANA PAY</span>{" "}
                  </p>
                  <p className="text-center mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    esse voluptatum, accusamus laboriosam vitae deserunt,
                    tenetur dolores id eligendi mollitia ipsum exercitationem
                    veniam, rerum distinctio non totam illo sequi assumenda.
                  </p>
                </div>
              </div> */}
                </section>
              </section>
            </section>
          </div>
        </section>
      ) : (
        <PaymentPage2 />
      )}
    </>
  );
}
