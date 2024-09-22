"use client";
import Input from "@/app/components/Input/input";
import { useState } from "react";
import Header from "./header";

export default function DetailsForm() {
  const [data, setData] = useState({
    dateOfBirth: "",
    gender: "",
    country: "",
    shippingaddress: "",
    stylePreference: "",
    sizePreference: "",
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
      <div className="font-spaceGrotesk">
        <Header heading="Additional details" />
        <div className="mt-5 sm:mx-auto sm:w-full md:max-w-screen-lg">
          <form className="md:flex md:flex-row md:justify-between items-center md:space-x-8 lg:space-x-32">
            <div className="space-y-4 md:w-1/2">
              <Input
                label="Date of Birth(Optional)"
                name="dateOfBirth"
                value={data.dateOfBirth}
                type="text"
                placeholder="Enter your date of birth"
                onChange={handleChange}
              />

              <Input
                label="Gender"
                name="gender"
                value={data.gender}
                type="text"
                placeholder="Enter your gender"
                onChange={handleChange}
              />

              <Input
                label="Country"
                name="country"
                value={data.country}
                type="text"
                placeholder="Enter your country"
                onChange={handleChange}
              />
            </div>

            <div className="space-y-4 md:w-1/2 mt-4 md:mt-0">
              <Input
                label="Shipping Address"
                name="shippingaddress"
                value={data.shippingaddress}
                type="text"
                placeholder="Enter your shipping address"
                onChange={handleChange}
              />

              <Input
                label="Style Preference"
                name="stylePreference"
                value={data.stylePreference}
                type="text"
                placeholder="Enter your style preference"
                onChange={handleChange}
              />

              <Input
                label="Size Preference"
                name="sizePreference"
                value={data.sizePreference}
                type="text"
                placeholder="Enter your size preference"
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
