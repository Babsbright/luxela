"use client";
import { useState } from "react";
import Stepper from "../../signup/stepper"
import { Input } from "../../../components/Input/input";

export default function SigninForm() {
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

  return (
    <main>
      <section className="">
        <div className="text-center">
          <h2 className="font-medium text-lg font-aeonik">
            Login
          </h2>
          <p className="font-spaceGrotesk max-w-md lg:max-w-lg mt-2 mx-auto text-white/80 text-sm">
            Kindly fill in the details to login into your Luxela account
          </p>
        </div>

        <Stepper currentStep={1} numberOfSteps={2} />

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
    </main>
  );
}
