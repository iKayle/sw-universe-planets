interface LoadingSpinnerProps {
  size?: string;
  description?: string;
  color?: string;
}

export const LoadingSpinner = ({
  size = "h-5 w-5",
  description = "Carregando...",
  color = "bg-indigo-300 text-white",
}: LoadingSpinnerProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-2 bg-none">
      <div className="flex items-center justify-center space-x-2 animate-pulse">
        <div className={`${size} ${color} rounded-full`} />
        <div className={`${size} ${color} rounded-full`} />
        <div className={`${size} ${color} rounded-full`} />
      </div>
      <div
        className={`items-center space-y-2 text-xl bg-transparent text-center ${color}`}
      >
        <p>Carregando...</p>
        <span>{description}</span>
      </div>
    </div>
  );
};
