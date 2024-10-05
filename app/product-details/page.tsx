"use client";

import { v4 as uuidv4 } from 'uuid';
import AuthNavbar from "../auth/AuthNavbar";
import Image from "next/image";
import Logo from "@/public/assests/Luxela white logo 1.svg";
import productBaz from "@/public/assests/product_baz.svg";
import sol from "/public/assests/sol.svg";
import arrow from "/public/assests/autharrow.svg";
import cart from "/public/assests/shopping-cart-01.svg";
import { useState } from "react";
import DetailModal from "./detailModal";
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation'; // Change made here

const items = [
  {
    name: "Bat Tee Yellow Print",
    price: "0.041",
    image: "/assests/product1.svg",
  },
  {
    name: "Track Pants",
    price: "0.06",
    image: "/assests/product 2.svg",
  },
  {
    name: "Cargo Pants",
    price: "0.06",
    image: "/assests/product3.svg",
  },
  {
    name: "Mamba Uniform",
    price: "0.064",
    image: "/assests/product4.svg",
  },
];

export default function ProductDetails() {
  const [open, setOpen] = useState(false);
  const { addToCart } = useCart(); // Access the cart context
  const router = useRouter(); // Router to redirect

  // State for size and quantity
  const [selectedSize, setSelectedSize] = useState(''); // Selected size
  const [quantity, setQuantity] = useState(1); // Quantity

  const handleAddToCart = () => {
    const product = {
      id: uuidv4(), // Generates a unique id
      name: 'B/W Wrangler',
      price: 0.06,
      size: selectedSize,
      image: '/assests/product_baz.svg',
      quantity: quantity,
    };

    addToCart(product); // Add item to cart
    router.push('/cart'); // Redirect to cart page
  };

  return (
    <section className="bg-black w-full min-h-[100vh] text-white">
      <div className="hidden lg:block">
        <AuthNavbar />
      </div>
      <div className="max-w-[1440px] px-4 md:px-8 flex flex-col mx-auto">
        <div className="lg:hidden flex justify-center items-center pt-4">
          <Image className="max-sm:w-32" src={Logo} alt="logo" />
        </div>

        <div>
          <p className=" font-spaceGrotesk my-10 text-xs flex gap-x-3 text-white/60">
            Home <span>&gt;</span>{" "}
            <span className="text-white/60">BAZ Fashion</span>
            <span>&gt;</span>
            <span className="text-white">Jamie Loafers</span>
          </p>
        </div>

        <section className="font-spaceGrotesk flex flex-col lg:flex-row gap-x-8 mb-4">
          <section className="w-full rounded-md">
            <div className="bg-zinc-900 w-full p-6 rounded-md">
              <Image className="" src={productBaz} alt="baz" />
            </div>
            <div className="flex justify-start items-start gap-x-3 mt-4">
              <Image
                className="w-28 bg-zinc-900 rounded-md"
                src={productBaz}
                alt="baz"
              />
              <Image
                className="w-28 bg-zinc-900 rounded-md"
                src={productBaz}
                alt="baz"
              />
              <Image
                className="w-28 bg-zinc-900 rounded-md"
                src={productBaz}
                alt="baz"
              />
            </div>
          </section>

          <section className="bg-zinc-900 w-full p-6 rounded-md">
            <div className="flex justify-between items-center mt-2">
              <div>
                <h1>B/W Wrangler</h1>
                <p className="text-xs text-white/70 my-1">BAZ Fashion</p>
              </div>
              <button className="px-2 py-1 hover:bg-luxela_purple hover:text-white text-luxela_lilac rounded-lg bg-luxela_lilac/30 text-xs">
                View collection <span className="ml-2 font-bold">&gt;</span>
              </button>
            </div>{" "}
            <hr className="my-3 w-full h-[0.2px] border border-gray-700/50" />
            <div className="flex gap-x-2 font-spaceGrotesk items-center">
              <span className="text-lg font-medium">0.06</span>
              <span>
                {" "}
                <Image className="w-5 h-5" src={sol} alt="sol" />
              </span>{" "}
              <sub className="text-white/70 mt-2">$8.75</sub>
            </div>
            <hr className="my-3 w-full h-[0.2px] border border-gray-700/50" />
            <div className="flex justify-between items-center">
              <p className="text-sm text-white/70">Item description</p>
              <button
                className="px-2 py-1 hover:bg-luxela_purple hover:text-white text-luxela_lilac rounded-lg bg-luxela_lilac/30 text-xs"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                Read more <span className="ml-2 font-bold">&gt;</span>
              </button>
            </div>{" "}
            <hr className="my-3 w-full h-[0.2px] border border-gray-700/50" />
            <div>
              <p className="text-[13px] mb-2 text-white/70">Select size</p>
              <div className="flex gap-x-3 font-spaceGrotesk">
                {['S', 'L', 'XL', 'XXL', 'XXXL'].map(size => (
                  <button
                    key={size}
                    className={`w-14 h-10 rounded-md ${selectedSize === size ? 'border border-luxela_lilac' : ''} hover:border hover:border-luxela_lilac text-xs`}
                    onClick={() => setSelectedSize(size)} // Set selected size
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <hr className="my-3 w-full h-[0.2px] border border-gray-700/50" />
            <div>
              <p className="text-[13px] mb-2 text-white/70">Quantity</p>
              <div className="w-3/5 flex items-center justify-between gap-x-6 bg-zinc-800 rounded-md">
                <button
                  className="w-14 h-10 rounded-md hover:border hover:border-luxela_lilac text-2xl"
                  onClick={() => setQuantity(q => Math.max(q - 1, 1))} // Decrement quantity
                >
                  -
                </button>
                <button disabled className="w-14 h-10 rounded-md text-sm">
                  {quantity}
                </button>
                <button
                  className="w-14 h-10 rounded-md hover:border hover:border-luxela_lilac text-2xl"
                  onClick={() => setQuantity(q => q + 1)} // Increment quantity
                >
                  +
                </button>
              </div>
            </div>
            <hr className="my-3 w-full h-[0.2px] border border-gray-700/50" />
            <div>
              <p className="text-[13px] mb-2 text-white/70">Item details</p>
              <div className="flex justify-between items-center">
                <p className="text-xs mb-2 text-white/70">Category</p>
                <h2 className="text-[13px] mb-2 text-white/70">
                  Luxury, <span>Casual,</span> <span>Male</span>
                </h2>
              </div>
            </div>
            <hr className="my-3 w-full h-[0.2px] border border-gray-700/50" />
            <div>
              <button
                onClick={handleAddToCart} // Add to cart function
                className="bg-luxela_purple px-5 py-3 rounded-md w-full text-sm hover:bg-luxela_lilac transition-all duration-300"
              >
                Add to cart
              </button>
            </div>
          </section>
        </section>
      </div>
      <DetailModal open={open} setOpen={setOpen} />
    </section>
  );
}
