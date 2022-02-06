interface InputFilterByNameProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputFilterByName = ({
  label,
  value,
  onChange,
}: InputFilterByNameProps) => {
  return (
    <div className="flex py-2 sm:px-6 lg:px-8 ">
      <div className="flex flex-col items-center mt-1">
        <label htmlFor="search" className="text-white">
          {label}
        </label>
        <input
          type="search"
          name="search"
          id="search"
          value={value}
          onChange={onChange}
          className="w-full p-1 text-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
        />
      </div>
    </div>
  );
};
