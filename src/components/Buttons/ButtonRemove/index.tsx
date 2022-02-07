interface ButtonRemoveProps {
  label: any;
  onClick: () => void;
}

export const ButtonRemove = ({ label, onClick }: ButtonRemoveProps) => {
  return (
    <div className="flex flex-wrap items-center -m-1">
      <span className="m-1 inline-flex rounded-lg items-center py-1.5 pl-3 pr-2 text-sm font-medium bg-slate-200 text-gray-900">
        <span>{label}</span>
        <button
          onClick={onClick}
          type="button"
          className="inline-flex flex-shrink-0 w-4 h-4 p-1 ml-1 text-red-600 bg-red-200 rounded-full hover:scale-125 animate-"
        >
          <svg
            className="w-2 h-2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 8 8"
          >
            <path
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M1 1l6 6m0-6L1 7"
            />
          </svg>
        </button>
      </span>
    </div>
  );
};
