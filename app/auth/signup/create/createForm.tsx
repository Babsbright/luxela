"use client";
import Input from "@/app/components/Input/input";
import { useState } from "react";
import Image from "next/image";
import profile from "/public/assests/profilepic.svg";

export default function CreateForm() {
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
    <>
      <section className="">
        <div className="flex justify-center cursor-pointer my-4">
          <Image
            className="w-20 lg:w-28 hover:bg-luxela_lilac"
            src={profile}
            alt="profile"
          />
        </div>

        <div className="font-spaceGrotesk">
          <div className="mt-5 sm:mx-auto sm:w-full max-w-md">
            <form className="space-y-4">
              <Input
                label="Username"
                name="userName"
                value={data.userName}
                type="text"
                placeholder="Enter your username"
                onChange={handleChange}
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
      </section>
    </>
  );
}
