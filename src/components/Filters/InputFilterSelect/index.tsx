interface InputFilterSelectProps {
  label?: string;
  options: { label: string; value: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  value?: string;
}

export const InputFilterSelect = ({
  label,
  options,
  onChange,
  value,
  placeholder = "Select",
}: InputFilterSelectProps) => {
  return (
    <div className="flex flex-col items-center mt-1">
      <label htmlFor="search" className="text-white">
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        className="w-full p-1 text-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
      >
        <option disabled={false} value="">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
