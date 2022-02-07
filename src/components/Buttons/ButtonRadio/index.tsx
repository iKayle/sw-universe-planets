interface ButtonRadioProps {
  options: { label: string; value: string }[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selected: string;
}

export const ButtonRadio = ({
  options,
  onChange,
  selected,
}: ButtonRadioProps) => {
  return (
    <div className="flex flex-col items-center mt-1">
      <div className="flex flex-row items-start space-x-5">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              onChange={onChange}
              id={option.value}
              name="sortBy"
              checked={option.value === selected}
              value={option.value}
              type="radio"
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor={option.value} className="ml-3 text-sm text-white">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
