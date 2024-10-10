"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "./SidebarMenu";
import SearchIcon from "../icons/SearchIcon";
import ContactIcon from "../icons/ContactIcon";
import SettingsIcon from "../icons/Settings";

const Sidebar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDropdown = (dropdownId: string) => {
    setActiveDropdown((prev) => (prev === dropdownId ? null : dropdownId));
  };

  const mainMenuItems = menuItems.filter(
    (item) => item.title !== "Contact Support" && item.title !== "Settings"
  );

  const [brandimage, setBrandImage] = useState("");
  const [brandname, setBrandName] = useState("");
  useEffect(() => {
    setBrandImage(localStorage.getItem("brand-image"));
    setBrandName(localStorage.getItem("brandname"));
  }, []);
  return (
    <nav className="text-white flex  min-h-[1024px]  overflow-y-auto   flex-col max-w-[272px] justify-between">
      <div className="mt-[32.49px]">
        {/* Search Input */}
        <div className="px-[16px]">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#1A1A1A] border border-solid focus:outline-none border-[#2B2B2B] font-spaceGrotesk py-2 pl-10 pr-4 rounded-lg text-[#b3b3b3]"
            />
            <SearchIcon className="absolute top-2.5 left-2 w-5 h-5 text-[#b3b3b3]" />
          </div>
        </div>

        {/* Main Menu Items */}
        <ul className="mt-[40px] text-[15px] font-spaceGrotesk font-medium">
          {mainMenuItems.map(({ href, title, icon: Icon, subItems, count }) => (
            <li key={title} className="relative">
              {subItems ? (
                <div>
                  <div
                    className="flex items-center px-[16px] py-[7px] mt-[8px] cursor-pointer hover:bg-[#1F1F1F] w-full"
                    onClick={() => toggleDropdown(title)}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        pathname === href
                          ? "text-white fill-white"
                          : "text-[#b3b3b3] fill-[#b3b3b3]"
                      }`}
                    />
                    <span
                      className={`ml-4 ${
                        pathname === href ? "text-white" : "text-[#b3b3b3]"
                      }`}
                    >
                      {title}
                    </span>
                    <span className="ml-auto">
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === title ? "rotate-90" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#8451E1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>

                  {/* Dropdown Content */}
                  {activeDropdown === title && (
                    <ul className="pl-10 bg-[#1F1F1F]">
                      {subItems.map((subItem) => (
                        <li key={subItem.title}>
                          <Link href={subItem.href}>
                            <div
                              className={`flex items-center py-2 hover:text-white transition-colors ${
                                pathname === subItem.href
                                  ? "text-white"
                                  : "text-[#b3b3b3]"
                              }`}
                            >
                              {/* Render the icon next to the title */}
                              <subItem.icon className="w-5 h-5 text-[#b3b3b3]" />
                              <span className="ml-4">{subItem.title}</span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link href={href}>
                  <div
                    className={`flex items-center px-[16px] mt-[8px] py-[7px] hover:bg-[#1F1F1F] w-full ${
                      pathname === href
                        ? "bg-[#1A1A1A] text-white"
                        : "text-[#b3b3b3]"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        pathname === href ? "text-white" : "text-[#b3b3b3]"
                      }`}
                    />
                    <span className="ml-4">{title}</span>
                    {count && (
                      <span className="ml-auto text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                        {count}
                      </span>
                    )}
                  </div>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Section (Contact Support, Settings, and User Profile) */}
      <div className=" pb-[40px] ">
        <ul className="">
          {/* Contact Support */}
          {menuItems.find((item) => item.title === "Contact Support")?.href && (
            <li className="">
              <Link
                href={
                  menuItems.find((item) => item.title === "Contact Support")
                    ?.href || ""
                }
              >
                <div className="flex items-center py-[7px] px-[16px] cursor-pointer hover:bg-[#1F1F1F] w-full">
                  <ContactIcon className="w-5 h-5 text-[#b3b3b3]" />
                  <span className="ml-4 text-[#b3b3b3]">Contact Support</span>
                </div>
              </Link>
            </li>
          )}

          {/* Settings */}
          {menuItems.find((item) => item.title === "Settings")?.href && (
            <li className="">
              <Link
                href={
                  menuItems.find((item) => item.title === "Settings")?.href ||
                  ""
                }
              >
                <div className="flex items-center px-[16px] py-[7px] mt-[8px] cursor-pointer hover:bg-[#1F1F1F] w-full">
                  <SettingsIcon className="w-5 h-5 text-[#b3b3b3]" />
                  <span className="ml-4 text-[#b3b3b3]">Settings</span>
                </div>
              </Link>
            </li>
          )}

          {/* User Profile */}
          <div className="px-[16px]">
            <Link href={"/coming-soon"}>
              <li className="flex justify-between mt-[68px]  border border-solid border-[#2B2B2B] bg-[#212121] p-[6px] rounded-[8px] items-center">
                <div className="flex items-center gap-x-4">
                  <img
                    src={brandimage}
                    className="rounded-full w-8 h-8"
                    alt="user image"
                  />
                  <p className="text-sm text-white font-medium font-spaceGrotesk capitalize">
                    {brandname}{" "}
                  </p>
                  <p className="text-xs text-[#b3b3b3]">Seller</p>
                </div>

                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.84 0.931297L6.38588 6.38545C6.33523 6.43616 6.27507 6.47639 6.20886 6.50384C6.14265 6.53129 6.07168 6.54541 6 6.54541C5.92832 6.54541 5.85735 6.53129 5.79114 6.50384C5.72493 6.47639 5.66477 6.43616 5.61412 6.38545L0.159964 0.931297C0.0835992 0.855018 0.0315843 0.757796 0.0105038 0.651939C-0.0105768 0.546082 0.000224981 0.43635 0.0415416 0.336636C0.0828581 0.236921 0.152832 0.151708 0.242604 0.0917825C0.332376 0.0318573 0.43791 -8.47726e-05 0.545845 1.6897e-07H11.4542C11.5621 -8.47726e-05 11.6676 0.0318573 11.7574 0.0917825C11.8472 0.151708 11.9171 0.236921 11.9585 0.336636C11.9998 0.43635 12.0106 0.546082 11.9895 0.651939C11.9684 0.757796 11.9164 0.855018 11.84 0.931297Z"
                    fill="#8151FD"
                  />
                </svg>
              </li>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
