"use client";
import Input from "@/app/components/Input/input";
import { useState } from "react";

export default function EmailVerification() {
  const [value, setValue] = useState("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className="font-sans flex min-h-full flex-col justify-center">
        <div className="text-center">
          <h2 className="font-semibold capitalize text-sm">
            email verification
          </h2>
          <p className="max-w-md mt-2 mx-auto text-gray-400 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
            ratione consequuntur ut laborum inventore sequi assumenda paria
          </p>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full max-w-md">
          <form className="space-y-4" action="#" method="POST">
            <Input
              label="First Name"
              name="firstName"
              value={value}
              type="text"
              placeholder="Enter your first name"
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
    </>
  );
}
