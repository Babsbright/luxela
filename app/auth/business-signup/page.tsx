"use client";
import { Input } from "@/app/components/Input/input";
import { useState } from "react";
import Image from "next/image";
import camera from "/public/assests/camera.svg";
import cameraCircle from "/public/assests/camera-circle.svg";
import Button from "@/app/components/Button/button";
import AuthNavbar from "../AuthNavbar";
import Logo from "/public/assests/Luxela white logo 1.svg";

export default function BusinessSignup() {
  const [data, setData] = useState({
    brandName: "",
    emailAddress: "",
    country: "",
    website: "",
  });

  const handleChange = (e: { target: { value: string; name: string } }) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  return (
    <>
      <section className="bg-black w-full min-h-[100vh] pb-20">
        <div className="hidden lg:block">
          <AuthNavbar />
        </div>
        <div className="max-w[1440px] px-4 md:px-12 flex flex-col">
          <div className="text-white mt-5 mb-10">
            <div className="lg:hidden flex justify-center items-center">
              <Image className="max-sm:w-32" src={Logo} alt="logo" />
            </div>

            <div className="my-8 lg:mt-10 text-left">
              <h2 className="font-medium text-lg font-aeonik">
                Create your account
              </h2>
              <p className="font-spaceGrotesk mt-2 text-white/80 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                dicta similique
              </p>
            </div>

            <section className="bg-zinc-900  relative w-full p-4 rounded-md">
              <div className="flex flex-col items-center cursor-pointer my-4">
                <Image className="w-12" src={camera} alt="camera" />
                <p className="text-xs text-white/70 mt-2">
                  Supported formats are .png and .jpeg
                </p>
              </div>

              <div className="absolute left-8 top-20">
                <Image
                  className="w-24 lg:w-28 cursor-pointer"
                  src={cameraCircle}
                  alt="camera"
                />
              </div>
            </section>

            <section className="font-spaceGrotesk flex flex-col lg:flex-row max-lg:gap-y-12 gap-x-12 mt-24 justify-between items-start">
              <div className="w-full lg:w-1/2">
                <p className="mb-4 text-[15px]">General Information</p>
                <form className="space-y-5">
                  <Input
                    label="Brand name"
                    name="userName"
                    value={data.brandName}
                    type="text"
                    placeholder="Select a category that best fits this product"
                    onChange={handleChange}
                  />

                  <Input
                    label="Official email address"
                    name="emailAddress"
                    type="email"
                    value={data.emailAddress}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                  />

                  <Input
                    label="Country of residence"
                    name="userName"
                    value={data.country}
                    type="text"
                    placeholder="Select country"
                    onChange={handleChange}
                  />

                  <Input
                    label="Official brand website"
                    name="userName"
                    value={data.website}
                    type="text"
                    placeholder="Your website URL"
                    onChange={handleChange}
                  />
                </form>

                <div>
                  <p className="mt-8 mb-2 text-[15px]">
                    Logistics and Shipping
                  </p>
                  <p className="text-sm mt-5">Types of shipping</p>
                  <div className="flex gap-x-4 text-sm text-white/70 my-3">
                    <div className="text-center p-3 w-1/2 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac">
                      <p>Domestic shipping only</p>
                    </div>
                    <div className="text-center p-3 w-1/2 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac">
                      <p>Domestic and international shipping</p>
                    </div>
                  </div>

                  <p className="text-sm mt-5">Refund Policy</p>
                  <div className="flex gap-x-4 text-sm text-white/70 my-3">
                    <div className="text-center p-3 w-1/2 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac">
                      <p>No refund policy</p>
                    </div>
                    <div className="text-center p-3 w-1/2 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac">
                      <p>We accept refunds</p>
                    </div>
                  </div>

                  <p className="text-sm mt-5">Period until refund is null</p>
                  <select
                    className="w-full text-sm my-3 p-3 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac"
                    name="product"
                    id=""
                    aria-placeholder="Select a value that best suits your product"
                  >
                    <option value="1">value 1</option>
                  </select>

                  <p className="text-sm mt-5">Estimated shipping time</p>
                  <div className="flex gap-x-4 text-sm text-white/70 my-3">
                    <div className="text-center p-3 w-1/2 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac">
                      <p>00 Days</p>
                    </div>
                    <div className="text-center p-3 w-1/2 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac">
                      <p>00 Minutes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <p className="mb-4 text-[15px]">Additional Information</p>

                <p className="text-sm">Type of fashion products sold</p>
                <div className="flex gap-x-4 text-sm text-white/70 my-3">
                  <div className="text-center p-3 w-1/3 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac">
                    <p>Clothing</p>
                  </div>
                  <div className="text-center p-3 w-1/3 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac">
                    <p>Shoes</p>
                  </div>
                  <div className="text-center p-3 w-1/3 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac">
                    <p>Cosmectic products</p>
                  </div>
                </div>
                <div className="flex gap-x-4 text-sm text-white/70 my-3">
                  <div className="text-center p-3 w-1/3 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac">
                    <p>Accessories</p>
                  </div>
                  <div className="text-center p-3 w-1/3 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac">
                    <p>Merch</p>
                  </div>
                  <div className="text-center p-3 w-1/3 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac">
                    <p>Others</p>
                  </div>
                </div>

                <p className="text-sm mt-5">Target audience</p>
                <div className="flex gap-x-4 text-sm text-white/70 my-3">
                  <div className="text-center p-3 w-1/3 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac">
                    <p>Male</p>
                  </div>
                  <div className="text-center p-3 w-1/3 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac">
                    <p>Female</p>
                  </div>
                  <div className="text-center p-3 w-1/3 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac">
                    <p>Unisex</p>
                  </div>
                </div>

                <p className="text-sm mt-5">Local pricing or currency</p>
                <select
                  className="w-full text-sm my-3 p-3 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac"
                  name="product"
                  id=""
                  aria-placeholder="Select your local pricing or currency"
                >
                  <option value="1">Naira</option>
                </select>

                <p className="text-sm mt-5">Preferred payment method</p>
                <div className="flex gap-x-4 text-sm text-white/70 my-3">
                  <div className="text-center p-3 w-1/2 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac">
                    <p>Fiat (Local currency)</p>
                  </div>
                  <div className="text-center p-3 w-1/2 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac">
                    <p>Cryptocurrency</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <Button>Proceed</Button>
        </div>
      </section>
    </>
  );
}
