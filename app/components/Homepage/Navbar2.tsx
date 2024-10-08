"use client";
import React from "react";
import { useCart } from "../../context/CartContext";
import Logo from "/public/assests/Luxela white logo 1.svg";
import Avartar from "/public/assests/sparkles.svg";
import Image from "next/image";
import SearchIcon from "../icons/SearchIcon";
import NotificatIcon from "../icons/NotificationIcon";
import ShoppingCartIcon from "../icons/ShoppingCart";
import Link from "next/link";

const Navbar = () => {
  const { cartItems } = useCart(); // Access cart items from context
  return (
    <>
      <div className="max-w-[1440px] border-b-[#2B2B2B] border-b border-solid  px-[40px] py-[18px] mx-auto hidden lg:block">
        <div className="flex justify-between items-center">
          <div>
            <ul className="font-spaceGrotesk text-[14px] text-white flex gap-[24px]">
              <Link href="/Explore">
                <li>Explore</li>
              </Link>
              <Link href={"/coming-soon"}>
                {" "}
                <li>Brands</li>
              </Link>
              <Link href={"/coming-soon"}>
                {" "}
                <li>Limited Offers</li>
              </Link>
            </ul>
          </div>
          <Link href="/">
            <Image src={Logo} alt="logo" />
          </Link>

          <div className="flex items-center  gap-[20px]">
            <Link href={"/coming-soon"}>
              <div className="bg-[#141414] border cursor-pointer border-solid border-[#212121] rounded-[6px] p-[12px]">
                <SearchIcon />
              </div>
            </Link>

            <Link href={"/coming-soon"}>
              <div className="bg-[#141414] cursor-pointer border border-solid border-[#212121] rounded-[6px] p-[12px]">
                <NotificatIcon />
              </div>
            </Link>

            <Link href="/cart">
              <div
                dir="rtl"
                className="bg-[#141414] cursor-pointer relative border border-solid border-[#212121] rounded-[6px] p-[12px]"
              >
                <ShoppingCartIcon />{" "}
                <span className="text-white font-bold text-[12px] absolute top-0 start-0">
                  {cartItems.length}
                </span>
              </div>
            </Link>
            <Link href={"/coming-soon"}>
              <div className="flex items-center cursor-pointer bg-[#141414] border border-solid border-[#212121] rounded-[6px] py-[6px] px-[16px] gap-[10px] ">
                <Image src={Avartar} alt="user image" />
                <p className="text-[14px] text-white font-medium font-spaceGrotesk">
                  jondoe54
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
