'use server';

import { currentRole } from '@/lib/sessionUser';
import { UserRole } from '@prisma/client';

type AdminResponse = {
	error?: string;
	success?: string;
};

export const admin = async (): Promise<AdminResponse> => {
	// Get the current user's role
	const role = await currentRole();

	// Check if the user has admin privileges
	if (role !== UserRole.ADMIN) {
		// Return an error response if the user is not an admin
		return { error: 'Access denied: Insufficient permissions' };
	}

	// Return a success response if the user is an admin
	return { success: 'Access granted: User is an admin' };
};
