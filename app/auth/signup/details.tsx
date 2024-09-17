"use client";
import Input from "@/app/components/Input/input";
import { useState } from "react";
import Header from "./header";

export default function DetailsForm() {
  const [value, setValue] = useState("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className="font-sans flex min-h-full flex-col justify-center mb-10">
      <Header heading="additional details"/>
        <div className="mt-5 sm:mx-auto sm:w-full md:max-w-screen-lg">
          <form className="md:flex md:flex-row md:justify-between items-center md:space-x-8 lg:space-x-32">
           <div className="space-y-4 md:w-1/2">
           <Input
              label="First Name"
              name="firstName"
              value={value}
              type="text"
              placeholder="Enter your first name"
              onChange={handleChange}
            />

            <Input
              label="First Name"
              name="firstName"
              value={value}
              type="text"
              placeholder="Enter your first name"
              onChange={handleChange}
            />

            <Input
              label="First Name"
              name="firstName"
              value={value}
              type="text"
              placeholder="Enter your first name"
              onChange={handleChange}
            />
           </div>



           <div className="space-y-4 md:w-1/2 mt-4 md:mt-0">
           <Input
              label="First Name"
              name="firstName"
              value={value}
              type="text"
              placeholder="Enter your first name"
              onChange={handleChange}
            />

            <Input
              label="First Name"
              name="firstName"
              value={value}
              type="text"
              placeholder="Enter your first name"
              onChange={handleChange}
            />

            <Input
              label="First Name"
              name="firstName"
              value={value}
              type="text"
              placeholder="Enter your first name"
              onChange={handleChange}
            />
           </div>
          </form>
        </div>
      </div>
    </>
  );
}
