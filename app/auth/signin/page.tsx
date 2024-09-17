"use client";
import Input from "@/app/components/Input/input";
import { useState } from "react";
import Button from "@/app/components/Button/button";


export default function Login() {
  const [value, setValue] = useState("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <>
    <div className="font-sans w-full py-4 px-4 md:px-8 flex min-h-full flex-col justify-center">
    <div className="text-center my-4">
        <h2 className="font-semibold capitalize text-base">
          sign into your account
        </h2>
        <p className="max-w-md mt-2 mx-auto text-gray-400 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ratione
          consequuntur ut laborum inventore sequi assumenda paria
        </p>
      </div>
        <div className="mt-5 mx-auto w-full max-w-md">
          <form className="space-y-4">
            <Input
              label="Email Address"
              name="emailAddress"
              value={value}
              type="email"
              placeholder="Enter your email address"
              onChange={handleChange}
            />

            <Input
              label="Password"
              name="password"
              value={value}
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
