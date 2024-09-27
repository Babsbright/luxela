import React from "react";
import Image from "next/image";
import Logo from "/public/assests/Luxela white logo 1.svg";
import Sidebar from "../components/BrandDashboard/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={` h-screen flex overflow-hidden`}>
      <aside className="w-[265px]  lg:block text-center mx-auto text-secondary 2xl:w-[265px]">
        <Image src={Logo} alt="logo" className="mx-6" />
        <div className="flex h-[94%] overflow-y-hidden bg-[#141414] py-6 justify-between flex-col">
          <Sidebar />
          <div className="flex items-center gap-2 px-6">
            <h1 className="text-[#D80027]">Log out</h1>
          </div>
        </div>
      </aside>
      <main className="flex-1 px-4 lg:px-6 flex flex-col  py-3">
        {children}
      </main>
    </div>
  );
}
