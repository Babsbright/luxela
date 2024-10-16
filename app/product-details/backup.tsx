// "use client";
// import Image from "next/image";
// import productBaz from "@/public/assests/product_baz.svg";
// import sol from "/public/assests/sol.svg";
// import arrow from "/public/assests/buyarrow.svg";
// import cart from "/public/assests/shopping-cart-01.svg";
// import { useState } from "react";
// import DetailModal from "./detailModal";
// import Link from "next/link";
// import { items, sizes } from "./data";
// import "./styles.css";
// import Navbar from "../components/Homepage/Navbar2";
// import MobileNav from "../components/Homepage/MobileNav2";

// export default function ProductDetails() {
//   const [open, setOpen] = useState(false);

//   return (
//     <section className="bg-black w-full min-h-[100vh] text-white">
//       <Navbar />
//       <MobileNav />
//       <div className="max-w-[1440px] px-4 md:px-8 flex flex-col mx-auto">
//         <div>
//           <p className=" font-spaceGrotesk my-10 text-xs flex gap-x-3 text-white/60">
//             Home <span>&gt;</span>{" "}
//             <span className="text-white/60">BAZ Fashion</span>
//             <span>&gt;</span>
//             <span className="text-white">Jamie Loafers</span>
//           </p>
//         </div>

//         <section className="font-spaceGrotesk flex flex-col lg:flex-row gap-x-8 mb-4">
//           <section className="w-full rounded-md">
//             <div className="bg-zinc-900 w-full p-6 rounded-md">
//               <Image className="" src={productBaz} alt="baz" />
//             </div>
//             <div className="flex justify-start items-start gap-x-3 mt-4">
//               <Image
//                 className="w-28 bg-zinc-900 rounded-md"
//                 src={productBaz}
//                 alt="baz"
//               />
//               <Image
//                 className="w-28 bg-zinc-900 rounded-md"
//                 src={productBaz}
//                 alt="baz"
//               />
//               <Image
//                 className="w-28 bg-zinc-900 rounded-md"
//                 src={productBaz}
//                 alt="baz"
//               />
//             </div>
//           </section>

