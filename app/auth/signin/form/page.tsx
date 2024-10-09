"use client";

import Image from "next/image";
import Logo from "/public/assests/Luxela white logo 1.svg";
import Button from "@/app/components/Button/button";
import AuthNavbar from "../../AuthNavbar";
import { Input } from "@/app/components/Input/input";
import { useState } from "react";
import Stepper from "../stepper";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

export default function SignIn() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState({
    emailAddress: "",
  });

  const handleChange = (e: { target: { value: string; name: string } }) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    const userData = {
      email: data.emailAddress,
      role: "buyer",
    };

    axios
      .post("https://luxela.onrender.com/api/v1/luxela/auth/signin", userData) // Use the appropriate signin endpoint
      .then((response) => {
        setLoading(false);
        if (response.data.token) {
          router.push("/Home");
        }
        toast.success("Signed in successfully", { autoClose: 3000 });
        // Save token or session data as needed
        // router.push("/Home");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          if (
            error.response.data.error ===
            "User not register!"
          ) {
            toast.error(`User not registered!`, { autoClose: 3000 });
          } else {
            toast.error(`${error.response.data.error}`, { autoClose: 3000 });
          }
        } else if (error.request) {
          toast.error("Network Error", { autoClose: 3000 });
        } else {
          toast.error("Something went wrong", { autoClose: 3000 });
        }
      });
  };

  return (
    <section className="bg-black w-full min-h-[100vh] pb-20">
      <div className="hidden lg:block">
        <AuthNavbar />
      </div>
      <div className="max-w-[1440px] px-4 md:px-8 flex flex-col mx-auto justify-center items-center">
        <div className="text-white mt-5 max-w-md">
          <div className="mb-8 lg:mb-16 lg:hidden flex justify-center items-center">
            <Image className="max-sm:w-32" src={Logo} alt="logo" />
          </div>

          <section className="mt-10">
            <div className="text-center">
              <h2 className="font-medium text-lg font-aeonik">Sign In</h2>
              <p className="font-spaceGrotesk max-w-md lg:max-w-lg mt-2 mx-auto text-white/80 text-sm">
                Continue shopping by signing in to your Luxela account
              </p>
            </div>

            <Stepper currentStep={0} numberOfSteps={2} />

            <div className="font-spaceGrotesk">
              <div className="mt-5 sm:mx-auto sm:w-full max-w-md">
                <form className="space-y-6">
                  <Input
                    label="Email Address"
                    name="emailAddress"
                    type="email"
                    value={data.emailAddress}
                    placeholder="Enter your email address"
                    onChange={handleChange}
                  />
                  <Button onClick={handleSubmit}>
                    {loading ? "Submitting..." : "Proceed"}
                  </Button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
      <ToastContainer
        progressClassName="toastProgress"
        bodyClassName="toastBody"
      />
    </section>
  );
}
