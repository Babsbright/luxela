"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "/public/assests/Luxela white logo 1.svg";
import HamburgerIcon from "../icons/Hamburger";
import CancelIcon from "../icons/CancelIcon";
import { ShopCartIcon } from "../icons";
import LinkArrowIcon from "../icons/LinkArrow";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className="w-full lg:hidden block py-[20px] px-[20px]">
        <div className="flex items-center justify-between">
          <div className="w-[132px] h-[21.54px] mx-auto">
            <Image src={Logo} alt="logo" />
          </div>
          <div onClick={toggleMenu}>
            {isOpen ? <CancelIcon /> : <HamburgerIcon />}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-[80px] inset-0  bg-[#0E0E0E] border-none z-50 px-[20px]">
          <nav className="mt-[40px] px-[20px]">
            <ul className="space-y-[33px] font-spaceGrotesk text-white text-[18px]">
              <li className="flex justify-between items-center">
                <span>About Us</span>
                <LinkArrowIcon />
              </li>
              <li className="flex justify-between items-center">
                <span>Featured Brands</span>
                <LinkArrowIcon />
              </li>
              <li className="flex justify-between items-center">
                <span>Features</span>
                <LinkArrowIcon />
              </li>
              <li className="flex justify-between items-center">
                <span>How to?</span>
                <LinkArrowIcon />
              </li>
            </ul>
          </nav>

          {/* Shop Now Button */}
          <div className="absolute bottom-10 left-0 w-full px-6">
            <button className="font-spaceGrotesk font-medium w-full h-[44px] bg-gradient-to-b from-luxela_lilac via-luxela_purple2 to-luxela_purple rounded-lg text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac flex items-center justify-center">
              Shop now
              <ShopCartIcon className="ml-2" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
