'use server';

import { getUserById } from '@/data/user';
import { db } from '@/lib/db';
import { currentUser } from '@/lib/sessionUser';
import { settingsSchema } from '@/schemas';
import { z } from 'zod';

export const settings = async (values: z.infer<typeof settingsSchema>) => {
	const user = await currentUser();

	if (!user) {
		return { error: 'Unauthorized' };
	}
	const dbUser = await getUserById(user.id);

	if (!dbUser) {
		return { error: 'Unauthorized' };
	}

	if (user.isOAuth) {
		values.email = undefined;
		values.password = undefined;
		values.newPassword = undefined;
		values.isTwoFactorEnabled = undefined;
	}

	await db.user.update({
		where: { id: dbUser.id },
		data: {
			...values,
		},
	});

	return { success: 'Data Successfully Updated' };
};
