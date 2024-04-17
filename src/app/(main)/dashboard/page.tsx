import FinancialPerformance from '@/components/dashboardComponents/FinancialPerformance/FinancialPerformance';
import NetIncome from '@/components/dashboardComponents/FinancialPerformance/NetIncome';
import { SupportForm } from '@/components/dashboardComponents/SupportForm/SupportForm';
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
			<Card className='h-[400px] col-span-2 p-4'>
				<CardTitle className='text-center text-primary mb-2'>
					Pemasukan & Pengeluaran
				</CardTitle>
				<FinancialPerformance />
			</Card>
			<Card className='h-[400px] col-span-2 p-4'>
				<CardTitle className='text-center text-primary mb-2'>
					Keuntungan Bersih
				</CardTitle>
				<NetIncome />
			</Card>
			<div className='col-span-2'>
				<SupportForm />
			</div>
		</main>
	);
}
