interface ButtonProps {
  children: string;
  onClick?: React.MouseEventHandler;
}

const Button = (props: ButtonProps) => {
  return (
    <div className="text-center mt-6 sm:mx-auto sm:w-full max-w-md 2xl:max-w-7xl">
      <button
        onClick={props.onClick}
        className="font-spaceGrotesk font-medium w-full h-10 2xl:h-20 bg-gradient-to-b from-luxela_lilac via-luxela_purple2 to-luxela_purple justify-center 
                   rounded-lg text-[2.5vh] text-white shadow-lg hover:bg-none hover:text-luxela_lilac hover:border hover:border-luxela_lilac focus:outline-luxela_lilac"
      >
        {props.children}
      </button>
    </div>
  );
};
Button.displayName = "Button";
export default Button;
