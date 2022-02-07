interface ButtonRemoveProps {
  label: string;
  onClick: () => void;
  disabled: boolean;
}

export const ButtonCompare = ({
  label,
  onClick,
  disabled,
}: ButtonRemoveProps) => {
  return (
    <div className="flex flex-col items-center ">
      <button
        className="w-full px-4 py-1 mt-3 font-semibold text-indigo-500 transition-all duration-200 ease-in-out bg-indigo-200 border border-indigo-500 rounded-lg hover:scale-105 disabled:pointer-events-none disabled:bg-gray-300 disabled:text-slate-500 disabled:border-slate-500 disabled:opacity-75 hover:text-white hover:bg-indigo-500 hover:border-white"
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};
