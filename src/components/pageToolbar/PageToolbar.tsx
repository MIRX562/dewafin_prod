type ToolProps = {
  title: String;
  children: React.ReactNode;
};

const PageToolbar = ({ title, children }: ToolProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between md:space-x-2 space-y-2 p-2">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <div className="w-full flex items-center justify-between md:justify-end space-x-2">
        {children}
      </div>
    </div>
  );
};

export default PageToolbar;
