import React from "react";

interface Step {
  currentStep: any;
  numberOfSteps: any;
}
export default function Stepper(props: Step) {
  const activeColor = (index: any) =>
    props.currentStep >= index ? "bg-luxela_purple2" : "bg-gray-300";
  const isFinalStep = (index: any) => index === props.currentStep - 1;

  return (
    <div className="flex justify-center items-center gap-x-3">
      {Array.from({ length: props.numberOfSteps }).map((_, index) => (
        <React.Fragment key={index}>
          <div className={`w-32 h-2 rounded-lg ${activeColor(index)}`}></div>
          {/* {isFinalStep(index) ? null : (
            <div className={`w-12 h-0 ${activeColor(index)}`}></div>
          )} */}
        </React.Fragment>
      ))}
    </div>
  );
}
