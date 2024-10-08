"use client";

import Image from "next/image";
import Logo from "/public/assests/Luxela white logo 1.svg";
import Button from "@/app/components/Button/button";
import AuthNavbar from "../../AuthNavbar";
import Link from "next/link";
import { Input } from "@/app/components/Input/input";
import { useState } from "react";
import Stepper from "../stepper"

export default function Create() {
  const [data, setData] = useState({
    userName: "",
    emailAddress: "",
  });

  const handleChange = (e: { target: { value: string; name: string } }) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  // const [currentStep, setCurrentStep] = useState(0);
  // const NUMBER_OF_STEPS = 2;
  // const goToNextStep = () => {
  //   setCurrentStep((prev) => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1));
  //   if (currentStep === 2) {
  //   }
  // };
  // const goToPreviousStep = () =>
  //   setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1));
  return (
    <section className="bg-black w-full min-h-[100vh] pb-20">
      <div className="hidden lg:block">
        <AuthNavbar />
      </div>
      <div className="max-w[1440px] px-4 md:px-8 flex flex-col mx-auto justify-center items-center">
        <div className="text-white mt-5 max-w-md">
          <div className="mb-8 lg:mb-16 lg:hidden flex justify-center items-center">
            <Image className="max-sm:w-32" src={Logo} alt="logo" />
          </div>
          
          <section className="mt-10">
        <div className="text-center">
          <h2 className="font-medium text-lg font-aeonik">
            Sign In
          </h2>
          <p className="font-spaceGrotesk max-w-md lg:max-w-lg mt-2 mx-auto text-white/80 text-sm">
          Continue shopping by signing in to your Luxela account
          </p>
        </div>

        <Stepper currentStep={0} numberOfSteps={2} />

        <div className="font-spaceGrotesk">
          <div className="mt-5 sm:mx-auto sm:w-full max-w-md">
            <form className="space-y-4">
              <Input
                label="Email Address"
                name="emailAddress"
                type="email"
                value={data.emailAddress}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
            </form>
          </div>
        </div>
      </section>
          <Link href="/auth/signin/emailVerification">
            <Button>Proceed</Button>
          </Link>

        </div>
      </div>
    </section>
  );
}
