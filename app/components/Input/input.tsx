interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  name: string;
  type:string
}

const Input = (props: InputProps) => {
  return (
    


      <div>
        <label
          htmlFor={props.label}
          className="block text-sm font-medium leading-6 text-black"
        >
{props.label}        </label>
        <div className="mt-2">
          <input
            name={props.name}
            type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            required
            className="block px-2 w-full text-base rounded-lg border-0 py-3 text-black shadow-sm ring-1
             ring-inset ring-gray-300 placeholder:text-grey-300
              focus:outline-[#9872dd] sm:text-sm sm:leading-6"
          />
        </div>
      </div>
  );
};
Input.displayName = "Input";
export default Input;
