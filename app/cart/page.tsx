import Image from "next/image";
import sol from "/public/assests/sol.svg";
import Button from "../components/Button/button";
import Link from "next/link";
import Navbar from "../components/Homepage/Navbar2";
import MobileNav from "../components/Homepage/MobileNav2";
import {items2} from "./data"

export default function Cart() {
  return (
    <section className="bg-black w-full min-h-[100vh] text-white">
      <Navbar />
      <MobileNav />
      <div className="max-w-[1440px] px-4 md:px-8 flex flex-col mx-auto">
        <section className="my-10">
          <div>
            <p className=" font-spaceGrotesk text-xs flex gap-x-3 mb-5 text-white/60">
              Home <span>&gt;</span> <span className="text-white">My cart</span>
            </p>
          </div>

          <section className=" font-spaceGrotesk flex flex-col lg:flex-row max-lg:space-y-16 justify-between items-start gap-x-8">
            <section className="bg-zinc-900 w-full lg:w-1/2 p-6 rounded-md">
              <h2 className="text-sm mb-4">Items in cart</h2>

              <div className="flex flex-col gap-y-8 gap-x-8">
                {items2.map((item, index) => {
                  return (
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
                            <span className="">
                              <Image className="w-5 h-5" src={sol} alt="sol" />
                            </span>
                          </p>
                          <p className="text-[10px] text-white/70">
                            {item.size}
                          </p>
                        </div>
                      </div>

                      <div className="text-sm">
                        <div className="flex justify-center rounded-sm">
                          <button className="py-1.5 px-4 bg-zinc-800 hover:bg-zinc-700">
                            -
                          </button>
                          <button className="py-1.5 px-4 bg-zinc-800 hover:bg-zinc-700">
                            1
                          </button>
                          <button className="py-1.5 px-4 bg-zinc-800 hover:bg-zinc-700">
                            +
                          </button>
                        </div>
                        <div className="flex flex-col items-end">
                          <button className="font-spaceGrotesk text-[10px] px-2 mt-2 py-1 rounded-md bg-red-500/10 text-red-600 hover:bg-red-500 hover:text-white/70">
                            Remove item
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="font-spaceGrotesk bg-zinc-900 w-full lg:w-1/2 p-6 rounded-md text-sm">
              <h2 className="mb-4 text-sm">Detail Summary</h2>

              <div className="flex justify-between items-center">
                <div className="text-white/70 flex flex-col space-y-4">
                  <p className="text-xs">Cart subtotal</p>
                  <p className="text-xs">Price delivery</p>
                  <p className="text-xs">NTF discount</p>
                </div>
                <div className="flex flex-col space-y-4 items-end">
                  <div className="text-xs flex gap-x-1">
                    <span className="text-white/70 text-[10px]">&35.87</span>
                    <span>0.244</span>
                    <span>
                      {" "}
                      <Image className="w-5 h-5" src={sol} alt="sol" />
                    </span>
                  </div>
                  <div className="text-xs flex gap-x-1">
                    <span className="text-white/70 text-[10px]">&1.47</span>
                    <span>0.01</span>
                    <span>
                      {" "}
                      <Image className="w-5 h-5" src={sol} alt="sol" />
                    </span>{" "}
                  </div>
                  <div className="text-xs flex gap-x-1">
                    <span className="text-xs text-white/70 text-[10px]">
                      $0.00
                    </span>
                    <span>0.00</span>
                    <span>
                      {" "}
                      <Image className="w-5 h-5" src={sol} alt="sol" />
                    </span>{" "}
                  </div>
                </div>
              </div>
              <hr className="w-full h-[0.2px] border border-gray-700/50" />

              <div className="text-xs mt-4 flex justify-between items-center">
                <p className="text-white/70">Total amount (SOL)</p>
                <div className="flex gap-x-1">
                  <span className="text-[10px] text-white/70">$37.34</span>
                  <span>0.254</span>
                  <span>
                    {" "}
                    <Image className="w-5 h-5" src={sol} alt="sol" />
                  </span>{" "}
                </div>
              </div>
              <hr className="mt-3 w-full h-[0.2px] border border-gray-700/50" />
              <Link href={"/cart/checkout"}>
                <Button>Proceed to checkout</Button>
              </Link>
            </section>
          </section>
        </section>
      </div>
    </section>
  );
}
