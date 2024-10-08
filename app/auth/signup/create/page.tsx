import Image from "next/image";
import Logo from "/public/assests/Luxela white logo 1.svg";
// import Button from "@/app/components/Button/button";
import CreateForm from "./createForm";
import AuthNavbar from "../../AuthNavbar";
// import Link from "next/link";

export default function Create() {

  // const [currentStep, setCurrentStep] = useState(0);
  // const NUMBER_OF_STEPS = 2;
  // const goToNextStep = () => {
  //   setCurrentStep((prev) => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1));
  //   if (currentStep === 2) {
  //   }
  // };
  // const goToPreviousStep = () =>
  //   setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1));
  return (
    <section className="bg-black w-full min-h-[100vh] pb-20">
      <div className="hidden lg:block">
        <AuthNavbar />
      </div>
      <div className="max-w[1440px] px-4 md:px-8 flex flex-col mx-auto justify-center items-center">
        <div className="text-white mt-5 max-w-md">
          <div className="mb-8 lg:mb-16 lg:hidden flex justify-center items-center">
            <Image className="max-sm:w-32" src={Logo} alt="logo" />
          </div>
          
          <div className="mt-4">
            <CreateForm />
          </div>
        
        </div>
      </div>
    
    </section>
  );
}
