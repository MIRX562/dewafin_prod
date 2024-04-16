'use client';

import { logOut } from '@/actions/logOut';
import React from 'react';

type Props = {
	children: React.ReactNode;
};

const LogoutButton = ({ children }: Props) => {
	const onClick = () => {
		logOut();
	};
	return (
		<span onClick={onClick} className='cursor-pointer'>
			{children}
		</span>
	);
};

export default LogoutButton;
