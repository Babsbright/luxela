import React from "react";

interface Step {
  currentStep: number;
  numberOfSteps: number;
}
export default function Stepper(props: Step) {
  const activeColor = (index: number) =>
    props.currentStep >= index ? "bg-luxela_purple2" : "bg-gray-300";
  // const isFinalStep = (index: any) => index === props.currentStep - 1;

  return (
    <div className="flex justify-center items-center gap-x-3 my-8">
      {Array.from({ length: props.numberOfSteps }).map((_, index) => (
        <React.Fragment key={index}>
          <div className={`w-36 lg:w-48 h-1.5 rounded-lg ${activeColor(index)}`}></div>
          {/* {isFinalStep(index) ? null : (
            <div className={`w-12 h-0 ${activeColor(index)}`}></div>
          )} */}
        </React.Fragment>
      ))}
    </div>
  );
}
