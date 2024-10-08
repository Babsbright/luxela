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
        <div className="mt-8 text-center">
          <h2 className="font-medium text-lg font-aeonik">
            {" "}
            Verify Your Email
          </h2>
          <p className="font-spaceGrotesk max-w-md lg:max-w-lg mt-2 mx-auto text-white/80 text-sm">
            We&apos;re almost there! Please check your inbox and click the
            verification link to confirm your email. This helps us keep your
            Luxela account secure and ready for your fashion journey.
          </p>
        </div>

        <Stepper currentStep={2} numberOfSteps={2} />

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
            <Link href={"/auth/signup/terms"}>
              <Button>Proceed</Button>
            </Link>
        
        </div>
      </div>
      </section>
    </>
  );
}
