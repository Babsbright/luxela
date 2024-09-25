import React from "react";
import Navbar from "./Navbar";
import Button from "../Button/button";
import Image from "next/image";
import Product from "/public/assests/image 1 (1).svg";
import SolanaImage from "/public/assests/SOL 1.svg";
import MobileNav from "./MobileNav";

const products = [
  {
    marginLeft: "-5rem",
    marginTop: "0",
    brand: "GUCCI",
    name: "Layla Dress",
    price: "0.25",
    usdPrice: "$40.50",
  },
  {
    marginLeft: "0",
    marginTop: "72px",
    brand: "GUCCI",
    name: "Layla Dress",
    price: "0.25",
    usdPrice: "$40.50",
  },
  {
    marginLeft: "0",
    marginTop: "188px",
    brand: "GUCCI",
    name: "Layla Dress",
    price: "0.25",
    usdPrice: "$40.50",
  },
  {
    marginLeft: "0",
    marginTop: "72px",
    brand: "GUCCI",
    name: "Layla Dress",
    price: "0.25",
    usdPrice: "$40.50",
  },
  {
    marginLeft: "0",
    marginTop: "0",
    marginRight: "-5.5rem",
    brand: "GUCCI",
    name: "Layla Dress",
    price: "0.25",
    usdPrice: "$40.50",
  },
];

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-mobile-background lg:bg-hero-pattern bg-cover overflow-hidden ">
      <div className="lg:max-w-[1440px] lg:mx-auto w-full">
        <Navbar />
        <MobileNav/>
      </div>

      <div className="mt-[72px] hidden lg:flex flex-col justify-center">
        <div className="border border-solid mx-auto border-[#B8A3E1] text-[#FEC5F3] rounded-[34px] w-auto bg-[#1C1111] py-[8px] px-[20px]">
          <p className="font-spaceGrotesk text-[14px] whitespace-nowrap">
            Pay With Crypto
          </p>
        </div>
        <div className="mx-auto text-center mt-[24px] text-white">
          <div className="text-[48px] font-helvtica font-medium leading-[120%] tracking-[6%]">
            <h1>
              Empowering <span className="text-luxela_purple">Fashion</span>,
            </h1>
            <h1>Decentralized and Authentic</h1>
          </div>
          <div className="mt-[16px] font-spaceGrotesk">
            <p>
              Connecting independent fashion brands to a global audience with
              transparency, sustainability, and a
            </p>
            <p>commitment to ethical practices</p>
          </div>
          <div className="max-w-[230px] mx-auto">
            <Button>Shop Now</Button>
          </div>
        </div>
      </div>

      <div className="mt-[56px] hidden max-w-[1440px] mx-auto lg:flex gap-[36px]">
        {products.map((product, index) => (
          <div
            key={index}
            className={`max-w-[297px] h-[316px] bg-[#16131D] rounded-[16px] ${
              product.marginTop
            } ${product.marginLeft || ""} ${product.marginRight || ""}`}
            style={{
              marginTop: product.marginTop,
              marginLeft: product.marginLeft,
              marginRight: product.marginRight,
            }}
          >
            <div className="relative mt-[19px] bg-[#000000]/20">
              <Image src={Product} alt="product image" />
              <div className="absolute bottom-4 p-[12px] left-0 right-0 mx-auto max-w-[265px] w-full h-[65px] z-10 bg-[#120F17]/60">
                <div className="flex justify-between items-center font-spaceGrotesk">
                  <div>
                    <h2 className="text-white">{product.name}</h2>
                    <p className="text-[#595959]">{product.brand}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-[6px]">
                      <p className="text-white">{product.price}</p>
                      <Image src={SolanaImage} alt="solana image" />
                    </div>
                    <p className="text-[#595959]">({product.usdPrice})</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
