interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  name: string;
  type?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface SelectProps {
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  value: string;
  name: string;
  options: {
    [key: string]: string;
  };
}

const Input = (props: InputProps) => {
  return (
    <div>
      <label
        htmlFor={props.label}
        className="text-sm font-medium leading-6 text-white/80"
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
          className="px-2 w-full bg-zinc-900 text-sm
          rounded-lg border-none py-2 text-white shadow-sm
          focus:outline-none focus:shadow-outline
           placeholder:text-white/70 focus:outline-luxela_lilac
            sm:text-sm sm:leading-6 placeholder:text-xs"
        />
      </div>
    </div>
  );
};
Input.displayName = "Input";

const CheckoutInput = (props: InputProps) => {
  return (
    <div>
      <label
        htmlFor={props.label}
        className="text-sm font-medium leading-6 text-white/80"
      >
        {props.label}{" "}
      </label>
      <div className="mt-2">
        <input
          required
          name={props.name}
          type={props.type}
          value={props.value}
          disabled={props.disabled}
          placeholder={props.placeholder}
          onChange={props.onChange}
          className="px-2 w-full bg-zinc-800 text-sm
          rounded-lg border-none py-2 text-white shadow-sm
          focus:outline-none focus:shadow-outline
           placeholder:text-white/70 focus:outline-luxela_lilac
            sm:text-sm sm:leading-6 placeholder:text-xs"
        />
      </div>
      ((
    </div>
  );
};
CheckoutInput.displayName = "CheckoutInput";

const Select = (props: SelectProps) => {
  return (
    <div>
      <label
        htmlFor={props.label}
        className="text-sm font-medium leading-6 text-white/80"
      >
        {props.label}{" "}
      </label>
      <div className="mt-2">
        <select
          required
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          className="px-2 w-full bg-zinc-800 text-sm
          rounded-lg border-none py-2 text-white shadow-sm
          focus:outline-none focus:shadow-outline
           placeholder:text-white/70 focus:outline-luxela_lilac
            sm:text-sm sm:leading-6"
        >
          {/* {props.options.map((opt) =>{
          <option key={opt.value} value={opt.value}>{opt.label}</option>

          })} */}
        </select>
      </div>
    </div>
  );
};
Select.displayName = "Select";
export { Input, CheckoutInput, Select };
