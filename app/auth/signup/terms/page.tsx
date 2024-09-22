import Logo from "/public/assests/Luxela white logo 1.svg";
import Image from "next/image";
import Link from "next/link";

export default function Terms() {
  return (
    <section className="bg-black w-full min-h-[100vh] pb-20">
      <div className="max-w[1440px] 2xl:max-w-[2000px] px-4 md:px-8 flex flex-col mx-auto justify-center items-center">
        <div className="flex justify-center cursor-pointer my-4">
          <Image
            className="w-20 lg:w-28 hover:bg-luxela_lilac"
            src={Logo}
            alt="profile"
          />
        </div>
        <hr className="w-full h-[0.2px] border border-gray-700/50" />

        <div className="text-white mt-5 max-w-2xl bg-zinc-900 rounded-md p-6 2xl:max-w-[2000px]">
          <h1 className="text-[3vh] font-aeonik mb-4">Terms of agreement</h1>
          <p className="text-[2vh] font-spaceGrotesk">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="flex items-center my-2 gap-x-2">
            <input
              className="bg-transparent"
              type="checkbox"
              name="terms"
              id=""
            />
            <p className="text-[2vh] font-spaceGrotesk">
              By clicking "Accept", you agree to our Terms of Agreement and
              Privacy Policies
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-x-4">
            <div className="lg:w-2/3">
              <Link href={"/auth/signin"}>
                <button
                  className="font-spaceGrotesk font-medium w-full h-10 2xl:h-20 bg-gradient-to-b from-luxela_lilac via-luxela_purple2 to-luxela_purple
                   rounded-lg text-[2.5vh] text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac"
                >
                  Proceed
                </button>
              </Link>
            </div>
            <div className="lg:w-1/3">
              <Link href={"/auth/signup/create"}>
                <button
                  className="font-spaceGrotesk font-medium w-full h-10 2xl:h-20 bg-zinc-700
                   rounded-lg text-[2.5vh] text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac"
                >
                  Decline
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
