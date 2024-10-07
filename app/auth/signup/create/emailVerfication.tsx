"use client";
import { Input } from "@/app/components/Input/input";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/app/components/Button/button";

type InputEvent = React.ChangeEvent<HTMLInputElement>;
interface Formprops {
  lastPage: boolean;
  setLastPage: Dispatch<SetStateAction<boolean>>;
}
export default function EmailVerification(props: Formprops) {
  const [value, setValue] = useState("");
  const handleChange = (e: InputEvent) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    props.setLastPage(true);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="font-spaceGrotesk">
        <div className="my-8 lg:mt-16 text-center">
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

        <div className="mt-5 sm:mx-auto sm:w-full max-w-md">
          <form className="space-y-4">
            <Input
              label="Email Verification"
              name="emailVerification"
              value={value}
              type="text"
              placeholder=""
              onChange={handleChange}
            />
          </form>
          {props.lastPage && (
            <Link href={"/auth/signup/terms"}>
              <Button>Proceed</Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
