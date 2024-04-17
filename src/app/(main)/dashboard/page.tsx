import FinancialPerformance from '@/components/dashboardComponents/FinancialPerformance/FinancialPerformance';
import NetIncome from '@/components/dashboardComponents/FinancialPerformance/NetIncome';
import { SupportForm } from '@/components/dashboardComponents/SupportForm/SupportForm';
import { Card, CardTitle } from '@/components/ui/card';

import React from 'react';

export default function DashboardPage() {
	return (
		<main className='grid p-2 w-full grid-cols-2 gap-4 transition-all gap-x-6 xl:grid-cols-4'>
			<Card className='h-[400px] col-span-2 md:col-span-1 p-4'>
				<CardTitle className='text-center text-primary mb-2'>
					Pemasukan & Pengeluaran
				</CardTitle>
				<FinancialPerformance />
			</Card>
			<Card className='h-[400px] col-span-2 md:col-span-1 p-4'>
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
