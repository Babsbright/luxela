"use client";
import Image from "next/image";
import AuthFrame from "/public/assests/authsection.svg";
import Logo from "/public/assests/Luxela white logo 1.svg";
import arrow from "/public/assests/autharrow.svg";
import phantom from "/public/assests/phantom.svg";
import backpack from "/public/assests/backpack.svg";
import wallet from "/public/assests/wallet.svg";
import solfare from "/public/assests/solfare.svg";
import help from "/public/assests/help-circle.svg";
import Link from "next/link";

export default function SignUp() {
  return (
    <section className="bg-black w-full min-h-[100vh] 2xl:flex 2xl:items-center">
      <div className=" max-w-[1440px] px-4 md:px-8 flex flex-col mx-auto">
        <div className="flex justify-around items-start">
          <div className="hidden lg:block lg:w-1/2 mt-8">
            <Image className="" src={AuthFrame} alt="auth" />
          </div>

          <div className="text-white mt-5 lg:mt-20 xl:mt-28 lg:max-w-md">
            <div className="flex justify-between items-center font-aeonik lg:mb-16">
              <Image className="max-sm:w-32" src={Logo} alt="logo" priority />

              <Link href={"/auth/signup"}>
                <button
                  className="flex items-center gap-x-2 py-1.5 px-3 sm:px-4 hover:bg-luxela_purple hover:text-white
             text-luxela_lilac rounded-sm bg-luxela_lilac/30 text-[2vh]"
                >
                  Create account{" "}
                  <span>
                    <Image className="max-sm:w-4" src={arrow} alt="arrow" />
                  </span>
                </button>
              </Link>
            </div>
            <div className="my-8 lg:my-4">
              <h2 className="font-medium text-[2.5vh] font-aeonik">
                Welcome back
              </h2>
              <p className="font-spaceGrotesk max-w-md lg:max-w-lg mt-2 mx-auto text-white/80 text-[2vh] 2xl:text-[1.5vh]">
                Connect your solana wallet to create your own LUXELA account for
                free. Your wallet would be used as a security measure.{" "}
              </p>
            </div>
            <div className="font-spaceGrotesk mt-6 mx-auto w-full max-w-md">
              <section className="space-y-6">
                <h1 className="text-[2vh]">Connect your wallet</h1>
                <div
                  className="flex items-center justify-center 
              gap-x-2 py-2.5 w-full text-center rounded-sm cursor-pointer
              hover:border hover:border-luxela_lilac text-[2vh] bg-zinc-900"
                >
                  Phantom
                  <span>
                    {" "}
                    <Image src={phantom} alt="phantom" />
                  </span>
                </div>

                <div
                  className="flex items-center justify-center
               gap-x-2 py-1.5 lg:py-2 w-full text-center cursor-pointer
              -sm hover:border hover:border-luxela_lilac text-[2vh] bg-zinc-900"
                >
                  Solfare
                  <span>
                    {" "}
                    <Image src={solfare} alt="solfare" />
                  </span>
                </div>

                <div
                  className="flex items-center justify-center cursor-pointer
              gap-x-2 py-1.5 lg:py-2 w-full text-center rounded-sm hover:border
               hover:border-luxela_lilac text-[2vh] bg-zinc-900"
                >
                  Backpack
                  <span>
                    {" "}
                    <Image src={backpack} alt="backpack" />
                  </span>
                </div>

                <div
                  className="flex items-center justify-center gap-x-2 py-1.5 lg:py-2
               w-full text-center rounded-sm hover:border cursor-pointer
                hover:border-luxela_lilac text-[2vh] bg-zinc-900"
                >
                  Wallet Connect
                  <span>
                    {" "}
                    <Image src={wallet} alt="wallet" />
                  </span>
                </div>

                <div
                  className="text-center flex items-center
               justify-center gap-x-3 text-[2vh] cursor-pointer
               hover:border hover:border-luxela_lilac hover:py-1.5 lg:py-2"
                >
                  {" "}
                  <Image src={help} alt="help-circle" />
                  <Link href={"/auth/signup/create"}>
                    <p>I don&apos;t have a wallet</p>
                  </Link>
                </div>
              </section>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
