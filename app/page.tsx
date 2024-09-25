"use client";

import Hero from "./components/Homepage/Hero";
import SolanaLogo1 from "/public/assests/solana-sol-logo-horizontal 1.svg";
import SolanaLogo2 from "/public/assests/image 3.svg";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { QuestionIcon } from "./components/icons";

import WhatLuxela from "/public/assests/Frame 20873272581.svg";
import Screenshot1 from "/public/assests/Frame 2087327522.svg";
import Screenshot2 from "/public/assests/Frame 2087327260.svg";
import Screenshot3 from "/public/assests/Frame 2087327258.svg";
import Screenshot4 from "/public/assests/Frame 2087327527.svg";
import { useState } from "react";
import DropdownIcon from "./components/icons/DropdownIcon";

const featureData = [
  {
    title: "Make Payment in Crypto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: Screenshot1,
  },
  {
    title: "NFTs to Serve Various Purposes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: Screenshot2,
  },
  {
    title: "Be Closer to Your Favorite Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: Screenshot3,
  },
  {
    title: "Limited Fashion Pieces",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: Screenshot4,
  },
];

const brandData = [
  {
    name: "BAZ.NG",
    description:
      "We do not exist as a singular element. Our genetic make up is a stepping stone to our individuality, but even then, our genetic make up is not a singular entity. As we grow, we learn and unlearn, we experience and we forget, we take and we give back. There’s more variation in our individuality per day.",
    images: [
      "/assests/Frame 2087327259.svg",
      "/assests/Frame 2087327263.svg",
      "/assests/Frame 2087327264.svg",
      "/assests/Frame 2087327262.svg",
    ],
  },
  {
    name: "Veekee James",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [
      "/assests/image 23.svg",
      "/assests/image 25.svg",
      "/assests/image 26.svg",
      "/assests/image 24.svg",
    ],
  },
  {
    name: "Veekee James",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [
      "/assests/Frame 2087327259 (1).svg",
      "/assests/Frame 2087327263 (1).svg",
      "/assests/Frame 2087327264 (1).svg",
      "/assests/Frame 2087327262 (1).svg",
    ],
  },
];

const faqData = Array(6).fill({
  title: "Title or Header",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
});

const FeatureCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => (
  <div className="lg:mt-[99px] flex lg:flex-row flex-col justify-between items-center bg-[#1A1A1A] rounded-[20px]">
    <div className="lg:pl-[40px] py-[28px] px-[20px] lg:py-[121.5px] lg:w-[540px]">
      <h2 className="font-aeonik text-[24px] lg:text-[32px] text-white">
        {title}
      </h2>
      <p className="text-[#BFBFBF] font-spaceGrotesk text-[16px] lg:text-[24px] mt-[24px]">
        {description}
      </p>
    </div>
    <div className="px-[20px] lg:pb-[24px] lg:pt-[24px] lg:px-[24px]  pb-[27.84px] pt-[83.91px]">
      <Image
        src={image}
        alt="screenshots"
        className="lg:w-[620px] lg:h-[672px]"
      />
    </div>
  </div>
);

const BrandCard = ({
  name,
  description,
  images,
}: {
  name: string;
  description: string;
  images: string[];
}) => (
  <div className="lg:mt-[80px] mt-[60px]  lg:px-[60px]">
    <div className="px-[20px] lg:px-0">
      <h3 className="text-white text-[18px] font-spaceGrotesk font-bold">
        {name}
      </h3>
      <p className="text-[#DCDCDC] text-[16px] lg:text-[24px] font-spaceGrotesk mt-[12px] lg:mt-[4px]">
        {description}
      </p>
    </div>
    <div className="text-left hidden lg:block  mt-[28px]">
      <button className="font-spaceGrotesk font-medium w-[230px] h-[44px] bg-gradient-to-b from-luxela_lilac via-luxela_purple2 to-luxela_purple rounded-lg text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac">
        Shop {name} Now
      </button>
    </div>
    <div className="lg:mt-[80px] pl-[20px] lg:pl-0 mt-[52px]">
      <div className="flex overflow-x-scroll scrollbar-hide mt-[28px]">
        {images.map((image, index) => (
          <div key={index} className=" flex-shrink-0">
            <Image
              src={image}
              alt={`brand image ${index + 1}`}
              width={200}
              height={200}
              className="lg:w-[330px]"
            />
          </div>
        ))}
      </div>
    </div>
    <div className="text-left px-[20px] lg:px-0 lg:hidden block mt-[52px]">
      <button className="font-spaceGrotesk font-medium w-full h-[44px] bg-gradient-to-b from-luxela_lilac via-luxela_purple2 to-luxela_purple rounded-lg text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac">
        Shop Now
      </button>
    </div>
  </div>
);

