import Link from 'next/link';

const AccessDenied = () => {
	return (
		<div className='flex flex-col items-center justify-center h-full'>
			<div className='max-w-md p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800'>
				<div className='space-y-4 text-center'>
					<h1 className='text-3xl font-bold text-red-500 dark:text-red-400'>
						Access Denied
					</h1>
					<p className='text-gray-600 dark:text-gray-400'>
						You do not have the necessary permissions to access this page.
					</p>
					<Link
						className='inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-900'
						href='/dashboard'>
						Return to Homepage
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AccessDenied;