//           <section className="bg-zinc-900 w-full p-6 rounded-md">
//             <div className="flex justify-between items-center mt-2">
//               <div>
//                 <h1>B/W Wrangler</h1>
//                 <p className="text-xs text-white/70 my-1">BAZ Fashion</p>
//               </div>
//               <button className="px-2 py-1 hover:bg-luxela_purple hover:text-white text-luxela_lilac rounded-lg bg-luxela_lilac/30 text-xs">
//                 View collection <span className="ml-2 font-bold">&gt;</span>
//               </button>
//             </div>{" "}
//             <hr className="my-3 w-full h-[0.2px] border border-gray-700/50" />
//             <div className="flex gap-x-2 font-spaceGrotesk items-center">
//               <span className="text-lg font-medium">0.06</span>
//               <span>
//                 {" "}
//                 <Image className="w-5 h-5" src={sol} alt="sol" />
//               </span>{" "}
//               <sub className="text-white/70 mt-2">$8.75</sub>
//             </div>
//             <hr className="my-3 w-full h-[0.2px] border border-gray-700/50" />
//             <div className="flex justify-between items-center">
//               <p className="text-sm text-white/70">Item description</p>
//               <button
//                 className="px-2 py-1 hover:bg-luxela_purple hover:text-white text-luxela_lilac rounded-lg bg-luxela_lilac/30 text-xs"
//                 onClick={() => {
//                   setOpen(!open);
//                 }}
//               >
//                 Read more <span className="ml-2 font-bold">&gt;</span>
//               </button>
//             </div>{" "}
//             <hr className="my-3 w-full h-[0.2px] border border-gray-700/50" />
//             <p className="text-[13px] mb-2 text-white/70">Select size</p>{" "}
//             <div className="flex gap-x-3 text-sm font-spaceGrotesk" id="radios">
//               {sizes.map((item, index) => {
//                 return (
//                   <div key={index}>
//                     <input
//                       type="radio"
//                       name="rGroup"
//                       value={item.value}
//                       id={item.id}
//                     />
//                     <label
//                       className="check flex items-center justify-center w-14 h-10 rounded-md hover:border hover:border-luxela_lilac text-xs"
//                       htmlFor={item.id}
//                     >
//                       {item.name}
//                     </label>
//                   </div>
//                 );
//               })}
//             </div>
//             <hr className="my-3 w-full h-[0.2px] border border-gray-700/50" />
//             <div>
//               <p className="text-[13px] mb-2 text-white/70">Quantity</p>
//               <div className=" w-3/5 flex items-center justify-between gap-x-6 bg-zinc-800 rounded-md">
//                 <button className="w-14 h-10 rounded-md hover:border hover:border-luxela_lilac text-2xl">
//                   -
//                 </button>
//                 <button disabled className="w-14 h-10 rounded-md text-sm">
//                   1
//                 </button>
//                 <button className="w-14 h-10 rounded-md hover:border hover:border-luxela_lilac text-2xl">
//                   +
//                 </button>
//               </div>
//             </div>
//             <hr className="my-3 w-full h-[0.2px] border border-gray-700/50" />
//             <div>
//               <p className="text-[13px] mb-2 text-white/70">Item details</p>
//               <div className="flex justify-between items-center">
//                 <p className="text-xs mb-2 text-white/70">Category</p>
//                 <h2 className="text-[13px] mb-2 text-white/70">
//                   Luxury, <span>Casual,</span> <span>Male</span>
//                 </h2>
//               </div>
//             </div>
//             <hr className="my-3 w-full h-[0.2px] border border-gray-700/50" />
//             <div className="grid max-sm:gap-y-8 sm:grid-cols-2 gap-x-8 mt-8">
//               <Link href={"/cart"}>
//                 <button
//                   className="flex items-center justify-center  gap-x-2 font-spaceGrotesk font-medium w-full h-10
//                 bg-gradient-to-b from-luxela_lilac via-luxela_purple2 to-luxela_purple rounded-lg text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac"
//                 >
//                   Buy now{" "}
//                   <span>
//                     <Image
//                       className="w-5 fill-white text-white"
//                       src={arrow}
//                       alt="arrow"
//                     ></Image>
//                   </span>
//                 </button>
//               </Link>

//               <button
//                 className="flex items-center justify-center  gap-x-2 font-spaceGrotesk font-medium w-full h-10 bg-zinc-800
//                    rounded-lg text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac"
//               >
//                 Add to cart{" "}
//                 <span>
//                   <Image
//                     className="w-5 fill-white text-white"
//                     src={cart}
//                     alt="cart"
//                   ></Image>
//                 </span>
//               </button>
//             </div>
//           </section>
//         </section>

//         {/* SIMILAR ITEMS */}

//         <section className="font-spaceGrotesk my-20">
//           <p className="text-sm mb-4">Similar items in this collection</p>
//           <div className="flex flex-col lg:flex-row max-lg:justify-center justify-between items-center max-lg:gap-y-10 gap-x-6">
//             {items.map((item, index) => {
//               return (
//                 <div key={index} className="bg-zinc-900 rounded-md p-6">
//                   <div>
//                     <div className="rounded-sm p-2">
//                       <Image
//                         width={300}
//                         height={0}
//                         src={item.image}
//                         alt="product"
//                       />
//                     </div>

//                     <div className="flex justify-between items-center text-sm">
//                       <p>{item.name}</p>
//                       <p className="flex items-center text-xs gap-x-2">
//                         {item.price}{" "}
//                         <span>
//                           <Image className="w-5 h-5" src={sol} alt="sol" />
//                         </span>
//                       </p>
//                     </div>
//                     <p className="text-xs mt-2">Baz Fashion</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </section>
//       </div>

//       {/* DETAIL MODAL */}
//       {open && <DetailModal open={open} setOpen={setOpen} />}
//     </section>
//   );
// }


