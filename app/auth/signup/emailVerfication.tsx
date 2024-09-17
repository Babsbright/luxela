"use client";
import Input from "@/app/components/Input/input";
import { useState } from "react";
import Header from "./header";

export default function EmailVerification() {
  const [value, setValue] = useState("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className="font-sans flex min-h-full flex-col justify-center">
      <Header heading="email verification"/>
      
        <div className="mt-5 sm:mx-auto sm:w-full max-w-md">
          <form className="space-y-4">
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
