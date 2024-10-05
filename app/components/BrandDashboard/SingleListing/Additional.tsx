"use client";

import React, { useState } from "react";

const Additional = () => {
  const [activeTarget, setActiveTarget] = useState<string>("");
  const target = ["Male", "Female", "Unisex"];
  return (
    <div className="space-y-[28px]">
      <div>
        <label className="font-spaceGrotesk text-[14px] font-medium">
          Material/Composition
        </label>
        <input
          type="text"
          placeholder="What material is your product made from"
          className="mt-[16px] px-[16px] w-full bg-[#1A1A1A] text-[13px]
          rounded-lg border-none py-[15px] text-white shadow-sm
          focus:outline-none focus:shadow-outline 
           placeholder:text-[#666666] font-spaceGrotesk focus:outline-luxela_lilac placeholder:text-[13px]"
        />
      </div>

      <div>
        <label className="font-spaceGrotesk text-[14px] font-medium">
          Color options
        </label>
        <input
          type="text"
          placeholder="How many color options for your products are available?"
          className="mt-[16px] px-[16px] w-full bg-[#1A1A1A] text-[13px]
          rounded-lg border-none py-[15px] text-white shadow-sm
          focus:outline-none focus:shadow-outline 
           placeholder:text-[#666666] font-spaceGrotesk focus:outline-luxela_lilac placeholder:text-[13px]"
        />
      </div>
      <div className="font-spaceGrotesk">
        <label className="text-[14px] font-medium"> Suply cap</label>
        <div className="flex space-x-4 mt-[16px]">
          {target.map((target) => (
            <button
              key={target}
              onClick={() => setActiveTarget(target)}
              className={`h-[44px] w-[252px] text-[13px] lg:text-[15px] font-semibold border rounded-[8px]
            ${
              activeTarget === target
                ? "border-purple-600 text-purple-600"
                : "border-[#212121] text-[#ACACAC]"
            }
            hover:border-purple-600 hover:text-purple-600 transition-colors`}
            >
              {target}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="font-spaceGrotesk text-[14px] font-medium">
          Shipping options
        </label>
        <input
          type="text"
          placeholder="Would the shipping be free, expedited or international"
          className="mt-[16px] px-[16px] w-full bg-[#1A1A1A] text-[13px]
          rounded-lg border-none py-[15px] text-white shadow-sm
          focus:outline-none focus:shadow-outline 
           placeholder:text-[#666666] font-spaceGrotesk focus:outline-luxela_lilac placeholder:text-[13px]"
        />
      </div>

      <div>
        <h2 className="font-spaceGrotesk text-[14px] font-medium">
          Estimated shipping time
        </h2>
        <div className="mt-[16px]">
          <label className="font-spaceGrotesk text-[14px] font-medium">
            Within country
          </label>
          <div className="flex gap-[16px]">
            <input
              type="text"
              placeholder="00 Days"
              className="mt-[16px] px-[16px] w-full bg-[#1A1A1A] text-[13px]
          rounded-lg border-none py-[15px] text-white shadow-sm
          focus:outline-none focus:shadow-outline 
           placeholder:text-[#666666] font-spaceGrotesk focus:outline-luxela_lilac placeholder:text-[13px]"
            />
            <input
              type="text"
              placeholder="00 Minutes"
              className="mt-[16px] px-[16px] w-full bg-[#1A1A1A] text-[13px]
          rounded-lg border-none py-[15px] text-white shadow-sm
          focus:outline-none focus:shadow-outline 
           placeholder:text-[#666666] font-spaceGrotesk focus:outline-luxela_lilac placeholder:text-[13px]"
            />
          </div>
        </div>

        <div className="mt-[24px]">
          <label className="font-spaceGrotesk text-[14px] font-medium">
            International
          </label>
          <div className="flex gap-[16px]">
            <input
              type="text"
              placeholder="00 Days"
              className="mt-[16px] px-[16px] w-full bg-[#1A1A1A] text-[13px]
          rounded-lg border-none py-[15px] text-white shadow-sm
          focus:outline-none focus:shadow-outline 
           placeholder:text-[#666666] font-spaceGrotesk focus:outline-luxela_lilac placeholder:text-[13px]"
            />
            <input
              type="text"
              placeholder="00 Minutes"
              className="mt-[16px] px-[16px] w-full bg-[#1A1A1A] text-[13px]
          rounded-lg border-none py-[15px] text-white shadow-sm
          focus:outline-none focus:shadow-outline 
           placeholder:text-[#666666] font-spaceGrotesk focus:outline-luxela_lilac placeholder:text-[13px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Additional;
