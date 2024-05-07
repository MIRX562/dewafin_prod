import NavHeader from "@/components/Navigation/Header/header";
import PageHeader from "@/components/Navigation/PageHeader/PageHeader";
import Sidebar from "@/components/Navigation/SideBar/sidebar";

export default function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="grid min-h-screen grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
			<Sidebar />
			<div className="flex flex-col h-screen">
				<NavHeader />
				<PageHeader />
				<main className="flex-grow overflow-y-auto">
					<div className="h-full flex flex-col p-1 md:p-3">{children}</div>
				</main>
			</div>
		</div>
	);
}
