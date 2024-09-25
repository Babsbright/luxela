"use client"
import React from "react";
import Logo from "/public/assests/Luxela white logo 1.svg";
import BigLogo from "/public/assests/LUXELA.svg";
import Image from "next/image";
import { ArrowRightIcon } from "../icons";
import { usePathname } from "next/navigation"
import { disableFooter } from "../../utils/disableFooter"

const Footer = () => {
  const path = usePathname()
  return (
    <>
    {!disableFooter.includes(path) && (
    <div className="p-[60px] bg-[#1A1A1A]">
      <div className="flex justify-between">
        <div className="w-[330px]">
          <Image src={Logo} alt="logo" />
          <p className="mt-[60.36px] font-spaceGrotesk text-[#BFBFBF]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut{" "}
          </p>
          <div className="mt-[40px]">
            <div className="flex items-center gap-[4px]">
              <p className="text-[#BFBFBF] font-spaceGrotesk">luxela.com</p>
              <ArrowRightIcon />
            </div>
            <hr className="w-[106px]" />
          </div>
        </div>

        <div>
          <h2 className="text-[14px] mt-[80px] lg:mt-0 font-spaceGrotesk text-white">
            Subscribe to our newsletter
          </h2>
          <form className="relative bg-[#2B2B2B] rounded-[8px] lg:w-[580px] py-[17px] mt-[10px] ">
            <input
              type="text"
              placeholder="Your email address"
              className="focus:outline-none bg-[#2B2B2B] text-white placeholder:font-spaceGrotesk placeholder:text-[#ACACAC] px-[16px] "
            />
            <button
              type="submit"
              className="absolute right-2 bottom-2.5 font-spaceGrotesk font-medium w-[106px] h-[36px] bg-gradient-to-b from-luxela_lilac via-luxela_purple2 to-luxela_purple rounded-lg text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac"
            >
              Subscribe
            </button>
          </form>

          <div className="flex gap-[80px] mt-[80px] lg:mt-[60px]">
            <div className="lg:flex lg:gap-[80px]">
              <div>
                <h2 className="font-aeonik text-[18px] text-white">LUXELA</h2>
                <div className="text-[#BFBFBF] mt-[24px] space-y-[16px] font-spaceGrotesk">
                  <p>About Us</p>
                  <p>Features</p>
                  <p>Special Brands</p>
                  <p>How to Luxela</p>
                  <p>FAQs</p>
                </div>
              </div>
              <div className="mt-[80px] lg:mt-0">
                <h2 className="font-aeonik text-[18px] text-white">LEGAL</h2>
                <div className="text-[#BFBFBF] mt-[24px] space-y-[16px] font-spaceGrotesk">
                  <p>Privacy Policy</p>
                  <p>Terms of Agreement</p>
                  <p>Refunds</p>
                </div>
              </div>
            </div>

            <div >
              <h2 className="font-aeonik text-[18px] text-white">CONTACT US</h2>
              <div className="text-[#BFBFBF] mt-[24px] space-y-[16px] font-spaceGrotesk">
                <p>Twitter/X</p>
                <p>Instagram</p>
                <p>Telegram</p>
                <p>Partner with Luxela</p>
                <p>I have a Brand</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center flex justify-center mt-[80px] lg:mt-[125px]">
        <Image src={BigLogo} alt="big logo" />
      </div>
    </div>
  )}
</>
  );
  
};

export default Footer;
