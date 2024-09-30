"use client";

import { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

interface DetailProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function DetailModal(props: DetailProps) {
  return (
    <Dialog open={props.open} onClose={props.setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-blur-sm transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-md font-spaceGrotesk text-white bg-zinc-900 text-left shadow-xl transition-all
             data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200
              data-[enter]:ease-out data-[leave]:ease-in sm:my-8
               sm:w-full sm:max-w-3xl p-4 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <DialogTitle
              as="h3"
              className="text-base leading-6 text-white mb-3 flex justify-between items-center"
            >
              Item Description
              <button
                type="button"
                onClick={() => props.setOpen(false)}
                className="float-end text-lg font-semibold text-white"
              >
                X
              </button>{" "}
            </DialogTitle>
            <div>
              <p className="text-[13px] leading-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia culpa dolor doloremque nesciunt veniam facilis repellat
                similique cumque quibusdam aspernatur consectetur voluptates
                temporibus ullam labore ab numquam, optio, at id. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Numquam quidem
                dolor repudiandae veniam suscipit! Eligendi vel cupiditate sit
                delectus libero nulla maiores vitae dolor, esse fugit, nostrum
                quae hic fuga.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-x-4 text-sm items-center w-full my-8">
              <div className="bg-zinc-800 p-8 rounded-t-md lg:rounded-md w-full lg:w-1/2">
                <p className="my-3">Key features</p>
                <ul className="leading-6 text-[13px] list-disc">
                  <li>Lorem ipsum dolor sit amet, consectetur.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur.</li>
                </ul>
              </div>

              <div className="bg-zinc-800 p-8 rounded-b-lg  lg:rounded-md w-full lg:w-1/2">
                <p className="my-3">Specification</p>
                <ul className="leading-6 text-[13px] list-disc">
                  <li>Lorem ipsum dolor sit amet, consectetur.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur.</li>
                </ul>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
