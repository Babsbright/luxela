import React from "react";
import Image from "next/image";
import Logo from "/public/assests/Luxela white logo 1.svg";
import Sidebar from "../components/BrandDashboard/Sidebar";
import MobileHeader from "../components/BrandDashboard/MobileHeader";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`flex lg:flex-row flex-col `}>
      <aside className="w-[272px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 h-screen  hidden  lg:block pt-[24px] bg-[#141414] mx-auto text-secondary">
        <Image
          src={Logo}
          alt="logo"
          className="w-[148px] h-[24.15px] mx-auto"
        />
        <div className="bg-[#141414] ">
          <Sidebar />
        </div>
      </aside>
      <aside className="lg:hidden block">
        <MobileHeader />
      </aside>
      <main className="flex-1 flex flex-col px-[16px] lg:px-[28px] py-[24px]  lg:py-[17px]">
        {children}
      </main>
    </div>
  );
}
