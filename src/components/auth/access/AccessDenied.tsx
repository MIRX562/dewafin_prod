import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";
import { Button } from "../../ui/button";

const AccessDenied = () => {
	return (
		<div className="flex flex-col items-center justify-center h-full">
			<div className="flex flex-col items-center justify-center  text-center space-y-4 max-w-md p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
				<div className="flex items-center space-x-4 text-red-500 dark:text-red-400">
					<FaExclamationTriangle className="w-8 h-8" />
					<h1 className="text-3xl font-bold ">Access Denied</h1>
					<FaExclamationTriangle className="w-8 h-8" />
				</div>
				<p className="text-gray-600 dark:text-gray-400">
					You do not have the necessary permissions to access this page.
				</p>
				<Link href="/dashboard">
					<Button>Return to Homepage</Button>
				</Link>
			</div>
		</div>
	);
};

export default AccessDenied;
