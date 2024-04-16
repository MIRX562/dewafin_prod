import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';

export default function DashboardPage() {
	return (
		<main className='grid w-full grid-cols-2 gap-4 transition-all gap-x-6 xl:grid-cols-4'>
			<Card className='col-span-2'>
				<CardContent>
					<CardHeader>
						<CardTitle>Card 1</CardTitle>
						<CardDescription></CardDescription>
					</CardHeader>
					<CardFooter>
						<Link href='#'>fitur 1</Link>
					</CardFooter>
				</CardContent>
			</Card>
			<Card className='p-1'>
				<CardContent className='p-0'>
					<CardHeader>
						<CardTitle>Card 1</CardTitle>
						<CardDescription></CardDescription>
					</CardHeader>
					<CardFooter>
						<Link href='#'>fitur 1</Link>
					</CardFooter>
				</CardContent>
			</Card>
			<Card>
				<CardContent className='p-0'>
					<CardHeader>
						<CardTitle>Card 1</CardTitle>
						<CardDescription></CardDescription>
					</CardHeader>
					<CardFooter>
						<Link href='#'>fitur 1</Link>
					</CardFooter>
				</CardContent>
			</Card>
			<Card className='p-1'>
				<CardContent>
					<CardHeader>
						<CardTitle>Card 1</CardTitle>
						<CardDescription></CardDescription>
					</CardHeader>
					<CardFooter>
						<Link href='#'>fitur 1</Link>
					</CardFooter>
				</CardContent>
			</Card>
			<Card>
				<CardContent>
					<CardHeader>
						<CardTitle>Card 1</CardTitle>
						<CardDescription></CardDescription>
					</CardHeader>
					<CardFooter>
						<Link href='#'>fitur 1</Link>
					</CardFooter>
				</CardContent>
			</Card>
		</main>
	);
}
