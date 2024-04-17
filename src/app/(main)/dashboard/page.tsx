import FinancialPerformance from '@/components/dashboardComponents/FinancialPerformance/FinancialPerformance';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function DashboardPage() {
	return (
		<main className='grid p-2 w-full grid-cols-2 gap-4 transition-all gap-x-6 xl:grid-cols-4'>
			<div className='col-span-2 flex flex-col items-center justify-center p-4 border border-slate-600 bg-slate-900/50 rounded-xl h-[400px] '>
				<h3 className='text-2xl font-semibold text-white mb-4'>
					Financial Performance
				</h3>
				<FinancialPerformance />
			</div>
			<Link href='/users' className='w-full'>
				<Button size='lg' className='w-full'>
					<User />
					Users
				</Button>
			</Link>
		</main>
	);
}
