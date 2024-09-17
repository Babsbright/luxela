interface ButtonProps {
  children: string;
}

const Button = (props: ButtonProps) => {
  return (
    <div className="text-center">
      <button
        className="font-sans w-full h-11 bg-gradient-to-b from-[#9872dd] via-[#8451e1] to-[#5c2eaf] justify-center 
                   rounded-lg text-base lg:text-lg text-white shadow-lg hover:bg-none hover:text-[#9872dd] focus:ring
                    focus:ring-violet-300 hover:border hover:border-[#9872dd] focus:outline-[#9872dd]"
      >
        {props.children}
      </button>
    </div>
  );
};
Button.displayName = "Button";
export default Button;
