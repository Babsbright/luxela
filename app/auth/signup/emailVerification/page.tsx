"use client";
import { Input } from "@/app/components/Input/input";
import { useState } from "react";
import Link from "next/link";
import Button from "@/app/components/Button/button";
import Stepper from "../stepper";
import AuthNavbar from "../../AuthNavbar";
import Logo from "/public/assests/Luxela white logo 1.svg";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

type InputEvent = React.ChangeEvent<HTMLInputElement>;

export default function EmailVerification() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState({
    otpCode: "",
  });

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
      name: data.otpCode,
    };
    setLoading(true);
    axios
      .post(
        "https://luxela.onrender.com/api/v1/luxela/auth/otp/verify",
        userData
      )
      .then((response) => {
        console.log(response);
        setLoading(false);
        toast.success("Account Created Successfully", { autoClose: 3000 });
        router.push("/auth/signup/emailVerification");
      })
      .catch((error) => {
        console.log(error);
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
      <section className="bg-black w-full min-h-[100vh] pb-20 px-4 md:px-8">
        <div className="hidden lg:block">
          <AuthNavbar />
        </div>
        <div className="lg:hidden mt-4 mb-10 flex justify-center items-center">
          <Image className="max-sm:w-32" src={Logo} alt="logo" />
        </div>
        <div className="font-spaceGrotesk">
          <div className="mt-8 text-center">
            <h2 className="font-medium text-lg font-aeonik">
              {" "}
              Verify Your Email
            </h2>
            <p className="font-spaceGrotesk max-w-md lg:max-w-lg mt-2 mx-auto text-white/80 text-sm">
              We&apos;re almost there! Please check your inbox and click the
              verification link to confirm your email. This helps us keep your
              Luxela account secure and ready for your fashion journey.
            </p>
          </div>

          <Stepper currentStep={2} numberOfSteps={2} />

          <div className="mt-5 sm:mx-auto sm:w-full max-w-md">
            <form className="space-y-4">
              <Input
                label="Email Verification"
                name="emailVerification"
                value={data.otpCode}
                type="number"
                placeholder=""
                onChange={handleChange}
              />
            </form>
            <Link href={"/auth/signup/terms"}>
              <Button onClick={handleSubmit}>
                {loading ? "Submitting..." : "Proceed"}
              </Button>{" "}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
