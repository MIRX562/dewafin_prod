import NavHeader from "@/components/Navigation/Header/header";
import PageHeader from "@/components/Navigation/Header/PageHeader";
import Sidebar from "@/components/Navigation/SideBar/sidebar";

export default async function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex min-h-screen">
			<Sidebar />
			<div className="flex flex-col flex-grow">
				<NavHeader />
				<PageHeader />
				<main className="flex-grow overflow-y-auto">
					<div className="h-full flex-1 flex p-2 flex-col md:p-4 lg:p-6">
						{children}
					</div>
				</main>
			</div>
		</div>
	);
}
