import React from "react";
import Image from "next/image";
import Logo from "/public/assests/Luxela white logo 1.svg";
import Sidebar from "../components/BrandDashboard/Sidebar";
import MobileHeader from "../components/BrandDashboard/MobileHeader";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`lg:flex lg:flex-row `}>
      <aside className="w-[272px] overflow-y-auto fixed scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 h-screen  hidden  lg:block pt-[24px] bg-[#141414] mx-auto text-secondary">
        <Link href={"/Home"}>
          <Image
            src={Logo}
            alt="logo"
            className="w-[148px] h-[24.15px] mx-auto"
          />
        </Link>
        <div className="bg-[#141414] ">
          <Sidebar />
        </div>
      </aside>
      <aside className="lg:hidden block ">
        <div className="">
          <MobileHeader />
        </div>
      </aside>
      <main className="flex-1 flex flex-col lg:ml-[272px] px-[16px] lg:px-0 py-[24px] lg:py-[17px] overflow-y-auto h-full">
        {children}
      </main>
    </div>
  );
}
