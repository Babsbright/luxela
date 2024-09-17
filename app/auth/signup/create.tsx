"use client";
import Button from "@/app/components/Button/button";
import Input from "@/app/components/Input/input";
import Link from "next/link";
import { useState } from "react";
import EmailVerification from "./emailVerfication";
interface Formprops {
  page: boolean;
  setPage: any;
}
export default function CreateForm(props: Formprops) {
  const [value, setValue] = useState("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <>
      {!props.page ? (
        <div className="font-sans flex min-h-full flex-col justify-center">
          <div className="text-center">
            <h2 className="font-semibold capitalize text-sm">
              personal details
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

              <Input
                label="Last Name"
                name="lastName"
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Enter your last name"
              />

              <Input
                label="Email Address"
                name="emailAddress"
                type="email"
                value={value}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
            </form>
          </div>
        </div>
      ) : (
        <EmailVerification />
      )}
      {!props.page && (
        <Button onClick={() => props.setPage(!props.page)}>Proceed</Button>
      )}
    </>
  );
}
