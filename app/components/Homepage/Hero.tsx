import React from "react";
import Navbar from "./Navbar";
import Button from "../Button/button";
import Image from "next/image";
import TrackPants from "/public/assests/Frame 2087327429-1.svg"
import Dress2 from "/public/assests/Frame 2087327428.svg"
import Dress3 from "/public/assests/Frame 2087327427.svg"
// import SolanaImage from "/public/assests/SOL 1.svg";
import MobileNav from "./MobileNav";
import Link from "next/link";

const MiddleSVG = () => (
  <svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L24.9016 15.1684C29.2864 17.6897 34.6902 17.6498 39.0373 15.064L61 2" stroke="url(#paint0_linear_402_1996)" stroke-width="4" stroke-linecap="round"/>
    <path d="M3 14.75L25.9016 27.9184C30.2864 30.4397 35.6902 30.3998 40.0373 27.814L62 14.75" stroke="url(#paint1_linear_402_1996)" stroke-width="4" stroke-linecap="round"/>
    <defs>
      <linearGradient id="paint0_linear_402_1996" x1="0" y1="10.75" x2="61" y2="10.625" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0E0E0E"/>
        <stop offset="0.495537" stop-color="#8350E1" stop-opacity="0.6"/>
        <stop offset="1" stop-color="#0E0E0E"/>
      </linearGradient>
      <linearGradient id="paint1_linear_402_1996" x1="1" y1="23.5" x2="62" y2="23.375" gradientUnits="userSpaceOnUse">
        <stop offset="0.184948" stop-color="#0E0E0E"/>
        <stop offset="0.495537" stop-color="#8350E1" stop-opacity="0.6"/>
        <stop offset="0.786353" stop-color="#0E0E0E"/>
      </linearGradient>
    </defs>
  </svg>
);
const products = [
  {
    image: TrackPants,
    marginLeft: "-5rem",
    marginTop: "0",
    name: "Track Pants",
    price: "0.06"
  },

  {
    image: Dress2,
    marginLeft: "0",
    marginTop: "72px",
    name: "Track Pants",
    price: "0.06"
  },

  {
    image: Dress3,
    marginLeft: "0",
    marginTop: "0",
    marginRight: "-5.5rem",
    name: "Track Pants",
    price: "0.06"
  }
]
const Desktopproducts = [
  {
    marginLeft: "-5rem",
    marginTop: "0",
    name: "Track Pants",
    price: "0.25",
    image: TrackPants,
  },
  {
    marginLeft: "0",
    marginTop: "72px",
    name: "Layla Dress",
    price: "0.25",
    image: TrackPants,
  },
  {
    marginLeft: "0",
    marginTop: "188px",
    name: "Layla Dress",
    price: "0.25",
    image: TrackPants,
  },
  {
    marginLeft: "0",
    marginTop: "72px",
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
      <div className="lg:max-w-[1440px] mx-auto lg:mx-auto w-full">
        <Navbar />
        <MobileNav/>
      </div>

      <div className="lg:mt-[72px] mt-[44px] flex flex-col justify-center">
        <div className="border border-solid mx-auto border-[#B8A3E1] text-[#FEC5F3] rounded-[34px] w-auto bg-[#1C1111] py-[6px] px-[12px] lg:py-[8px] lg:px-[20px]">
          <p className="font-spaceGrotesk text-[12px] lg:text-[14px] whitespace-nowrap">
            Pay With Crypto
          </p>
        </div>
        <div className="mx-auto text-center mt-[24px] text-white">
          <div className="lg:text-[48px] text-[30px] font-aeonik lg:font-helvtica font-medium leading-[140%] lg:leading-[120%] tracking-[6%]">
            <h1>
              Empowering <span className="text-luxela_purple">Fashion</span>,
            </h1>
            <h1>Decentralized and Authentic</h1>
          </div>
          <div className="hidden lg:block mt-[16px] text-[16px] font-spaceGrotesk">
            <p>
              Connecting independent fashion brands to a global audience with
              transparency, sustainability, and a
            </p>
            <p>commitment to ethical practices</p>
          </div>
          <div className="text-[15px] leading-[150%]  px-[20px] lg:hidden block font-spaceGrotesk mt-[12px]">
            <p>Connecting independent fashion brands to a global audience with transparency, sustainability, and a commitment to ethical practices</p>
          </div>
          <div className="lg:max-w-[230px]  px-[20px] w-full mt-[32px] lg:mt-[20px] mx-auto">
            <Button>Shop Now</Button>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex max-w-[393px] mx-auto gap-[10px] mt-[62px]">
        {products.slice(0, 3).map((product, index) => (
          <div key={index}     className={`w-[200px] h-[250.63px] ${
            product.marginTop
          } ${product.marginLeft || ""} ${product.marginRight || ""}`}
          style={{
            marginTop: product.marginTop,
            marginLeft: product.marginLeft,
            marginRight: product.marginRight,
          }}>
            <Image src={product.image} alt={`product-${index}`}  />
            {index === 1 && (
              <div className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                <MiddleSVG />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-[56px] hidden max-w-[1440px] mx-auto lg:flex gap-[36px]">
        {Desktopproducts.map((product, index) => (
          <div
            key={index}
            className={`w-[300px] h-[375.94px] ${
              product.marginTop
            } ${product.marginLeft || ""} ${product.marginRight || ""}`}
            style={{
              marginTop: product.marginTop,
              marginLeft: product.marginLeft,
              marginRight: product.marginRight,
            }}
          >
            <div className="relative mt-[19px] bg-[#000000]/20">
              <Image src={product.image} alt="product image" />
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
