interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  name: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  return (
    <div>
      <label
        htmlFor={props.label}
        className="text-sm font-medium leading-6 text-black"
      >
        {props.label}{" "}
      </label>
      <div className="mt-2">
        <input
          required
          name={props.name}
          type={props.type}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          className="px-2 w-full text-base rounded-lg border-0 py-2 text-black shadow-sm ring-1
             ring-inset ring-gray-300 placeholder:text-grey-300
              focus:outline-luxela_lilac sm:text-sm sm:leading-6 placeholder:text-sm"
        />
      </div>
    </div>
  );
};
Input.displayName = "Input";
export default Input;
