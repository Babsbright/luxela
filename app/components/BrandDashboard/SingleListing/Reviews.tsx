"use client"

import React, { useRef } from "react";
import PlusIcon from "../../icons/PlusIcon";
import UploadIcon from "../../icons/UploadIcon";

const Reviews = () => {
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
      <div className="space-y-[28px] mt-[60px] lg:mt-0">
        <div>
          <h2 className="font-spaceGrotesk text-[14px] font-medium">
            Product name
          </h2>
          <p className="font-spaceGrotesk text-[14px]">Name of product</p>
        </div>

        <div>
          <h2 className="font-spaceGrotesk text-[14px] font-medium">Price</h2>
          <p className="font-spaceGrotesk text-[14px]">#14,500.00</p>
        </div>

        <div>
          <h2 className="font-spaceGrotesk text-[14px] font-medium">
            Product type
          </h2>
          <p className="font-spaceGrotesk text-[14px]">Clothing</p>
        </div>

        <div>
          <h2 className="font-spaceGrotesk text-[14px] font-medium">
            Product description
          </h2>
          <p className="font-spaceGrotesk text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.
          </p>
        </div>

        <div>
          <h2 className="font-spaceGrotesk text-[14px] font-medium">
            Sizes available
          </h2>
          <p className="font-spaceGrotesk text-[14px]">S, L, XL, XXL, XXXL</p>
        </div>

        <div>
          <h2 className="font-spaceGrotesk text-[14px] font-medium">
            Release date
          </h2>
          <p className="font-spaceGrotesk text-[14px]">30-09-2024</p>
        </div>

        <div>
          <h2 className="font-spaceGrotesk text-[14px] font-medium">
            Suply cap
          </h2>
          <p className="font-spaceGrotesk text-[14px]">Limited supply</p>
        </div>

        <div>
          <h2 className="font-spaceGrotesk text-[14px] font-medium">
            Suply cap
          </h2>
          <p className="font-spaceGrotesk text-[14px]">40</p>
        </div>

        <div>
          <h2 className="font-spaceGrotesk text-[14px] font-medium">
            Show limited edition badge?
          </h2>
          <p className="font-spaceGrotesk text-[14px]">Show badge</p>
        </div>

        <div>
          <h2 className="font-spaceGrotesk text-[14px] font-medium">
            Release duration
          </h2>
          <p className="font-spaceGrotesk text-[14px]">Limited time</p>
        </div>

        <div>
          <h2 className="font-spaceGrotesk text-[14px] font-medium">
            Release duration
          </h2>
          <p className="font-spaceGrotesk text-[14px]">30 Days, 20 Hours</p>
        </div>

        <div>
          <h2 className="font-spaceGrotesk text-[14px] font-medium">
            Material/Composition
          </h2>
          <p className="font-spaceGrotesk text-[14px]">Cotton, Polyester</p>
        </div>

        <div>
          <h2 className="font-spaceGrotesk text-[14px] font-medium">
            Colour options
          </h2>
          <p className="font-spaceGrotesk text-[14px]">
            Yellow, Black, Magenta, Titanium, Bleached
          </p>
        </div>

        <div>
          <h2 className="font-spaceGrotesk text-[14px] font-medium">
            Target audience
          </h2>
          <p className="font-spaceGrotesk text-[14px]">Unisex</p>
        </div>

        <div>
          <h2 className="font-spaceGrotesk text-[14px] font-medium">
            Shipping options
          </h2>
          <p className="font-spaceGrotesk text-[14px]">
            Domestic and international shipping
          </p>
        </div>

        <div>
          <h2 className="font-spaceGrotesk text-[14px] font-medium">
            Estimated shipping time
          </h2>
          <p className="font-spaceGrotesk text-[14px]">
            2 Days within country, 10 Days international shipping
          </p>
        </div>
      </div>
    </>
  );
};

export default Reviews;
