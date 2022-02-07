interface TitleNavBarProps {
  title: string;
}

export const TitleNavBar = ({ title }: TitleNavBarProps) => {
  return (
    <div className="sticky top-0 flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-slate-700/70 backdrop-blur-sm ring-1 ring-black/10">
      <h1 className="text-2xl font-bold text-gray-200 md:text-3xl">{title}</h1>
    </div>
  );
};
