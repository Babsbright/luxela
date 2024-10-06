import React from "react";
import Navbar from "../components/Homepage/Navbar2";
import MobileNav from "../components/Homepage/MobileNav2";
import { ArrowRightIcon } from "../components/icons";
import SolanaIcon from "../components/icons/SolanaIcon";
import Explore from "/public/assests/Twitter header - 13.png";
import Image from "next/image";
import FilterIcon from "../components/icons/FilterIcon";
import MobileFilterIcon from "../components/icons/MobileFilterIcon";
import SearchIcon2 from "../components/icons/SearchIcon2";
import { items } from "../product-details/data";
//  @ts-ignore
import Link from "next/link";
const Page = () => {

  return (
    <div>
      <Navbar />
      <MobileNav />
      <div>
        <div className="mt-[24px] lg:mt-[40px] lg:pb-[160.5px] pb-[100px] px-[16px] lg:px-[40px]">
          <div className="lg:hidden flex">
            <div className="border-[#2B2B2B] px-[10px] py-[12.5px] flex justify-between items-center rounded-[4px] w-full h-[42px] border border-solid">
              <div className="flex items-center gap-[12px]">
                <SearchIcon2 />
                <input
                  type="text"
                  className="focus:outline-none bg-[#0E0E0E] placeholder:font-spaceGrotesk placeholder:text-[14px]  font-spaceGrotesk text-[14px] "
                  placeholder="Search for any order "
                />
              </div>
              <div>
                <MobileFilterIcon />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-[24px] lg:mt-0">
            <h2 className="font-spaceGrotesk lg:text-[20px] font-medium">
              Explore these collections
            </h2>
            <div className="lg:hidden block">
              <div className="flex items-center gap-[4px]">
                <p className="text-[#BFBFBF] text-[11px] lg:text-[14px] font-spaceGrotesk">
                  See all
                </p>
                <ArrowRightIcon className="size-[14px] lg:size-[20px]" />
              </div>
              <hr className="w-[52px] lg:w-[67px] border border-solid border-[#BFBFBF]" />
            </div>
            <div className="hidden lg:flex border border-solid bg-[#1A1A1A] w-[93px] border-[#2B2B2B] rounded-[6px] py-[6px] px-[10px] gap-[8px] items-center">
              <p className="font-spaceGrotesk text-[14px]">Filters</p>
              <FilterIcon />
            </div>
          </div>
          <div className="lg:mt-[28px] mt-[32px] grid  grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-[16px]">
            {items.map((collection) => (
              <div
                key={collection.id}
                className=" rounded-[4px] p-[12px] bg-[#1A1A1A] hover:scale-105 hover:border hover:border-luxela_lilac cursor-pointer"
              >
                {/* @ts-ignore */}
                <Link href={`/product-details/${collection.name.trim().toLowerCase().split(" ").join("-")}`}>
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
        </div>
      </div>
    </div>
  );
};

export default Page;
