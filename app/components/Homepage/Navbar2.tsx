import React from "react";

import Logo from "/public/assests/Luxela white logo 1.svg";
import Avartar from "/public/assests/sparkles.svg";
import Image from "next/image";
import SearchIcon from "../icons/SearchIcon";
import NotificatIcon from "../icons/NotificationIcon";
import ShoppingCartIcon from "../icons/ShoppingCart";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="max-w-[1440px] border-b-[#2B2B2B] border-b border-solid  px-[40px] py-[18px] mx-auto hidden lg:block">
        <div className="flex justify-between items-center">
          <div>
            <ul className="font-spaceGrotesk text-[14px] text-white flex gap-[24px]">
              <Link href="/Explore">
                <li>Explore</li>
              </Link>
              <li>Brands</li>
              <li>Limited Offers</li>
            </ul>
          </div>
          <Link href="/Home" >
            <Image src={Logo} alt="logo" />
          </Link>

          <div className="flex items-center  gap-[20px]">
            <div className="bg-[#141414] border border-solid border-[#212121] rounded-[6px] p-[12px]">
              <SearchIcon />
            </div>
            <div className="bg-[#141414] border border-solid border-[#212121] rounded-[6px] p-[12px]">
              <NotificatIcon />
            </div>

            <div className="bg-[#141414] border border-solid border-[#212121] rounded-[6px] p-[12px]">
              <ShoppingCartIcon />
            </div>

            <div className="flex items-center bg-[#141414] border border-solid border-[#212121] rounded-[6px] py-[6px] px-[16px] gap-[10px] ">
              <Image src={Avartar} alt="user image" />
              <p className="text-[14px] text-white font-medium font-spaceGrotesk">
                jondoe54
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
