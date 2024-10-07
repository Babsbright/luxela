"use client";
import { Input } from "@/app/components/Input/input";
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
        <div className="my-8 lg:mt-16 text-center">
          <h2 className="font-medium text-lg font-aeonik">
            Let&apos;s Get Started
          </h2>
          <p className="font-spaceGrotesk max-w-md lg:max-w-lg mt-2 mx-auto text-white/80 text-sm">
            Kindly fill in the details below to create your Luxela account and
            join a community of fashion lovers. We&apos;re excited to have you
            on board!
          </p>
        </div>
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
