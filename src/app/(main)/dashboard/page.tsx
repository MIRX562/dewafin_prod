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
		<main className='grid w-full p-4 grid-cols-1 gap-4 transition-all gap-x-6 sm:grid-cols-2 xl:grid-cols-4'>
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
