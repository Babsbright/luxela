import Image from "next/image";
import React from "react";

import Logo from "/public/assests/Luxela white logo 1.svg";
import { ShopCartIcon } from "../icons";

const Navbar = () => {
  return (
    <div className="w-full bg-transparent">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto px-[40px] py-[18px] text-white">
        <div className="flex items-center gap-[162px]">
          <ul className="flex font-spaceGrotesk gap-[36px] text-[14px] font-light">
            <li>About Us</li>
            <li>Featured Brands</li>
            <li>Features</li>
            <li>How to?</li>
          </ul>

          <div className="">
            <Image src={Logo} alt="logo" />
          </div>
        </div>

        <div className="flex gap-[8px] bg-[#000000]/20 border-[#FFFFFF]/10 py-[12.5px] rounded-[4px] px-[10px] border border-solid w-[159px] h-[42px] items-center justify-center">
          <button className="text-[14px] font-spaceGrotesk font-medium">
            Shop now
          </button>
          <ShopCartIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
