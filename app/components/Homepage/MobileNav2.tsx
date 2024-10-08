"use client"
import React from "react";
import ShoppingCartIcon from "../icons/ShoppingCart";
import SearchIcon from "../icons/SearchIcon";
import HamburgerIcon from "../icons/Hamburger";
import Toggle from "./Toggle"
import Image from "next/image";
import Logo from "/public/assests/Luxela white logo 1.svg";
import Link from "next/link";
import { useCart } from "../../context/CartContext";

const MobileNav = () => {
  const { cartItems } = useCart(); // Access cart items from context

  return (
    <div className="lg:hidden block py-[15px] px-[10px]">
      <div className="flex justify-between items-center">
        <Link href="/cart">
          <div
            dir="rtl"
            className="bg-[#141414] cursor-pointer relative border border-solid border-[#212121] rounded-[6px] p-2"
          >
            <ShoppingCartIcon />{" "}
            <span className="text-white font-bold text-[12px] absolute top-0 start-0">
              {cartItems.length}
            </span>
          </div>
        </Link>

        <Link href={"/Home"}>
          <div className="">
            <Image
              src={Logo}
              alt="logo"
              className="w-[132px] h-[22px] mx-auto"
            />
          </div>
        </Link>

        <div className="flex items-center gap-[20px] cursor-pointer">
          {/* <SearchIcon /> */}
          <Toggle />
          {/* <HamburgerIcon /> */}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
