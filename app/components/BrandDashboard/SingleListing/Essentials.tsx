"use client";

import React, { useEffect, useRef, useState } from "react";
import { addDays, format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Select } from "@/components/ui/select";
import CalendarIcon from "../../icons/CalendarIcon";
import UploadIcon from "../../icons/UploadIcon";
import PlusIcon from "../../icons/PlusIcon";

interface CurrencyOption {
  label: string;
  value: string;
}

const Essentials = () => {
  const [price, setPrice] = useState<number | string>("");
  const [currency, setCurrency] = useState<string>("USD");
  const [date, setDate] = React.useState<Date>();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [activeSize, setActiveSize] = useState<string>("");
  const [activeSupply, setActiveSupply] = useState<string>("");
  const [activeBadge, setActiveBadge] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      console.log(`Selected file: ${files[0].name}`);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const Badge = ["Show badge", "Do not show badge"];

  const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];

  const supply = ["No Max", "Limited supply"];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currencyOptions: CurrencyOption[] = [
    { label: "USD", value: "USD" },
    { label: "EUR", value: "EUR" },
    { label: "GBP", value: "GBP" },
    { label: "JPY", value: "JPY" },
  ];
  return (
    <>
      <div className="w-full lg:hidden block sm:max-w-full  max-w-[420px]">
        <h2 className="font-spaceGrotesk text-[14px]">
          Product image or video* (Maximum of 4 images)
        </h2>
        <div className="mt-[24px]">
          <div
            className="flex flex-col items-center justify-center h-[300px] lg:h-[350px] border-dashed border-2 border-[#595959] bg-[#1A1A1A] text-center text-white rounded-[12px] cursor-pointer"
            onClick={handleClick}
          >
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
              accept=".png,.jpeg,.jpg,.mp4"
              multiple
            />
            <div>
              <UploadIcon />
            </div>
            <div className="mt-[12px] space-y-[6px] font-spaceGrotesk">
              <h2 className="text-[14px] font-medium">
                Upload Image(s) or product videos
              </h2>
              <p className="text-[14px]">
                Supported file formats are .png, .jpeg, .mp4
              </p>
              <p className=" text-[#8451E1] text-[12px]">Max file size: 10mb</p>
            </div>
          </div>
          <div className="mt-[16px] flex gap-[20px] w-full items-center">
            <div className="flex flex-col items-center justify-center h-[128px] sm:max-w-full max-w-[126.67px] w-full border-dashed border-2 border-[#595959] bg-[#1A1A1A] text-center text-white rounded-[12px] cursor-pointer">
              <PlusIcon />
            </div>
            <div className="flex flex-col items-center justify-center h-[128px] sm:max-w-full max-w-[126.67px] w-full border-dashed border-2 border-[#595959] bg-[#1A1A1A] text-center text-white rounded-[12px] cursor-pointer">
              <PlusIcon />
            </div>
            <div className="flex flex-col items-center justify-center h-[128px] sm:max-w-full max-w-[126.67px] w-full border-dashed border-2 border-[#595959] bg-[#1A1A1A] text-center text-white rounded-[12px] cursor-pointer">
              <PlusIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-[28px] lg:mt-[24px] mt-[60px]">
        <div>
          <label className="font-spaceGrotesk text-[14px] font-medium">
            Product name
          </label>
          <input
            type="text"
            placeholder="Give your product a name"
            className="mt-[16px] px-[16px] w-full bg-[#1A1A1A] text-[13px]
          rounded-lg border-none py-[15px] text-white shadow-sm
          focus:outline-none focus:shadow-outline 
           placeholder:text-[#666666] font-spaceGrotesk focus:outline-luxela_lilac placeholder:text-[13px]"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-spaceGrotesk text-[14px] font-medium">
            Price
          </label>

          <div className="flex items-center mt-[16px] space-x-2">
            <div className="relative" ref={dropdownRef}>
              <button
                className="px-[16px] w-[120px] py-[15px] rounded-[8px] focus:outline-luxela_lilac focus:ring-[#8451E1] bg-[#1A1A1A] border-[#212121] border border-solid flex justify-between items-center"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
              >
                <span className="text-[13px] font-spaceGrotesk">
                  {currency}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[15px] w-[15px] text-[#8451E1]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute mt-2 w-full bg-[#1A1A1A] rounded-lg shadow-lg z-10">
                  {currencyOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setCurrency(option.value);
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left text-[13px] px-4 py-2"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className=" px-[16px] w-full bg-[#1A1A1A] text-[13px]
          rounded-lg border-[#212121] border border-solid py-[15px] text-white shadow-sm
          focus:outline-none focus:shadow-outline 
           placeholder:text-[#666666] font-spaceGrotesk focus:outline-luxela_lilac placeholder:text-[13px]"
              placeholder="Enter amount"
            />
          </div>
        </div>

        <div>
          <label className="font-spaceGrotesk text-[14px] font-medium">
            Product type
          </label>
          <input
            type="text"
            placeholder="Select a category that best suits this product"
            className="mt-[16px] px-[16px] w-full bg-[#1A1A1A] text-[13px]
          rounded-lg border-[#212121] border border-solid py-[15px] text-white shadow-sm
          focus:outline-none focus:shadow-outline 
           placeholder:text-[#666666] font-spaceGrotesk focus:outline-luxela_lilac placeholder:text-[13px]"
          />
        </div>
        <div>
          <label className="font-spaceGrotesk text-[14px] font-medium">
            Product Description
          </label>
          <textarea
            name=""
            id=""
            placeholder="Describe your product"
            className="mt-[16px] px-[16px] w-full bg-[#1A1A1A] text-[13px]
          rounded-lg border-[#212121] h-[160px] border border-solid py-[15px] text-white shadow-sm
          focus:outline-none focus:shadow-outline 
           placeholder:text-[#666666] font-spaceGrotesk focus:outline-luxela_lilac placeholder:text-[13px]"
          />
        </div>
        <div className="font-spaceGrotesk">
          <label className="text-[14px] font-medium"> Sizes available</label>
          <div className="flex lg:space-x-4 space-x-[10px] mt-[16px]">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setActiveSize(size)}
                className={`lg:h-[44px] h-[43px] w-[64.2px] lg:w-[73.33px] text-[15px] font-semibold border rounded-[8px]
            ${
              activeSize === size
                ? "border-purple-600 text-purple-600"
                : "border-[#212121]"
            }
            hover:border-purple-600 hover:text-purple-600 transition-colors`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label className="font-spaceGrotesk text-[14px] font-medium">
            Release date
          </label>
          <Popover>
            <PopoverTrigger asChild className="mt-[16px]">
              <Button
                variant={"luxela"}
                className={cn(
                  "w-full justify-between items-center text-[13px] font-spaceGrotesk placeholder:text-[#666666] text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <span className="flex-grow">
                  {date ? (
                    format(date, "PPP")
                  ) : (
                    <span className="text-[#666666]">DD-MM-YY</span>
                  )}
                </span>
                <CalendarIcon className="h-4 w-4 ml-2" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="flex w-auto flex-col space-y-2 p-2"
            >
              <Select
                onValueChange={(value) =>
                  setDate(addDays(new Date(), parseInt(value)))
                }
              ></Select>
              <div className="rounded-md border">
                <Calendar mode="single" selected={date} onSelect={setDate} />
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="font-spaceGrotesk">
          <label className="text-[14px] font-medium"> Suply cap</label>
          <div className="flex space-x-4 mt-[16px]">
            {supply.map((supply) => (
              <button
                key={supply}
                onClick={() => setActiveSupply(supply)}
                className={`h-[44px] w-[252px] text-[13px] lg:text-[15px] font-semibold border rounded-[8px]
            ${
              activeSupply === supply
                ? "border-purple-600 text-purple-600"
                : "border-[#212121] text-[#ACACAC]"
            }
            hover:border-purple-600 hover:text-purple-600 transition-colors`}
              >
                {supply}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="font-spaceGrotesk text-[14px] font-medium">
            Supply cap
          </label>
          <input
            type="number"
            placeholder="00000000"
            className="mt-[16px] px-[16px] w-full bg-[#1A1A1A] text-[13px]
          rounded-lg border-[#212121] border border-solid py-[15px] text-white shadow-sm
          focus:outline-none focus:shadow-outline 
           placeholder:text-[#666666] font-spaceGrotesk focus:outline-luxela_lilac placeholder:text-[13px]"
          />
        </div>
        <div className="font-spaceGrotesk">
          <label className="text-[14px] font-medium">
            Show limited edition badge?
          </label>
          <div className="flex space-x-4 mt-[16px]">
            {Badge.map((Badge) => (
              <button
                key={Badge}
                onClick={() => setActiveBadge(Badge)}
                className={`h-[44px] w-[252px] text-[13px] lg:text-[15px] font-semibold border rounded-[8px]
            ${
              activeBadge === Badge
                ? "border-purple-600 text-purple-600"
                : "border-[#212121] text-[#ACACAC]"
            }
            hover:border-purple-600 hover:text-purple-600 transition-colors`}
              >
                {Badge}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="font-spaceGrotesk text-[14px] font-medium">
            Release Duration
          </label>
          <input
            type="text"
            placeholder="How long would this product be available"
            className="mt-[16px] px-[16px] w-full bg-[#1A1A1A] text-[13px]
          rounded-lg border-none py-[15px] text-white shadow-sm
          focus:outline-none focus:shadow-outline 
           placeholder:text-[#666666] font-spaceGrotesk focus:outline-luxela_lilac placeholder:text-[13px]"
          />
        </div>
        <div>
          <label>Release Duration</label>
          <div className="flex gap-[16px]">
            <input
              type="number"
              placeholder="00 Days"
              className="mt-[16px] px-[16px] w-full bg-[#1A1A1A] text-[13px]
          rounded-lg border-[#212121] border border-solid py-[15px] text-white shadow-sm
          focus:outline-none focus:shadow-outline 
           placeholder:text-[#666666] font-spaceGrotesk focus:outline-luxela_lilac placeholder:text-[13px]"
            />
            <input
              type="number"
              placeholder="00 Minutes"
              className="mt-[16px] px-[16px] w-full bg-[#1A1A1A] text-[13px]
          rounded-lg border-[#212121] border border-solid py-[15px] text-white shadow-sm
          focus:outline-none focus:shadow-outline 
           placeholder:text-[#666666] font-spaceGrotesk focus:outline-luxela_lilac placeholder:text-[13px]"
            />
          </div>
        </div>
      </div>

    </>
  );
};

export default Essentials;
