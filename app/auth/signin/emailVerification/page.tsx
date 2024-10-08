"use client";
import { Input } from "@/app/components/Input/input";
import { useState } from "react";
import Link from "next/link";
import Button from "@/app/components/Button/button";
import Stepper from "../stepper";
import AuthNavbar from "../../AuthNavbar";

type InputEvent = React.ChangeEvent<HTMLInputElement>;

export default function EmailVerification() {
  const [value, setValue] = useState("");
  const handleChange = (e: InputEvent) => {
    setValue(e.target.value);
  };
  return (
    <>
     <section className="bg-black w-full min-h-[100vh] pb-20">
      <div className="hidden lg:block">
        <AuthNavbar />
      </div>
      <div className="font-spaceGrotesk">
        <div className="mt-14 text-center">
          <h2 className="font-medium text-lg font-aeonik">
            {" "}
            Verify Your Account
          </h2>
          <p className="font-spaceGrotesk max-w-md lg:max-w-lg mt-2 mx-auto text-white/80 text-sm">
          Please enter the OTP sent to your Email address, this verfication process ensures your account&apos;s security. Your OTP is valid for 5 minutes.
          </p>
        </div>

        <Stepper currentStep={1} numberOfSteps={2} />

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
            <Link href={"/Home"}>
              <Button>Proceed</Button>
            </Link>
        
        </div>
      </div>
      </section>
    </>
  );
}
