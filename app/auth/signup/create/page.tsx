"use client";
import Image from "next/image";
import Logo from "/public/assests/Luxela white logo 1.svg";
import Button from "@/app/components/Button/button";
import EmailVerification from "./emailVerfication";
// import Header from "../header";
import Stepper from "../stepper";
import { useState } from "react";
import CreateForm from "./createForm";
import AuthNavbar from "../../AuthNavbar";

export default function Create() {
  const [lastPage, setLastPage] = useState(false);

  const [currentStep, setCurrentStep] = useState(0);
  const NUMBER_OF_STEPS = 2;
  const goToNextStep = () => {
    setCurrentStep((prev) => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1));
    if (currentStep === 2) {
    }
  };
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
          {/* <div className="my-8 lg:mt-16 text-center">
        <h2 className="font-medium text-lg font-aeonik">Let’s Get Started</h2>
        <p className="font-spaceGrotesk max-w-md lg:max-w-lg mt-2 mx-auto text-white/80 text-sm">
          Kindly fill in the details below to create your Luxela account and
          join a community of fashion lovers. We’re excited to have you on
          board!
        </p>
      </div> */}

          <Stepper currentStep={currentStep} numberOfSteps={NUMBER_OF_STEPS} />

          <div className="mt-4">
            {currentStep === 0 ? (
              <CreateForm />
            ) : (
              <EmailVerification
                lastPage={lastPage}
                setLastPage={setLastPage}
              />
            )}
          </div>

          <div className={`${!lastPage ? "block" : "hidden"}`}>
            <Button onClick={goToNextStep}>Proceed</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
