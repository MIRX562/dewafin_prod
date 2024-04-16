import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;

export const send2FAEmail = async (email: string, token: string) => {
	await resend.emails.send({
		from: 'onboarding@resend.dev',
		to: email,
		subject: 'Confirm Your Email',
		html: `<p>Here is your 2FA code: ${token}</p>`,
	});
};

export const sendVerificationEmail = async (email: string, token: string) => {
	const resetLink = `${domain}/auth/new-verification?token=${token}`;

	await resend.emails.send({
		from: 'auth@mirx.my.id',
		to: email,
		subject: 'Confirm Your Email',
		html: `<p>Click <a href=${resetLink}>here <a/>to verify your email</p>`,
	});
};
export const sendPasswordResetEmail = async (email: string, token: string) => {
	const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;

	await resend.emails.send({
		from: 'auth@mirx.my.id',
		to: email,
		subject: 'Reset Password',
		html: `<p>Click <a href=${resetLink}>here <a/>to reset your Password</p>`,
	});
};
