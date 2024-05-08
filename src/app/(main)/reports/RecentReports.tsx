import Link from "next/link";

export default function RecentReports() {
	return (
		<div className="mt-12">
			<h2 className="text-2xl font-semibold mb-6">Recent Reports</h2>
			<div className="bg-white rounded-lg shadow-md overflow-hidden">
				<table className="w-full table-auto">
					<thead className="bg-gray-100 dark:bg-gray-800">
						<tr>
							<th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
								Report
							</th>
							<th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
								Date
							</th>
							<th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
								Change
							</th>
							<th className="px-4 py-3 text-right text-sm font-medium text-gray-500 dark:text-gray-400">
								View
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 dark:divide-gray-800">
						<tr>
							<td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-50">
								Sales Report
							</td>
							<td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
								April 15, 2023
							</td>
							<td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
								+12.5%
							</td>
							<td className="px-4 py-3 text-right">
								<Link
									className="inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
									href="#"
								>
									View
								</Link>
							</td>
						</tr>
						<tr>
							<td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-50">
								Marketing Report
							</td>
							<td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
								April 10, 2023
							</td>
							<td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
								+8.2%
							</td>
							<td className="px-4 py-3 text-right">
								<Link
									className="inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
									href="#"
								>
									View
								</Link>
							</td>
						</tr>
						<tr>
							<td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-50">
								Customer Report
							</td>
							<td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
								April 5, 2023
							</td>
							<td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
								+15.3%
							</td>
							<td className="px-4 py-3 text-right">
								<Link
									className="inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
									href="#"
								>
									View
								</Link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
