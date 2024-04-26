import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-primary-foreground">
			<div className="text-center space-y-4">
				<h1 className="text-8xl font-bold">404</h1>
				<p className="text-lg">
					Oops, the page you&apos;re looking for doesn&apos;t exist.
				</p>
			</div>
			<div className="mt-8 flex items-center space-x-4">
				<Link href="/dashboard">
					<Button className="flex flex-row items-center justify-center text-primary-foreground gap-2">
						<Home />
						Go Home
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
