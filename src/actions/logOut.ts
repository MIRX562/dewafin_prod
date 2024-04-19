'use server';

import { signOut } from '@/lib/auth';

//function to end the current session
export const logOut = async () => {
	//any server actoin before logOut
	await signOut();
};