const FAQCard = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:max-w-[432px] rounded-[12px] flex flex-col justify-between bg-[#1A1A1A] p-[20px]">
      <div
        className="flex justify-between lg:hidden items-center cursor-pointer"
        onClick={toggleFAQ}
      >
        <h2 className="font-spaceGrotesk text-[16px] text-white">{title}</h2>
        <QuestionIcon className="hidden lg:flex" />
        <DropdownIcon
          className={`transform lg:hidden flex transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <div className="lg:flex justify-between hidden items-center cursor-pointer">
        <h2 className="font-spaceGrotesk text-[17px] text-white">{title}</h2>
        <QuestionIcon />
      </div>
      <p className="font-spaceGrotesk  text-[#BFBFBF] mt-[92px] hidden lg:block transition-opacity duration-300 ease-in-out">
        {description}
      </p>
      {isOpen && (
        <p className="font-spaceGrotesk lg:hidden block text-[#BFBFBF] mt-[32px] transition-opacity duration-300 ease-in-out">
          {description}
        </p>
      )}
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-[#0E0E0E] w-full">
      <Hero />
      <div className="py-[100px]">
        <h2 className="text-white text-center font-aeonik text-[24px] lg:text-[32px]">
          Our Trusted Partners
        </h2>
        <Marquee className="mt-[68px]">
          <Image
            src={SolanaLogo1}
            alt="solana logo"
            className="w-[230px] h-[57.59px] lg:w-[283.07px] lg:h-[70.88px]"
          />
          <Image
            src={SolanaLogo2}
            alt="solana logo"
            className="w-[240px] h-[39.35px] lg:w-[432.98px] lg:h-[71px]"
          />
          <Image
            src={SolanaLogo1}
            alt="solana logo"
            className="w-[230px] h-[57.59px] lg:w-[283.07px] lg:h-[70.88px]"
          />
          <Image
            src={SolanaLogo2}
            alt="solana logo"
            className="w-[240px] h-[39.35px] lg:w-[432.98px] lg:h-[71px]"
          />
        </Marquee>
      </div>

      <div className="lg:p-[100px]  py-[93.38px] text-center lg:max-w-[1440px] mx-auto">
        <h2 className="font-aeonik text-[24px] lg:text-[32px] text-white">
          What Exactly is Luxela?
        </h2>
        <p className="text-[#BFBFBF] text-[18px] px-[20px] lg:px-0 font-spaceGrotesk mt-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur.
        </p>
        <div className="lg:mt-[68px] mt-[72px]">
          <Image src={WhatLuxela} alt="what is exactly luxela" />
        </div>
      </div>

      <div className="lg:p-[100px] py-[50px] space-y-[50.13px] px-[20px] lg:max-w-[1440px] mx-auto">
        {featureData.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </div>

      <div className="lg:mt-[99px] mt-[50px] lg:py-[100px]  lg:max-w-[1440px] mx-auto">
        <h2 className="text-white font-aeonik text-[24px] lg:text-[32px] text-center">
          Featured Brands on Luxela
        </h2>
        <div className="space-y-[160px]">
          {brandData.map((brand, index) => (
            <BrandCard
              key={index}
              name={brand.name}
              description={brand.description}
              images={brand.images}
            />
          ))}
        </div>
      </div>

      <div className="mt-[99px] lg:py-[100px]  lg:max-w-[1440px] mx-auto">
        <div className="lg:text-center">
          <h2 className="font-aeonik px-[20px] lg:px-0 lg:text-[32px] text-white">
            Frequently Asked Questions
          </h2>
          <p className="font-spaceGrotesk text-[16px] lg:text-[18px] pl-[20px] pr-[20px] lg:pl-[200.5px] lg:pr-[199.5px] mt-[20px] text-[#BFBFBF]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="mt-[72px] grid grid-cols-1 px-[20px] lg:grid-cols-3 gap-[12px] lg:px-[60px]">
          {faqData.map((faq, index) => (
            <FAQCard
              key={index}
              title={faq.title}
              description={faq.description}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="lg:mt-[99px] mt-[50px] bg-[#1A1A1A] lg:bg-[#0E0E0E] px-[20.5px] lg:px-[60px] py-[100px]">
        <div className="lg:bg-[#1A1A1A] lg:py-[95px] text-center ">
          <h2 className="font-aeonik text-white text-[24px] lg:text-[32px]">
            Frequently Asked Questions
          </h2>
          <p className="lg:px-[240px] mt-[20px] lg:mt-[16px] text-[#BFBFBF]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut{" "}
          </p>
          <div className="mt-[40px]">
            <button className="font-spaceGrotesk font-medium w-full lg:w-[230px] h-[44px] bg-gradient-to-b from-luxela_lilac via-luxela_purple2 to-luxela_purple rounded-lg text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac">
              Shop Luxela Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
