'use server';

import { signOut } from '@/lib/auth';

export const logOut = async () => {
	//any server actoin before logOut
	await signOut();
};
