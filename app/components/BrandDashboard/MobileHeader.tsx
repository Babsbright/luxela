"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "/public/assests/Luxela white logo 1.svg";
import HamburgerIcon from "../icons/Hamburger";
import CancelIcon from "../icons/CancelIcon";
import LinkArrowIcon from "../icons/LinkArrow";
import SearchIcon from "../icons/SearchIcon";
import Link from "next/link";

const MobileHeader = () => {
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

  const [brandimage, setBrandImage] = useState("");
  const [brandname, setBrandName] = useState("");
  useEffect(() => {
    setBrandImage(localStorage.getItem("brand-image"));
    setBrandName(localStorage.getItem("brandname"));
  }, []);

  return (
    <>
      <div className="w-full py-[20px] px-[16px]  overflow-y-auto ">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer" onClick={toggleMenu}>
            {isOpen ? <CancelIcon /> : <HamburgerIcon />}
          </div>
          <div className="w-[132px] h-[21.54px] mx-auto">
            <Image src={Logo} alt="logo" />
          </div>
          <Image
            src={brandimage}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full w-10 h-10"
          />
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-[80px] overflow-y-auto  scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 inset-0  bg-[#0E0E0E] border-none z-50">
          <div className="px-[16px]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-[#1A1A1A] border border-solid focus:outline-none border-[#2B2B2B] font-spaceGrotesk py-2 pl-10 pr-4 rounded-lg text-[#b3b3b3]"
              />
              <SearchIcon className="absolute top-2.5 left-2 w-5 h-5 text-[#b3b3b3]" />
            </div>
          </div>
          <nav className="px-[16px]">
            <ul className="font-spaceGrotesk text-white text-[14px]">
              <li className="flex py-[18px] justify-between items-center">
                <span>Dashboard</span>
                <LinkArrowIcon />
              </li>
              <li className="flex py-[18px] justify-between items-center">
                <span>Sales</span>
                <LinkArrowIcon />
              </li>
              <li className="flex py-[18px] justify-between items-center">
                <span>My listings</span>
                <LinkArrowIcon />
              </li>
              <Link
                href="/Brand/Newlisting/single"
                className="flex py-[18px] justify-between items-center"
              >
                <span>New listing</span>
                <LinkArrowIcon />
              </Link>
              <li className="flex py-[18px] justify-between items-center">
                <span>Notifications</span>
                <span className="ml-auto text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </li>
              <li className="flex py-[18px] justify-between items-center">
                <span>Pending orders</span>
                <span className="ml-auto text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  10
                </span>
              </li>
              <li className="flex py-[18px] justify-between items-center">
                <span>Reports</span>
                <LinkArrowIcon />
              </li>
            </ul>
          </nav>

          <div className="mt-[82px]">
            <nav className="px-[16px]">
              <ul className="font-spaceGrotesk text-white text-[14px]">
                <li className="flex py-[18px] justify-between items-center">
                  <span>Contact support</span>
                  <LinkArrowIcon />
                </li>
                <li className="flex py-[18px] justify-between items-center">
                  <span>Settings</span>
                  <LinkArrowIcon />
                </li>
              </ul>
            </nav>
            <div className="px-[16px]">
              <Link href={"/coming-soon"}>
                <li className="flex justify-between mt-[68px]  border border-solid border-[#2B2B2B] bg-[#212121] p-[6px] rounded-[8px] items-center">
                  <div className="flex items-center gap-x-4">
                      <img
                        src={brandimage}
                        className="rounded-full w-8 h-8"
                        alt="user image"
                      />
                   
                    <div className="flex flex-col items-start">

                    <p className="text-sm text-white font-medium font-spaceGrotesk capitalize">
                      {brandname}{" "}
                    </p>
                       <p className="text-xs text-[#b3b3b3]">Seller</p>
                    </div>
                  </div>
                  <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.84 0.931297L6.38588 6.38545C6.33523 6.43616 6.27507 6.47639 6.20886 6.50384C6.14265 6.53129 6.07168 6.54541 6 6.54541C5.92832 6.54541 5.85735 6.53129 5.79114 6.50384C5.72493 6.47639 5.66477 6.43616 5.61412 6.38545L0.159964 0.931297C0.0835992 0.855018 0.0315843 0.757796 0.0105038 0.651939C-0.0105768 0.546082 0.000224981 0.43635 0.0415416 0.336636C0.0828581 0.236921 0.152832 0.151708 0.242604 0.0917825C0.332376 0.0318573 0.43791 -8.47726e-05 0.545845 1.6897e-07H11.4542C11.5621 -8.47726e-05 11.6676 0.0318573 11.7574 0.0917825C11.8472 0.151708 11.9171 0.236921 11.9585 0.336636C11.9998 0.43635 12.0106 0.546082 11.9895 0.651939C11.9684 0.757796 11.9164 0.855018 11.84 0.931297Z"
                      fill="#8151FD"
                    />
                  </svg>
                </li>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
