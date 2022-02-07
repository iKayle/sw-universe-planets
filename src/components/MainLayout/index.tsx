interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-indigo-900 via-indigo-900 to-black">
      {children}
    </div>
  );
};
