interface InputFilterByNameProps {
  label?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  name?: string;
}

export const InputFilter = ({
  label,
  value,
  onChange,
  placeholder,
  type = "search",
  name = "search",
}: InputFilterByNameProps) => {
  return (
    <div className="flex flex-col items-center mt-1">
      <label htmlFor="search" className="text-white">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className="w-full p-1 text-center text-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
};
