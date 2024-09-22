"use client";
import Button from "@/app/components/Button/button";
import Input from "@/app/components/Input/input";
import Header from "./header";
import { useState } from "react";
import EmailVerification from "./emailVerfication";
import { Dispatch, SetStateAction } from "react";

interface Formprops {
  page: boolean;
  setPage: Dispatch<SetStateAction<boolean>>;
}

export default function CreateForm(props: Formprops) {
  
  const [data, setData] = useState({
    firstName: "",
    emailAddress: "",
    lastName: "",
  });


  const handleChange = (e: { target: { value: string; name: string; }; }) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };
  
   
  return (
    <>
      {!props.page ? (
        <div className="font-spaceGrotesk">
          <Header heading="Personal details"/>
          <div className="mt-5 sm:mx-auto sm:w-full max-w-md">
            <form className="space-y-4">
              <Input
                label="First Name"
                name="firstName"
                value={data.firstName}
                type="text"
                placeholder="Enter your first name"
                onChange={handleChange}
              />

              <Input
                label="Last Name"
                name="lastName"
                type="text"
                value={data.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
              />

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
      ) : (
        <EmailVerification />
      )}
      {!props.page && (
        <Button onClick={() => props.setPage(true)}>Proceed</Button>
      )}
    </>
  );
}
