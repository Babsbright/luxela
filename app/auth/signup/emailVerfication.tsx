"use client";
import Input from "@/app/components/Input/input";
import { useState } from "react";
import Header from "./header";
type InputEvent = React.ChangeEvent<HTMLInputElement>;

export default function EmailVerification() {
  const [value, setValue] = useState("");
  const handleChange = (e: InputEvent) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className="font-spaceGrotesk">
      <Header heading="Email Verification"/>
      
        <div className="mt-5 sm:mx-auto sm:w-full max-w-md">
          <form className="space-y-4">
            <Input
              label="Email Verification"
              name="emailVerification"
              value={value}
              type="text"
              placeholder=""
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
    </>
  );
}
