import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function MobileMenuLogo() {
	return (
		<Link href='/dashboard' className='flex items-center gap-2 font-semibold'>
			<Image src='/icon_light.png' alt='' width={32} height={32} />
			<span className='text-2xl font-bold'>DewaFin</span>
		</Link>
	);
}
