import Link from "next/link";
import { Button } from "../ui/button";

const AccessDenied = () => {
	return (
		<div className="flex flex-col items-center justify-center h-full">
			<div className="max-w-md p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
				<div className="space-y-4 text-center">
					<h1 className="text-3xl font-bold text-red-500 dark:text-red-400">
						Access Denied
					</h1>
					<p className="text-gray-600 dark:text-gray-400">
						You do not have the necessary permissions to access this page.
					</p>
					<Link href="/dashboard">
						<Button>Return to Homepage</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AccessDenied;
