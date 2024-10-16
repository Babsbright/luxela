"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Homepage/Navbar2";
import MobileNav from "../components/Homepage/MobileNav2";
import Image, { StaticImageData } from "next/image";
import Fashion from "/public/assests/Twitter header - 5.svg";
import MobileFashion from "/public/assests/collection.svg";
import Collection1 from "/public/assests/Twitter header - 12.svg";
import Collection2 from "/public/assests/Twitter header - 12 (1).svg";
import Collection3 from "/public/assests/Twitter header - 12 (2).svg";
import Collection4 from "/public/assests/Twitter header - 12 (3).svg";
import { ArrowRightIcon } from "../components/icons";
import SolanaIcon from "../components/icons/SolanaIcon";
import { items } from "../product-details/data";
import Link from "next/link";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

const Page = () => {
  const brands = [
    {
      title: "City Vibes",
      description:
        "Immerse yourself in the rhythm of the streets with City Vibes, a streetwear collection that speaks to the soul of urban culture. Each piece is designed to channel the pulse of the city, combining bold patterns and relaxed fits for those who own their style and stand out effortlessly.",
      image: Fashion,
    },
    {
      title: "Street Monarch",
      description:
        "Rule the urban landscape with Street Monarch, a collection inspired by the gritty beauty and raw power of city life. These pieces fuse street-savvy design with bold, standout details—crafted for those who embrace their individuality and command attention wherever they go.",
      image: MobileFashion,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slidesRef = useRef<HTMLDivElement | null>(null);

  const collections = [
    { id: 1, title: "Midnight Hustle", image: Collection1 },
    { id: 2, title: "Neon Drift", image: Collection2 },
    { id: 3, title: "Block Legends", image: Collection3 },
    { id: 4, title: "Rogue Waves", image: Collection4 },
  ];

  // const explore = [
  //   { id: 1, title: "Grey Thread Baggy Pants", price:"0.06", brand:"BAZ Fashion", image: Explore },
  //   { id: 2, title: "B/W Wrangler", price:"0.0051", brand:"BAZ Fashion", image: Explore },
  //   { id: 3, title: "Bat Tee Black Print", price:"0.003", brand:"BAZ Fashion", image: Explore },
  //   { id: 4, title: "Baz Athletics", price:"0.0021", brand:"BAZ Fashion", image: Explore },
  // ];

  const slides: Slide[] = [
    {
      id: 1,
      title: "City Vibes",
      description:
        "Immerse yourself in the rhythm of the streets with City Vibes, a streetwear collection that speaks to the soul of urban culture. Each piece is designed to channel the pulse of the city, combining bold patterns and relaxed fits for those who own their style and stand out effortlessly.",
      image: MobileFashion,
    },
    {
      id: 2,
      title: "Street Monarch",
      description:
        "Rule the urban landscape with Street Monarch, a collection inspired by the gritty beauty and raw power of city life. These pieces fuse street-savvy design with bold, standout details—crafted for those who embrace their individuality and command attention wherever they go.",
      image: Fashion,
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
        <h2 className="font-spaceGrotesk font-medium text-lg">
          Featured Brands
        </h2>
      </div>

      <div className="mt-[24px] lg:flex hidden overflow-x-scroll scrollbar-hide gap-[40px] pl-[40px]">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] p-[28px] border border-solid border-[#2B2B2B] rounded-[20px] h-[520px] flex-shrink-0 min-w-[1100px]"
          >
            <div className="flex items-center justify-between gap-[40px]">
              {/* Text Section */}
              <div className="max-w-[502px] mt-[104px] flex flex-col justify-center  w-full">
                <div>
                  <h2 className="font-aeonik text-[28px]">{brand.title}</h2>
                  <p className="mt-[24px] text-base lg:text-lg font-spaceGrotesk">
                    {brand.description}{" "}
                  </p>
                </div>

                <div className="mt-[92px]">
                  <Link href="/coming-soon">
                    <button className="font-spaceGrotesk flex items-center pl-4 gap-[12px] font-medium w-[184px] h-[48px] bg-gradient-to-b from-luxela_lilac to-luxela_purple2 text-[16px] rounded-[8px] text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-none">
                      View Collection
                      <span className="flex items-center justify-center bg-black rounded-[6px] w-[28px] h-[28px]">
                        <ArrowRightIcon />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>

              <Image src={brand.image} alt="Featured brand images" />
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
                <Link href="/Explore">
                  <button className="font-spaceGrotesk font-medium w-full h-[44px] bg-gradient-to-b from-luxela_lilac via-luxela_purple2 to-luxela_purple rounded-lg text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac">
                    Shop Now
                  </button>
                </Link>
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
          <h2 className="font-spaceGrotesk text-lg font-medium">
            Collections from Baz
          </h2>
          <div>
            <div className="flex items-center cursor-pointer gap-[4px]">
              <p className="text-[#BFBFBF] text-[11px] lg:text-[14px] font-spaceGrotesk">
                See all
              </p>
              <ArrowRightIcon className="size-[14px] lg:size-[20px]" />
            </div>
            <hr className="w-[52px] lg:w-[67px] border border-solid border-[#BFBFBF]" />
          </div>
        </div>
        <div className="lg:mt-[28px] mt-[32px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-sm:gap-y-10 place-items-center gap-y-6 gap-x-4">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="rounded-[4px] bg-[#1A1A1A] cursor-pointer hover:scale-105 hover:border hover:border-luxela_purple"
            >
              <div className="p-2 shadow-lg">
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
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[80px] pb-20 lg:mt-[100px] px-[16px] lg:px-[40px]">
        <div className="flex items-center justify-between">
          <h2 className="font-spaceGrotesk text-lg font-medium">
            Explore these collections
          </h2>
          <div>
            <div className="flex cursor-pointer items-center gap-[4px]">
              <p className="text-[#BFBFBF]  text-[11px] lg:text-[14px] font-spaceGrotesk">
                See all
              </p>
              <ArrowRightIcon className="size-[14px] lg:size-[20px]" />
            </div>
            <hr className="w-[52px] lg:w-[67px] border border-solid border-[#BFBFBF]" />
          </div>
        </div>
        <div className="lg:mt-[28px] mt-[32px] grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-[16px]">
          {items.map((collection) => (
            <div
              key={collection.id}
              className=" rounded-[4px] p-[12px] bg-[#1A1A1A] hover:scale-105 hover:border hover:border-luxela_lilac cursor-pointer"
            >
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore */}
              <Link
                href={`/product-details/${collection.name
                  .trim()
                  .toLowerCase()
                  .split(" ")
                  .join("-")}`}
              >
                <div>
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </div>
              </Link>

              <div className="lg:mt-[19.7px] mt-[4.34px] space-y-[12px] lg:space-y-0 flex lg:flex-row flex-col justify-between lg:items-center">
                <h2 className="font-spaceGrotesk text-[14px] font-medium">
                  {collection.name}
                </h2>
                <div className="flex items-center gap-[4px] ">
                  <p className="text-sm font-spaceGrotesk">
                    {collection.price}
                  </p>
                  <SolanaIcon />
                </div>
              </div>
              <p className="lg:mt-[20px] mt-[12px] font-spaceGrotesk font-medium text-[10px] lg:text-sm">
                {collection.brand}
              </p>
            </div>
          ))}
        </div>
        {/* <div className="lg:mt-[28px] mt-[32px] grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-4 grid-cols-2 gap-[16px]">
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
        </div> */}
      </div>
    </>
  );
};

export default Page;
