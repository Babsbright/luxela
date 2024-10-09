"use client";
import { Input } from "@/app/components/Input/input";
import { useState } from "react";
import Image from "next/image";
import profile from "/public/assests/profilepic.svg";
import Stepper from "../stepper";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Button from "@/app/components/Button/button";
import { ToastContainer, toast } from "react-toastify";

export default function CreateForm() {
  const router = useRouter();
  const [data, setData] = useState({
    userName: "",
    emailAddress: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: { value: unknown; name: string } }) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const userData = {
      name: data.userName,
      email: data.emailAddress,
      role: "buyer",
    };
    setLoading(true)
    axios
      .post("https://luxela.onrender.com/api/v1/luxela/auth/signup", userData)
      .then((response) => {
        if (response.data.token) {
          router.push("/login");
        }
        setLoading(false);
        toast.success("Account Created Successfully", { autoClose: 3000 });
        router.push("/auth/signup/emailVerification");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          toast.error(`${error.response.data.error}`, { autoClose: 3000 });
        } else if (error.request) {
          toast.error("Network Error", { autoClose: 3000 });
        } else {
          console.log(error);
        }
      });
  };

  return (
    <>
      <section className="">
        <div className="text-center">
          <h2 className="font-medium text-lg font-aeonik">
            Let&apos;s Get Started
          </h2>
          <p className="font-spaceGrotesk max-w-md lg:max-w-lg mt-2 mx-auto text-white/80 text-sm">
            Kindly fill in the details below to create your Luxela account and
            join a community of fashion lovers. We&apos;re excited to have you
            on board!
          </p>
        </div>

        <Stepper currentStep={0} numberOfSteps={2} />

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
              <Link href="/auth/signup/emailVerification">
                <Button onClick={handleSubmit}>
                  {loading ? "Submitting..." : "Proceed"}
                </Button>
              </Link>
            </form>
          </div>
        </div>
        <ToastContainer
          progressClassName="toastProgress"
          bodyClassName="toastBody"
        />
      </section>
    </>
  );
}
