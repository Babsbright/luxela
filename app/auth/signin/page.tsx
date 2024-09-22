"use client";
import Input from "@/app/components/Input/input";
import { useState } from "react";
import Button from "@/app/components/Button/button";
import AuthNavbar from "../AuthNavbar";

export default function Login() {
  const [data, setData] = useState({
    emailAddress: "",
    password: "",
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
      <AuthNavbar />

      <div className="w-full px-4 md:px-8 mt-4 mb-12 flex min-h-full flex-col justify-center max-w-[1440px] mx-auto">
        <div className="text-center my-4">
          <h2 className="font-medium text-lg font-aeonik">
            Sign into your account
          </h2>
          <p className="font-spaceGrotesk max-w-lg mt-2 mx-auto text-gray-500 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
            ratione consequuntur ut laborum inventore sequi assumenda paria
          </p>
        </div>
        <div className="font-spaceGrotesk mt-5 mx-auto w-full max-w-md">
          <form className="space-y-4">
            <Input
              label="Email Address"
              name="emailAddress"
              value={data.emailAddress}
              type="email"
              placeholder="Enter your email address"
              onChange={handleChange}
            />

            <Input
              label="Password"
              name="password"
              value={data.password}
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />

            <Button>Proceed</Button>
          </form>
        </div>
      </div>
    </>
  );
}
