"use client";
import Image from "next/image";
import sol from "/public/assests/sol.svg";
import check from "/public/assests/checkmark.svg";
import Link from 'next/link';
import Navbar from "../../../components/Homepage/Navbar2";
import MobileNav from "../../../components/Homepage/MobileNav2";


interface PaymentPage2Props {
  total: number;
  items: { name: string; price: number; size: string; image: string; }[]; // Define the shape of your items here
}

const PaymentPage2: React.FC<PaymentPage2Props> = ({ total, items }) => {
  return (
    <section className="bg-black w-full min-h-[100vh] text-white">
     <Navbar />
     <MobileNav />
      <div className="max-w-[1440px] px-4 md:px-8 flex flex-col mx-auto">
        <section className="my-10">
          <div>
            <p className="font-spaceGrotesk text-xs flex gap-x-3 mb-5 text-white/60">
              Checkout <span>&gt;</span> Payment
            </p>
          </div>

          <section className="font-spaceGrotesk flex flex-col lg:flex-row gap-x-8 justify-between items-start max-lg:space-y-16">
            {/* Left Section: Order Summary */}
            <section className="lg:w-1/2 flex flex-col space-y-4">
              <section className="bg-zinc-900 w-full p-6 rounded-md">
                <div className="flex justify-between mb-2 items-center">
                  <h2 className="text-sm mb-4">Order Summary</h2>
                </div>
                <div className="flex flex-col gap-y-8 gap-x-8">
                  {items.map((item, index) => (
                    <div key={index} className="flex justify-between gap-y-8">
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
                            <span>
                              <Image className="w-5 h-5" src={sol} alt="sol" />
                            </span>
                          </p>
                          <p className="text-[10px] text-white/70">{item.size}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <hr className="mt-16 mb-4 w-full h-[0.2px] border border-gray-700/50" />
                <div className="text-xs mt-4 flex justify-between items-center">
                  <p className="text-white/70">Total amount (SOL)</p>
                  <div className="flex gap-x-1">
                    <span className="text-[10px] text-white/70">${total.toFixed(2)}</span>
                    <span>{total.toFixed(3)}</span>
                    <span>
                      <Image className="w-5 h-5" src={sol} alt="sol" />
                    </span>
                    <span>
                      <Image className="w-5 h-5" src={sol} alt="sol" />
                    </span>{" "}
                  </div>
                </div>
                <hr className="mt-3 w-full h-[0.2px] border border-gray-700/50" />
              </section>
            </section>

            {/* Right Section: Thank You Message */}
            <section className="lg:w-1/2 w-full rounded-md bg-zinc-900">
              <section className="font-spaceGrotesk p-6 rounded-md text-sm">
                <div className="flex flex-col gap-y-2 justify-center items-center">
                  <Image src={check} alt="checkmark" />

                  <p className="text-md">Thank you for your order!</p>
                  <p className="text-xs">
                    The order confirmation has been sent to your email.
                  </p>
                </div>
                <hr className="my-3 w-full h-[0.2px] border border-gray-700/50" />
                <div className="text-xs">
                  <p className="text-white/70 mb-2">Transaction date</p>
                  <p>Date of transaction</p>
                </div>
                <hr className="my-3 w-full h-[0.2px] border border-gray-700/50" />

                <div className="text-xs">
                  <p className="text-white/70 mb-2">Payment method</p>
                  <p>Date of transaction</p>
                </div>
                <hr className="my-3 w-full h-[0.2px] border border-gray-700/50" />

                <div className="text-xs text-white/70 my-2">
                  <p className="mb-2">Shipping address</p>
                  <p className="text-white leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Maxime veniam eius corporis recusandae tempore
                    necessitatibus eligendi ab dolor, doloribus iusto a, aliquam
                    excepturi atque sint eveniet soluta ipsam consequatur
                    ducimus?
                  </p>
                </div>
                <hr className="my-3 w-full h-[0.2px] border border-gray-700/50" />
                <div className="text-white/70 text-xs my-2">
                  <p className="mb-2">Delivery date</p>
                  <p>
                    Delivery between{" "}
                    <span className="text-white">
                      23 Sep and 25 Sep (7-10 days from now)
                    </span>
                  </p>
                </div>
              </section>

              <div className="flex flex-col md:flex-row max-md:gap-y-6 mt-4 justify-between items-end gap-x-3 px-6 py-2">
                <Link href="../../../Home">
                  <button
                    className="flex items-center justify-center gap-x-2 font-spaceGrotesk font-medium w-full h-10 bg-zinc-800
                    bg-gradient-to-b from-luxela_lilac via-luxela_purple2 to-luxela_purple rounded-lg text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac"
                  >
                    Continue Shopping
                  </button>
                </Link>

                <button
                  className="flex items-center justify-center gap-x-2 font-spaceGrotesk font-medium w-full h-10 bg-zinc-800
                  rounded-lg text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac"
                >
                  Track Order
                </button>
              </div>
            </section>
          </section>
        </section>
      </div>
    </section>
  );
};

export default PaymentPage2;
