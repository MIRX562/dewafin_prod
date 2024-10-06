import HeaderTitle from "@/components/Navigation/Header/HeaderTitle";

type ToolProps = {
	children: React.ReactNode;
};

const PageToolbar = ({ children }: ToolProps) => {
	return (
		<div className="w-full flex flex-col md:flex-row items-center justify-between gap-2 p-2">
			<HeaderTitle />
			<div className="flex justify-between items-center w-full md:justify-end gap-2">
				{children}
			</div>
		</div>
	);
};

export default PageToolbar;
