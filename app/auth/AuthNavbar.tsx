import Image from "next/image";
import React from "react";
import Logo from "/public/assests/Luxela white logo 1.svg";
// import { ShopCartIcon } from "../components/icons";

const AuthNavbar = () => {
  return (
    <div className="w-full bg-transparent">
      <div className="flex items-center flex-row-reverse lg:flex-row justify-between max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[40px] py-[18px] text-white">
          <ul className="lg:w-1/3 flex font-spaceGrotesk gap-4 lg:gap-[36px] text-[14px]">
            <li>Explore</li>
            <li>Brands</li>
            <li>Limited offers</li>
          </ul>

          <div className="lg:w-1/3 flex items-center justify-center">
            <Image className="max-sm:w-40" src={Logo} alt="logo" />
          </div>

        <div className="w-1/3 hidden lg:block"></div>

        {/* <div className="flex gap-[8px] bg-[#000000]/20 border-[#FFFFFF]/10 py-[12.5px] rounded-[4px] px-[10px] border border-solid w-[159px] h-[42px] items-center justify-center">
          <button className="text-[14px] font-spaceGrotesk font-medium">
            Shop now
          </button>
          <ShopCartIcon />
        </div> */}
        
      </div>
      <hr className="w-full h-[0.2px] border border-gray-700/50" />
    </div>
  );
};

export default AuthNavbar;
