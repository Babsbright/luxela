"use client";

import React, { useEffect, useRef, useState } from "react";

import Navbar from "../components/Homepage/Navbar2";
import MobileNav from "../components/Homepage/MobileNav2";
import Image, { StaticImageData } from "next/image";
import Fashion from "/public/assests/Twitter header - 5.svg";
import MobileFashion from "/public/assests/collection.svg";
import Collection1 from "/public/assests/Twitter header - 12.svg";
import Collection2 from "/public/assests/Twitter header - 12 (1).svg"
import Collection3 from "/public/assests/Twitter header - 12 (2).svg"
import Collection4 from "/public/assests/Twitter header - 12 (3).svg"
import Explore from "/public/assests/Twitter header - 13.png"
import { ArrowRightIcon } from "../components/icons";
import SolanaIcon from "../components/icons/SolanaIcon";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

const Page = () => {
  const brands = [1, 2];

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slidesRef = useRef<HTMLDivElement | null>(null);

  const collections = [
    { id: 1, title: "Name of series", image: Collection1 },
    { id: 2, title: "Name of series", image: Collection2 },
    { id: 3, title: "Name of series", image: Collection3 },
    { id: 4, title: "Name of series", image: Collection4 },
  ];

  const explore = [
    { id: 1, title: "Grey Thread Baggy Pants", price:"0.06", brand:"BAZ Fashion", image: Explore },
    { id: 2, title: "B/W Wrangler", price:"0.0051", brand:"BAZ Fashion", image: Explore },
    { id: 3, title: "Bat Tee Black Print", price:"0.003", brand:"BAZ Fashion", image: Explore },
    { id: 4, title: "Baz Athletics", price:"0.0021", brand:"BAZ Fashion", image: Explore },
  ];

  const slides: Slide[] = [
    {
      id: 1,
      title: "Name of collection",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: MobileFashion,
    },
    {
      id: 2,
      title: "Name of collection",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: MobileFashion,
    },
    {
      id: 3,
      title: "Name of collection",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: MobileFashion,
    },
    {
      id: 4,
      title: "Name of collection",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: MobileFashion,
    },
  ];

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    if (slidesRef.current) {
      slidesRef.current.scrollTo({
        left: index * slidesRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (slidesRef.current) {
      const scrollLeft = slidesRef.current.scrollLeft;
      const slideWidth = slidesRef.current.offsetWidth;
      const newCurrentSlide = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(newCurrentSlide);
    }
  };

  useEffect(() => {
    const slidesContainer = slidesRef.current;
    if (slidesContainer) {
      slidesContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (slidesContainer) {
        slidesContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <MobileNav />
      <div className="mt-[24px] pl-[16px] lg:pl-[40px]">
        <h2 className="font-spaceGrotesk font-medium text-[16px] lg:text-[20px]">
          Featured Brands
        </h2>
      </div>

      <div className="mt-[24px] lg:flex hidden overflow-x-scroll scrollbar-hide gap-[40px] pl-[40px]">
        {brands.map((_, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] p-[28px] border border-solid border-[#2B2B2B] rounded-[20px] h-[520px] flex-shrink-0 min-w-[1100px]"
          >
            <div className="flex items-center justify-between gap-[40px]">
              {/* Text Section */}
              <div className="max-w-[502px] mt-[104px] flex flex-col justify-center  w-full">
                <div>
                  <h2 className="font-aeonik text-[28px]">
                    Limited Fashion Pieces
                  </h2>
                  <p className="mt-[24px] text-[20px] font-spaceGrotesk">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                </div>

                <div className="mt-[92px]">
                  <button className="font-spaceGrotesk flex items-center pl-4 gap-[12px] font-medium w-[184px] h-[48px] bg-gradient-to-b from-luxela_lilac to-luxela_purple2 text-[16px] rounded-[8px] text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-none">
                    View Collection
                    <span className="flex items-center justify-center bg-black rounded-[6px] w-[28px] h-[28px]">
                      <ArrowRightIcon />
                    </span>
                  </button>
                </div>
              </div>

              <Image src={Fashion} alt="Featured brand images" />
            </div>
          </div>
        ))}
      </div>

      <div className="px-[16px] lg:hidden block mt-[24px]">
        <div
          ref={slidesRef}
          className="overflow-x-scroll snap-x scrollbar-hide flex space-x-4"
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] p-[20px] min-w-[100%] snap-center rounded-[12px] border border-solid border-[#2B2B2B]"
            >
              <Image src={slide.image} alt="image" className="w-full" />
              <div className="mt-[80.87px] space-y-[20px] font-spaceGrotesk">
                <h2 className="text-[20px] font-medium">{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
              <div className="mt-[29px]">
                <button className="font-spaceGrotesk font-medium w-full h-[44px] bg-gradient-to-b from-luxela_lilac via-luxela_purple2 to-luxela_purple rounded-lg text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-2 mt-[24px]">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-[40px] h-[8px] rounded-full cursor-pointer ${
                currentSlide === index ? "bg-[#6F36E2]" : "bg-[#2B2B2B]"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div className="mt-[80px] lg:mt-[100px] px-[16px] lg:px-[40px]">
        <div className="flex items-center justify-between">
          <h2 className="font-spaceGrotesk lg:text-[20px] font-medium">
            Collections from Baz
          </h2>
          <div>
            <div className="flex items-center gap-[4px]">
              <p className="text-[#BFBFBF] text-[11px] lg:text-[14px] font-spaceGrotesk">
                See all
              </p>
              <ArrowRightIcon className="size-[14px] lg:size-[20px]" />
            </div>
            <hr className="w-[52px] lg:w-[67px] border border-solid border-[#BFBFBF]" />
          </div>
        </div>
        <div className="lg:mt-[28px] mt-[32px] grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-4 grid-cols-2 gap-[16px]">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="lg:w-[320px] lg:h-[401px] h-[230px] w-[172.5px] rounded-[4px] lg:p-[12px] lg:bg-[#1A1A1A]"
            >
              <div>
                <Image src={collection.image} alt={collection.title} />
              </div>
              <div className="lg:mt-[20px] mt-[12px] flex justify-between items-center">
                <h2 className="font-spaceGrotesk text-[14px] lg:text-[16px] font-medium">
                  {collection.title}
                </h2>
                <ArrowRightIcon className="w-[20px] h-[20px] hidden lg:flex" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[80px] pb-[160.5px] lg:mt-[100px] px-[16px] lg:px-[40px]">
        <div className="flex items-center justify-between">
          <h2 className="font-spaceGrotesk lg:text-[20px] font-medium">
          Explore these collections
          </h2>
          <div>
            <div className="flex items-center gap-[4px]">
              <p className="text-[#BFBFBF] text-[11px] lg:text-[14px] font-spaceGrotesk">
                See all
              </p>
              <ArrowRightIcon className="size-[14px] lg:size-[20px]" />
            </div>
            <hr className="w-[52px] lg:w-[67px] border border-solid border-[#BFBFBF]" />
          </div>
        </div>
        <div className="lg:mt-[28px] mt-[32px] grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-4 grid-cols-2 gap-[16px]">
          {explore.map((collection) => (
            <div
              key={collection.id}
              className="lg:w-[320px] lg:h-[444.7px] h-[265px] w-[172.5px] rounded-[4px] p-[12px] bg-[#1A1A1A]"
            >
              <div>
                <Image src={collection.image} alt={collection.title} className="w-[148px] h-[141.66px] lg:w-[296px] lg:h-[336.7px]" />
              </div>
              <div className="lg:mt-[19.7px] mt-[4.34px] space-y-[12px] lg:space-y-0 flex lg:flex-row flex-col justify-between lg:items-center">
                <h2 className="font-spaceGrotesk text-[14px] lg:text-[16px] font-medium">
                  {collection.title}
                </h2>
                <div className="flex items-center gap-[4px] ">
                  <p className="text-[14px] font-spaceGrotesk">{collection.price}</p>
                  <SolanaIcon/>
                </div>
              </div>
                <p className="lg:mt-[20px] mt-[12px] font-spaceGrotesk font-medium text-[10px] lg:text-[14px]">{collection.brand}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
