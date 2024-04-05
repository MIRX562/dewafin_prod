'use client';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import React from 'react';
import Header from '../header/Header';
import Social from '../social/Social';
import BackButton from '../loginBackButton/BackButton';
import { Separator } from '@/components/ui/separator';

type Props = {
	children: React.ReactNode;
	headerLabel: string;
	backButtonLabel: string;
	backButtonHref: string;
	showSocial?: boolean;
};

export default function CardWrapper({
	children,
	backButtonHref,
	backButtonLabel,
	headerLabel,
	showSocial,
}: Props) {
	return (
		<Card className='w-[400px] shadow-md'>
			<CardHeader>
				<Header label={headerLabel} />
			</CardHeader>
			<CardContent>{children}</CardContent>
			<Separator className='mb-6' />
			{showSocial && (
				<CardFooter>
					<Social />
				</CardFooter>
			)}
			<CardFooter>
				<BackButton href={backButtonHref} label={backButtonLabel} />
			</CardFooter>
		</Card>
	);
}
