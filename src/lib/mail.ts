import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;
const fromEmail = "support@mirx.my.id";

const sendEmail = async ({
	email,
	subject,
	message,
}: {
	email: string;
	subject: string;
	message: string;
}) => {
	await resend.emails.send({
		from: fromEmail,
		to: email,
		subject: subject,
		html: message,
	});
};

export const send2FAEmail = async (email: string, token: string) => {
	const subject = "Your DewaFin Two-Factor Authentication Code";
	const message = `
        <p>Dear User,</p>
        <p>Your OTP code for two-factor authentication is: <strong>${token}</strong></p>
        <p>For security reasons, please keep this code confidential and do not share it with anyone else.</p>
        <p>Thank you,</p>
        <p>The DewaFin Team</p>
    `;

	await sendEmail({ email, subject, message });
};

export const sendVerificationEmail = async (email: string, token: string) => {
	const verificationLink = `${domain}/auth/verify-email?token=${token}`;
	const subject = "Confirm Your DewaFin Account";
	const message = `
        <p>Dear User,</p>
        <p>Thank you for creating an account with DewaFin. To verify your email address, please click on the link below:</p>
        <p><a href="${verificationLink}">Verify Email Address</a></p>
        <p>If you did not create an account, please disregard this email.</p>
        <p>Best,</p>
        <p>The DewaFin Team</p>
    `;

	await sendEmail({ email, subject, message });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
	const resetLink = `${domain}/auth/reset-password?token=${token}`;
	const subject = "Reset Your DewaFin Password";
	const message = `
        <p>Dear User,</p>
        <p>To reset your DewaFin account password, please click on the link below:</p>
        <p><a href="${resetLink}">Reset Password</a></p>
        <p>If you did not request a password reset, please ignore this email.</p>
        <p>Best,</p>
        <p>The DewaFin Team</p>
    `;

	await sendEmail({ email, subject, message });
};

export const sendTaskAssignmentNotification = async (
	assigneeEmail: string,
	taskName: string
) => {
	const subject = "New Task Assignment";
	const message = `
        <p>Dear User,</p>
        <p>You have been assigned a new task: <strong>${taskName}</strong>.</p>
        <p>Please log in to DewaFin to view the details.</p>
        <p>Best,</p>
        <p>The DewaFin Team</p>
    `;

	await sendEmail({ email: assigneeEmail, subject, message });
};

export const sendTaskCompletionNotification = async (
	assignerEmail: string,
	taskName: string
) => {
	const subject = "Task Completion Notification";
	const message = `
        <p>Dear User,</p>
        <p>The task <strong>${taskName}</strong> has been marked as completed.</p>
        <p>Thank you for your contribution!</p>
        <p>Best,</p>
        <p>The DewaFin Team</p>
    `;

	await sendEmail({ email: assignerEmail, subject, message });
};
