"use client";
import Image from "next/image";
import arrow from "/public/assests/buyarrow.svg";
import cart from "/public/assests/shopping-cart-01.svg";
import { useState, useEffect } from "react";
import DetailModal from "../detailModal";
import Link from "next/link";
import { items, sizes } from "../data";
import "../styles.css";
import Navbar from "../../components/Homepage/Navbar2";
import MobileNav from "../../components/Homepage/MobileNav2";
import { useCart } from "../../context/CartContext"; // Ensure you have access to your CartContext
import sol from "/public/assests/sol.svg";
import { ToastContainer, toast } from "react-toastify";

interface Props {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  params: any;
}

export default function ProductDetails({ params }: Props) {
  const { addToCart } = useCart(); // Use the addToCart function from your CartContext
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1); // Track quantity state
  const { id } = params;
  const [details, setDetails] = useState({});

  const product = items.find(
    (prodct) =>
      prodct.name.trim().toLowerCase().split(" ").join("-") === `${id}`
  );

  // eslint-disable-next-line
  useEffect(() => {
    setDetails((prev) => ({ ...prev, product }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // Ensure it doesn't go below 1
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity }); // Add product to cart with the specified quantity
  };

  const handleNotification = () => {
    handleAddToCart();
    toast.success("Product added to cart", {
      theme: "colored",
      autoClose: 2000,
    });
  };

  return (
    <section className="bg-black w-full min-h-[100vh] text-white">
      <Navbar />
      <MobileNav />
      {product ? (
        <div className="max-w-[1440px] px-4 md:px-8 flex flex-col mx-auto">
          {/* ... other code ... */}

          <div>
            <p className=" font-spaceGrotesk my-10 text-xs flex gap-x-3 text-white/60 cursor-pointer">
              Home <span>&gt;</span>{" "}
              <Link href={"/"}>
                <span className="text-white/60">{product.brand}</span>
                <span>&gt;</span>
              </Link>
              <span className="text-white">{product.name}</span>
            </p>
          </div>
          <section className="font-spaceGrotesk flex flex-col lg:flex-row gap-x-8 mb-4">
            <section className="w-full rounded-md">
              <div className="bg-zinc-900 w-full p-6 rounded-md sm:max-lg:flex sm:max-lg:justify-center">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full sm:max-lg:w-1/2 h-auto"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                <Image
                  className="w-28 bg-zinc-900 rounded-md"
                  width={300}
                  height={0}
                  src={product.image}
                  alt="baz"
                />
                <Image
                  width={300}
                  height={0}
                  className="w-28 bg-zinc-900 rounded-md"
                  src={product.image}
                  alt="baz"
                />
                <Image
                  width={300}
                  height={0}
                  className="w-28 bg-zinc-900 rounded-md"
                  src={product.image}
                  alt="baz"
                />
              </div>
            </section>

            <section className="bg-zinc-900 w-full p-6 rounded-md max-lg:mt-14">
              <div className="flex justify-between items-center mt-2">
                <div>
                  <h1>{product.name}</h1>
                  <p className="text-xs text-white/70 my-1">{product.brand}</p>
                </div>
                <Link href={"/coming-soon"}>
                  <button className="px-2 py-1 hover:bg-luxela_purple hover:text-white text-luxela_lilac rounded-lg bg-luxela_lilac/30 text-xs">
                    View collection <span className="ml-2 font-bold">&gt;</span>
                  </button>
                </Link>
              </div>{" "}
              <hr className="my-3 w-full h-[0.2px] border border-gray-700/50" />
              <div className="flex gap-x-2 font-spaceGrotesk items-center">
                <span className="text-lg font-medium">{product.price}</span>
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
              <p className="text-[13px] mb-2 text-white/70">Select size</p>{" "}
              <div
                className="grid grid-cols-3 sm:grid-cols-5 text-sm font-spaceGrotesk"
                id="radios"
              >
                {sizes.map((item, index) => {
                  return (
                    <div key={index}>
                      <input
                        type="radio"
                        name="rGroup"
                        value={item.value}
                        id={item.id}
                      />
                      <label
                        className="check flex items-center justify-center w-14 h-10 rounded-md hover:border hover:border-luxela_lilac text-xs"
                        htmlFor={item.id}
                      >
                        {item.name}
                      </label>
                    </div>
                  );
                })}
              </div>
              <hr className="my-3 w-full h-[0.2px] border border-gray-700/50" />
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
                  onClick={handleNotification}
                  // Add to cart on button click
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
            </section>
          </section>

          {/* SIMILAR ITEMS */}

          <section className="font-spaceGrotesk my-20">
            <p className="text-sm mb-4">Similar items in this collection</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  place-items-center gap-6">
              {items.map((item, index) => {
                return (
                  <div key={index} className="bg-zinc-900 rounded-md p-6">
                    <div>
                      <div className="rounded-sm p-2">
                        <Image
                          width={300}
                          height={0}
                          src={item.image}
                          alt="product"
                        />
                      </div>

                      <div className="flex justify-between items-center text-sm">
                        <p>{item.name}</p>
                        <p className="flex items-center text-xs gap-x-2">
                          {item.price}{" "}
                          <span>
                            <Image className="w-5 h-5" src={sol} alt="sol" />
                          </span>
                        </p>
                      </div>
                      <p className="text-xs mt-2">Baz Fashion</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      ) : (
        <div className="flex flex-col justify-center p-20 bg-luxela-lilac">
          <p className="capitalize text-white text-3xl">Product not found</p>
        </div>
      )}
      {open && <DetailModal open={open} setOpen={setOpen} products={details} />}
      <ToastContainer
        progressClassName="toastProgress"
        bodyClassName="toastBody"
      />
    </section>
  );
}
