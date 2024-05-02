type ToolProps = {
	title: String;
	children: React.ReactNode;
};

const PageToolbar = ({ title, children }: ToolProps) => {
	return (
		<div className="flex items-center justify-between space-x-2 p-2">
			<h2 className="text-2xl font-bold tracking-tight">{title}</h2>
			<div className="flex items-center space-x-2">{children}</div>
		</div>
	);
};

export default PageToolbar;
