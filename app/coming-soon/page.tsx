"use client";

import { useState } from "react";
import coming from "/public/assests/comingsoon.svg";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";

export default function ComingSoon() {
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

  return (
    <>
     
      <main className="grid min-h-full max-w[1440px] px-4 md:px-12 bg-zinc-900 text-white font-spaceGrotesk">
        <div className="mt-10 mb-6">
          <a
            href="/"
            className="rounded-md bg-gradient-to-b from-luxela_lilac via-luxela_purple2 to-luxela_purple px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-luxela_lilac focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-luxela_lilac"
          >
            Back to Home
          </a>
        </div>

        <section className="flex flex-col-reverse md:flex-row justify-center items-center gap-6 ">
          <div>
            <h1 className="text-3xl lg:text-5xl my-2">Coming Soon</h1>
            <p className="mt-10 mb-20">
              We are currently working hard to build this page but you can
              submit your email for update once the page is up.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="w-full sm:w-2/3">
                <input
                  name="emailAddress"
                  type="email"
                  value={data.emailAddress}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="px-2 w-full bg-zinc-800 text-sm
                rounded-lg border-none py-2 text-white shadow-sm
                focus:outline-none focus:shadow-outline
                 placeholder:text-white/70 focus:outline-luxela_lilac
                  sm:text-sm sm:leading-6 placeholder:text-sm"
                />{" "}
              </div>
              <div className="w-full sm:w-1/3">
                <button
                  onClick={() => {
                    toast.success("Product added to cart", {
                      theme: "colored",
                      autoClose: 2000,
                    });
                  }}
                  className="font-spaceGrotesk font-medium w-full h-10  bg-gradient-to-b from-luxela_lilac via-luxela_purple2 to-luxela_purple justify-center 
                   rounded-lg text-sm text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac"
                >
                  Notify Me
                </button>
              </div>{" "}
            </div>
            <p className="text-sm mt-4 text-center">
              Don&apos;t worry, we will not spam you{" "}
            </p>
          </div>

          <div>
            <Image className="" src={coming} alt="coming-soon" />
          </div>
        </section>
        <ToastContainer
          progressClassName="toastProgress"
          bodyClassName="toastBody"
        />
      </main>
    </>
  );
}
