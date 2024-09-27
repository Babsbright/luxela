import React from "react";
import ShoppingCartIcon from "../icons/ShoppingCart";
import SearchIcon from "../icons/SearchIcon";
import HamburgerIcon from "../icons/Hamburger";
import Image from "next/image";
import Logo from "/public/assests/Luxela white logo 1.svg";

const MobileNav = () => {
  return (
    <div className="lg:hidden block py-[15px] px-[20px]">
      <div className="flex justify-between items-center">
        <div>
          <ShoppingCartIcon />
        </div>
        <div className="">
          <Image src={Logo} alt="logo" className="w-[132px] h-[22px] mx-auto" />
        </div>
        <div className="flex items-center gap-[20px]">
          <SearchIcon />
          <HamburgerIcon />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
