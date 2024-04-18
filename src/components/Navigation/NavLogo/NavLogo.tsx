import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function NavLogo() {
	return (
		<Link href='/dashboard' className='flex items-center gap-1 font-semibold'>
			<Image src='/icon_light.png' alt='' width={32} height={32} />
			<p className='text-2xl font-bold'>
				Dewa<span className='text-primary '>Fin</span>
			</p>
		</Link>
	);
}
