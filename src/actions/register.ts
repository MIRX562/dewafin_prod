'use server';

import { generateVerificationToken } from '@/lib/tokens';
import { Register, RegisterSchema } from '@/schemas';
import { sendVerificationEmail } from '@/lib/mail';
import { getUserByEmail } from '@/data/user';
import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';

type RegisterResponse = {
	error?: string;
	success?: string;
};

export const register = async (values: Register): Promise<RegisterResponse> => {
	// Validate the provided fields using the schema
	const validatedFields = RegisterSchema.safeParse(values);
	if (!validatedFields.success) {
		// Log the invalid values for debugging purposes
		console.log('Invalid inputs:', values);
		return { error: 'Invalid inputs provided' };
	}

	const { email, password, name } = validatedFields.data;

	// Check if a user with the provided email already exists
	const existingUser = await getUserByEmail(email);
	if (existingUser) {
		return { error: 'Email already registered' };
	}

	// Hash the password
	const hashedPassword = await bcrypt.hash(password, 10);

	// Create a new user record in the database
	await db.user.create({
		data: {
			name,
			email,
			password: hashedPassword,
		},
	});

	// Generate a verification token for the new user
	const verificationToken = await generateVerificationToken(email);

	// Send a verification email to the new user
	await sendVerificationEmail(verificationToken.email, verificationToken.token);

	// Return a success message
	return {
		success: 'Confirmation email sent. Please verify your email.',
	};
};
