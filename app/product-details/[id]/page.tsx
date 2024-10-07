"use client";
import Image from "next/image";
import sol from "/public/assests/sol.svg";
import arrow from "/public/assests/buyarrow.svg";
import cart from "/public/assests/shopping-cart-01.svg";
import { useState } from "react";
import DetailModal from "../detailModal";
import Link from "next/link";
import { items, sizes } from "../data";
import "../styles.css";
import Navbar from "../../components/Homepage/Navbar2";
import MobileNav from "../../components/Homepage/MobileNav2";
import { useCart } from '../context/CartContext'; // Ensure you have access to your CartContext

interface Props {
  params: any;
}

export default function ProductDetails({ params }: Props) {
  const { addToCart } = useCart(); // Use the addToCart function from your CartContext
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1); // Track quantity state
  const { id } = params;

  const product = items.find(
    (prodct) =>
      prodct.name.trim().toLowerCase().split(" ").join("-") === `${id}`
  );

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1)); // Ensure it doesn't go below 1
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity }); // Add product to cart with the specified quantity
  };

  return (
    <section className="bg-black w-full min-h-[100vh] text-white">
      <Navbar />
      <MobileNav />
      {product ? (
        <div className="max-w-[1440px] px-4 md:px-8 flex flex-col mx-auto">
          {/* ... other code ... */}
          <div>
            <p className="text-[13px] mb-2 text-white/70">Quantity</p>
            <div className="w-3/5 flex items-center justify-between gap-x-6 bg-zinc-800 rounded-md">
              <button
                className="w-14 h-10 rounded-md hover:border hover:border-luxela_lilac text-2xl"
                onClick={decrementQuantity}
              >
                -
              </button>
              <button className="w-14 h-10 rounded-md text-sm">
                {quantity}
              </button>
              <button
                className="w-14 h-10 rounded-md hover:border hover:border-luxela_lilac text-2xl"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
          </div>
          {/* ... other code ... */}
          <div className="grid max-sm:gap-y-8 sm:grid-cols-2 gap-x-8 mt-8">
            <Link href={"/cart/checkout"}>
              <button
                className="flex items-center justify-center gap-x-2 font-spaceGrotesk font-medium w-full h-10
                  bg-gradient-to-b from-luxela_lilac via-luxela_purple2 to-luxela_purple rounded-lg text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac"
                onClick={handleAddToCart} // Add to cart on button click
              >
                Buy now{" "}
                <span>
                  <Image
                    className="w-5 fill-white text-white"
                    src={arrow}
                    alt="arrow"
                  />
                </span>
              </button>
            </Link>
            <button
              className="flex items-center justify-center gap-x-2 font-spaceGrotesk font-medium w-full h-10 bg-zinc-800
                rounded-lg text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac"
              onClick={handleAddToCart} // Add to cart on button click
            >
              Add to cart{" "}
              <span>
                <Image
                  className="w-5 fill-white text-white"
                  src={cart}
                  alt="cart"
                />
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center p-20 bg-luxela-lilac">
        <p className="capitalize text-white text-3xl">Product not found</p>
        </div>
      )}

      {open && <DetailModal open={open} setOpen={setOpen} />}
    </section>
  );
}
