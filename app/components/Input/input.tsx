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
        className="text-[2.5vh] font-medium leading-6 text-white/80"
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
          className="px-2 w-full bg-zinc-900 text-[2.5vh] 2xl:text-[3vh]
          rounded-lg border-none py-2 2xl:py-5 text-white shadow-sm
          focus:outline-none focus:shadow-outline
           placeholder:text-white/70 focus:outline-luxela_lilac
            sm:text-sm sm:leading-6 placeholder:text-[2vh]"
        />
      </div>
    </div>
  );
};
Input.displayName = "Input";
export default Input;
