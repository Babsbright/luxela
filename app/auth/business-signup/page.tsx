"use client";
import { Input } from "@/app/components/Input/input";
import { CustomSelect } from "@/app/components/Input/input";
import { useState } from "react";
import Image from "next/image";
import camera from "/public/assests/camera.svg";
import cameraCircle from "/public/assests/camera-circle.svg";
import Button from "@/app/components/Button/button";
import AuthNavbar from "../AuthNavbar";
import Logo from "/public/assests/Luxela white logo 1.svg";
import { useRouter } from "next/navigation";
import axios from "axios";
import Loader from "../Loader/index";

import { ToastContainer, toast } from "react-toastify";
import {
  target,
  // brands,
  countries,
  currencies,
  refundPeriods,
  productType,
  productType2,
  paymentMethod,
  refundPolicy,
  shipping,
} from "./data";
import "./styles.css";

export default function BusinessSignup() {
  const [data, setData] = useState({
    userName: "",
    emailAddress: "",
    country: "",
    website: "",
  });
  const router = useRouter();

  // const [brand, setBrand] = useState<(typeof brands)[number]>(
  //   "Select a category that best fits this product"
  // );

  const [country, setCountry] =
    useState<(typeof countries)[number]>("Select country");

  const [refund, setRefunds] = useState<(typeof countries)[number]>("3 Days");

  const [currency, setCurrency] =
    useState<(typeof currencies)[number]>("Select currency");

  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e: { target: { value: unknown; name: string } }) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const userData = {
      name: data.userName,
      email: data.emailAddress,
      role: "seller",
    };
    setLoading(true);
    axios
      .post("https://luxela.onrender.com/api/v1/luxela/auth/signup", userData)
      /* eslint-disable @typescript-eslint/no-unused-vars */
      .then((response) => {
        console.log(response);
        setLoading(false);
        localStorage.setItem("brandname", response.data.data.saveData.name);
        toast.success("Account Created Successfully", { autoClose: 3000 });
        router.push("/auth/business-signin");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          toast.error(`${error.response.data.error}`, { autoClose: 3000 });
        } else if (error.request) {
          toast.error("Network Error", { autoClose: 3000 });
        } else {
          console.log(error);
        }
      });
  };

  return (
    <>
      <section className="bg-black w-full min-h-[100vh] pb-20">
        <div className="hidden lg:block">
          <AuthNavbar />
        </div>
        <div className="max-w-[1440px] px-4 md:px-12 flex flex-col mx-auto">
          <div className="text-white mt-5 mb-10">
            <div className="lg:hidden flex justify-center items-center">
              <Image className="max-sm:w-32" src={Logo} alt="logo" />
            </div>

            <div className="my-8 lg:mt-10 text-left">
              <h2 className="font-medium text-lg font-aeonik">
                Create your account
              </h2>
              <p className="font-spaceGrotesk mt-2 text-white/80 text-sm">
                Kindly fill in the details below to create your Luxela business
                account and join a community of fashion lovers. We&apos;re
                excited to have you on board!
              </p>
            </div>

            <section className="bg-zinc-900  relative w-full p-4 rounded-md">
              <div className="flex flex-col items-center cursor-pointer my-6">
                <br />
                <input
                  style={{ display: "none" }}
                  type="file"
                  name="myImage"
                  id="myImage"
                  // Event handler to capture file selection and update the state
                  onChange={(event) => {
                    setSelectedImage(event.target.files[0]); // Update the state with the selected file
                    const file = event.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        localStorage.setItem(
                          "brand-image",
                          reader.result as string
                        );
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                <label htmlFor="myImage">
                  <div className="flex flex-col justify-center items-center">
                    <Image
                      className="w-12 h-auto cursor-pointer hover:border hover:border-luxela_purple"
                      src={camera}
                      alt="camera"
                    />
                    <p className="text-xs text-white/70 mt-2">
                      Supported formats are .png and .jpeg
                    </p>
                  </div>
                </label>
              </div>

              <div className="absolute left-8 top-36 sm:top-32 lg:top-20">
                {selectedImage ? (
                  <div>
                    {/* Display the selected image */}
                    <img
                      alt="not found"
                      className="rounded-full w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28"
                      src={URL.createObjectURL(selectedImage)}
                    />
                  </div>
                ) : (
                  <div className="relative">
                    <div className="relative left-8 top-6">
                      <Image
                        className="w-24 lg:w-28 cursor-pointer"
                        src={cameraCircle}
                        alt="profile"
                      />
                    </div>
                  </div>
                )}
              </div>
            </section>

            <section className="font-spaceGrotesk flex flex-col lg:flex-row max-lg:gap-y-12 gap-x-12 mt-24 justify-between items-start">
              <div className="w-full lg:w-1/2">
                <p className="mb-4 text-[15px]">General Information</p>
                <form className="space-y-5">
                  <Input
                    label="Brand name"
                    name="userName"
                    type="text"
                    value={data.userName}
                    onChange={handleChange}
                    placeholder="Enter your brand name"
                  />

                  <Input
                    label="Official email address"
                    name="emailAddress"
                    type="email"
                    value={data.emailAddress}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                  />

                  <CustomSelect
                    value={country}
                    onChange={setCountry}
                    options={countries}
                    label="Country of residence"
                  />

                  <Input
                    label="Official brand website"
                    name="website"
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
                  <div
                    className="flex gap-x-4 text-sm text-white/70 my-3"
                    id="radios"
                  >
                    {shipping.map((item) => {
                      return (
                        <>
                          <input
                            key={item.name}
                            type="radio"
                            name="sGroup"
                            value={item.value}
                            id={item.id}
                          />
                          <label
                            className="check text-center p-3 w-1/2 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac"
                            htmlFor={item.id}
                          >
                            {item.name}
                          </label>
                        </>
                      );
                    })}
                  </div>

                  <p className="text-sm mt-5">Refund Policy</p>
                  <div
                    className="flex gap-x-4 text-sm text-white/70 my-3"
                    id="radios"
                  >
                    {refundPolicy.map((item) => {
                      return (
                        <>
                          <input
                            key={item.name}
                            type="radio"
                            name="rGroup"
                            value={item.value}
                            id={item.id}
                          />
                          <label
                            className="check text-center p-3 w-1/2 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac"
                            htmlFor={item.id}
                          >
                            {item.name}
                          </label>
                        </>
                      );
                    })}
                  </div>

                  <CustomSelect
                    value={refund}
                    onChange={setRefunds}
                    options={refundPeriods}
                    label="Period until refund is null"
                  />

                  <p className="text-sm mt-5">Estimated shipping time</p>
                  <div className="flex gap-x-4 text-sm text-white/70 my-3">
                    <div className="text-center p-3 w-1/2 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac">
                      <input
                        className="bg-transparent focus:outline-none w-1/2"
                        type="text"
                        placeholder="00 Days"
                      />
                    </div>
                    <div className="text-center p-3 w-1/2 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac">
                      <input
                        className="bg-transparent focus:outline-none w-1/2"
                        type="text"
                        placeholder="00 Minutes"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <p className="mb-4 text-[15px]">Additional Information</p>

                <p className="text-sm mb-5">Type of fashion products sold</p>

                <div
                  className="flex gap-x-4 mb-10 text-sm text-white/70 my-3"
                  id="checkboxes"
                >
                  {productType.map((item) => {
                    return (
                      <div key={item.name}>
                        <input
                          key={item.name}
                          type="checkbox"
                          name="rGroup"
                          value={item.value}
                          id={item.id}
                        />
                        <label
                          className="check text-center p-3 w-1/3 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac"
                          htmlFor={item.id}
                        >
                          {item.name}
                        </label>
                      </div>
                    );
                  })}
                </div>

                <div
                  className="flex gap-x-4 text-sm text-white/70 my-3"
                  id="checkboxes"
                >
                  {productType2.map((item) => {
                    return (
                      <div key={item.name}>
                        <input
                          key={item.name}
                          type="checkbox"
                          name="rGroup"
                          value={item.value}
                          id={item.id}
                        />
                        <label
                          className="check text-center p-3 w-1/3 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac"
                          htmlFor={item.id}
                        >
                          {item.name}
                        </label>
                      </div>
                    );
                  })}
                </div>

                <p className="text-sm my-5">Target audience</p>
                <div
                  className="flex gap-x-4 text-sm mb-5 text-white/70 my-3"
                  id="checkboxes"
                >
                  {target.map((item) => {
                    return (
                      <div key={item.name}>
                        <input
                          key={item.name}
                          type="checkbox"
                          name="rGroup"
                          value={item.value}
                          id={item.id}
                        />
                        <label
                          className="check text-center p-3 w-1/3 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac"
                          htmlFor={item.id}
                        >
                          {item.name}
                        </label>
                      </div>
                    );
                  })}
                </div>

                <CustomSelect
                  value={currency}
                  onChange={setCurrency}
                  options={currencies}
                  label="Local pricing or currency"
                />

                <p className="text-sm my-5">Preferred payment method</p>
                <div
                  className="flex gap-x-4 text-sm text-white/70 my-3"
                  id="checkboxes"
                >
                  {paymentMethod.map((item) => {
                    return (
                      <div key={item.name}>
                        <input
                          key={item.name}
                          type="checkbox"
                          name="rGroup"
                          value={item.value}
                          id={item.id}
                        />
                        <label
                          className="check text-center p-3 w-1/2 bg-zinc-800 rounded-md hover:border hover:border-luxela_lilac"
                          htmlFor={item.id}
                        >
                          {item.name}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
          <Button disabled={loading ? true : false} onClick={handleSubmit}>
            {loading ? (
              <span className="flex flex-col items-center">
                <Loader />
              </span>
            ) : (
              "Proceed"
            )}
          </Button>
        </div>
        <ToastContainer
          progressClassName="toastProgress"
          bodyClassName="toastBody"
        />
      </section>
    </>
  );
}
