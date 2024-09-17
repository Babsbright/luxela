"use client";
import React, { useState } from "react";
import Form1 from "./create";
import Stepper from "./stepper";
import Button from "@/app/components/Button/button";

export default function SignUp() {
  const [page, setpage] = useState(false);

  const [currentStep, setCurrentStep] = React.useState(0);
  const NUMBER_OF_STEPS = 3;

  const goToNextStep = () =>
    setCurrentStep((prev) => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1));
  const goToPreviousStep = () =>
    setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1));

  return (
    <div className="font-sans w-full py-4 px-4 md:px-8">
      <div className="text-center my-4">
        <h2 className="font-semibold capitalize text-base">
          create your account
        </h2>
        <p className="max-w-md mt-2 mx-auto text-gray-400 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ratione
          consequuntur ut laborum inventore sequi assumenda paria
        </p>
      </div>
      <Stepper currentStep={currentStep} numberOfSteps={NUMBER_OF_STEPS} />
      <div className="mt-4">
        {currentStep === 0 ? <Form1 page={page} setPage={setpage}/> : "llllllllllllll"}
      </div>
      {page && (
      <Button onClick={goToNextStep}>Proceed</Button>
    )}

      {/* <section className="flex gap-10">
        <button
          onClick={goToPreviousStep}
          className="bg-blue-600 text-white p-2 rounded-md"
        >
          Previous step
        </button>
        <button
          onClick={goToNextStep}
          className="bg-blue-600 text-white p-2 rounded-md"
        >
          Next step
        </button>
      </section> */}
    </div>
  );
}
