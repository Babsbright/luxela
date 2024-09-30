"use client";

import React, { useEffect, useRef, useState } from "react";

interface CurrencyOption {
  label: string;
  value: string;
}

const Essentials = () => {
  const [price, setPrice] = useState<number | string>("");
  const [currency, setCurrency] = useState<string>("USD");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [activeSize, setActiveSize] = useState<string>("");

  const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];

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
    <div className="space-y-[28px]">
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
              <span className="text-[13px] font-spaceGrotesk">{currency}</span>
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
        <div className="flex space-x-4 mt-[16px]">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setActiveSize(size)}
              className={`h-[44px] w-[73.33px] text-[15px] font-semibold border rounded-[8px]
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
    </div>
  );
};

export default Essentials;
