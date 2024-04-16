import Image from 'next/image';
import Link from 'next/link';

export default function SideBarLogo() {
	return (
		<Link href='/' className='flex items-center gap-2 font-semibold'>
			<Image src='/icon_light.png' alt='' width={32} height={32} />
			<span className='text-2xl font-bold'>DewaFin</span>
		</Link>
	);
}
