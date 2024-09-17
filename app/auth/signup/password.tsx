"use client";
import Input from "@/app/components/Input/input";
import { useEffect, useState } from "react";
import Header from "./header";
import Button from "@/app/components/Button/button";
import Link from "next/link";

interface Formprops {
  finish: boolean;
  setFinish: any;
}
export default function Password(props: Formprops) {
  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
  });


  const handleChange = (e: { target: { value: string; name: string; }; }) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  useEffect(() => {
    props.setFinish(true);
    console.log("jjjjjjjjjj");
  }, []);
  return (
    <>
      <div className="font-sans flex min-h-full flex-col justify-center">
        <Header heading="set your password" />
        <div className="mt-5 sm:mx-auto sm:w-full max-w-md">
          <form className="space-y-4">
            <Input
              label="Password"
              name="password"
              value={data.password}
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />

            <Input
              label="Confirm Password"
              name="password"
              value={data.confirmPassword}
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />
            {props.finish && (
              <Link href={"/auth/signin"}>
                <Button>Proceed</Button>
              </Link>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
