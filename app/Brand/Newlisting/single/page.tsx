"use client";

import Additional from "@/app/components/BrandDashboard/SingleListing/Additional";
import Essentials from "@/app/components/BrandDashboard/SingleListing/Essentials";
import Reviews from "@/app/components/BrandDashboard/SingleListing/Reviews";
import { ArrowRightIcon } from "@/app/components/icons";
import PlusIcon from "@/app/components/icons/PlusIcon";
import UploadIcon from "@/app/components/icons/UploadIcon";
import React, { useRef, useState } from "react";

const Page = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      console.log(`Selected file: ${files[0].name}`);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const tabContent = [
    { title: "Essential questions", content: <Essentials /> },
    { title: "Additional questions", content: <Additional /> },
    { title: "Review input", content: <Reviews /> },
  ];
  return (
    <>
      {/* desktop version */}
      <div className="hidden lg:block">
        <div className="flex justify-between items-center px-[28px] ">
          <h2 className="font-spaceGrotesk text-[20px] font-medium">
            List a new item on Luxela
          </h2>
          <button className="flex items-center justify-center gap-[10px] font-spaceGrotesk font-medium w-[149px] h-[40px] bg-gradient-to-b from-luxela_lilac via-luxela_purple2 to-luxela_purple rounded-lg text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac">
            Proceed
            <span>
              <ArrowRightIcon />
            </span>
          </button>
        </div>
        <hr className="w-full mt-[17px] border-[#212121]" />
        <div className="px-[28px] mt-[24px]">
          <h3 className="font-spaceGrotesk text-[14px]">
            We do not exist as a singular element. Our genetic make up is a
            stepping stone to our individuality, but even then, our genetic make
            up is not a singular entity. As we grow, we learn and unlearn, we
            experience and we forget, we take and we give back. There’s more
            variation in our individuality per day.
          </h3>
          <div className="mt-[40px] flex gap-[60px]">
            <div className="w-full max-w-[420px]">
              <h2 className="font-spaceGrotesk text-[14px]">
                Product image or video* (Maximum of 4 images)
              </h2>
              <div className="mt-[24px]">
                <div
                  className="flex flex-col items-center justify-center h-[350px] border-dashed border-2 border-[#595959] bg-[#1A1A1A] text-center text-white rounded-[12px] cursor-pointer"
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
                    <p className=" text-[#8451E1] text-[12px]">
                      Max file size: 10mb
                    </p>
                  </div>
                </div>
                <div className="mt-[16px] flex gap-[20px] w-full items-center">
                  <div className="flex flex-col items-center justify-center h-[128px] max-w-[126.67px] w-full border-dashed border-2 border-[#595959] bg-[#1A1A1A] text-center text-white rounded-[12px] cursor-pointer">
                    <PlusIcon />
                  </div>
                  <div className="flex flex-col items-center justify-center h-[128px] max-w-[126.67px] w-full border-dashed border-2 border-[#595959] bg-[#1A1A1A] text-center text-white rounded-[12px] cursor-pointer">
                    <PlusIcon />
                  </div>
                  <div className="flex flex-col items-center justify-center h-[128px] max-w-[126.67px] w-full border-dashed border-2 border-[#595959] bg-[#1A1A1A] text-center text-white rounded-[12px] cursor-pointer">
                    <PlusIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[520px]">
              <div className="flex gap-[20px]">
                {tabContent.map((tab, index) => (
                  <button
                    key={index}
                    className={`text-[14px] font-medium  font-spaceGrotesk transition-colors duration-300 ${
                      activeTab === index
                        ? "text-[#8451E1] border-b-2 px-[14px] py-[9px]  border-[#8451E1]"
                        : "text-[#DCDCDC] "
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Content Section */}
              <div className="mt-[24px]">
                <div>{tabContent[activeTab].content}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile section */}
      <div className="lg:hidden block">
        <div>
          <h2 className="font-spaceGrotesk text-[16px] text-white font-medium">
            List a new item on Luxela
          </h2>
          <p className="font-spaceGrotesk text-[14px] mt-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-[24px] flex flex-col gap-[60px]">
          <div className="flex gap-[10px] w-full">
            {tabContent.map((tab, index) => (
              <button
                key={index}
                className={`max-w-[113.67px] w-full h-[10px] rounded-full transition-colors duration-300 ${
                  activeTab === index
                    ? "bg-[#8451E1] border-[#8451E1] text-white"
                    : "bg-[#333333] text-[#DCDCDC]"
                }`}
                onClick={() => setActiveTab(index)}
              ></button>
            ))}
          </div>
        
          <div className="w-full max-w-[520px] sm:max-w-full">
            <div className="mt-[40px]">
              <div>{tabContent[activeTab].content}</div>
            </div>
            <div className="w-full flex justify-center mt-[60px] mb-[130px]">
            {activeTab === 2 ? (
              <button className="flex lg:hidden items-center justify-center gap-[10px] font-spaceGrotesk font-medium w-full h-[40px] bg-gradient-to-b from-luxela_lilac via-luxela_purple2 to-luxela_purple rounded-lg text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac">
                Submit for Review
                <span>
                  <ArrowRightIcon />
                </span>
              </button>
            ) : (
              <button className="flex lg:hidden items-center justify-center gap-[10px] font-spaceGrotesk font-medium w-full h-[40px] bg-gradient-to-b from-luxela_lilac via-luxela_purple2 to-luxela_purple rounded-lg text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac">
                Proceed
                <span>
                  <ArrowRightIcon />
                </span>
              </button>
            )}
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
