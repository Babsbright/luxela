"use client";
import Button from "@/app/components/Button/button";
import Input from "@/app/components/Input/input";
import Header from "./header";
import { useState } from "react";
import EmailVerification from "./emailVerfication";
interface Formprops {
  page: boolean;
  setPage: any;
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
        <div className="font-sans flex min-h-full flex-col justify-center">
          <Header heading="personal details"/>
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
