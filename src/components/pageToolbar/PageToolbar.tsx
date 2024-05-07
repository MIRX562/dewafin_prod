type ToolProps = {
	children: React.ReactNode;
};

const PageToolbar = ({ children }: ToolProps) => {
	return (
		<div className="w-full flex flex-col md:flex-row items-center justify-between md:justify-end md:space-x-2 p-2">
			{children}
		</div>
	);
};

export default PageToolbar;
