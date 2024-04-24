const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const seed = async () => {
	const users = [
		{
			name: "User 1",
			email: "user1@example.com",
			password: "password1",
			role: "USER",
			isTwoFactorEnabled: false,
		},
		{
			name: "User 2",
			email: "user2@example.com",
			password: "password2",
			role: "USER",
			isTwoFactorEnabled: false,
		},
		{
			name: "User 3",
			email: "user3@example.com",
			password: "password3",
			role: "USER",
			isTwoFactorEnabled: false,
		},
		{
			name: "User 4",
			email: "user4@example.com",
			password: "password4",
			role: "USER",
			isTwoFactorEnabled: false,
		},
		{
			name: "User 5",
			email: "user5@example.com",
			password: "password5",
			role: "USER",
			isTwoFactorEnabled: false,
		},
		{
			name: "User 6",
			email: "user6@example.com",
			password: "password6",
			role: "USER",
			isTwoFactorEnabled: false,
		},
		{
			name: "User 7",
			email: "user7@example.com",
			password: "password7",
			role: "USER",
			isTwoFactorEnabled: false,
		},
		{
			name: "User 8",
			email: "user8@example.com",
			password: "password8",
			role: "USER",
			isTwoFactorEnabled: false,
		},
		{
			name: "User 9",
			email: "user9@example.com",
			password: "password9",
			role: "USER",
			isTwoFactorEnabled: false,
		},
		{
			name: "User 10",
			email: "user10@example.com",
			password: "password10",
			role: "USER",
			isTwoFactorEnabled: false,
		},
		// Repeat similar structure for 40 more users...
	];

	for (const user of users) {
		await prisma.user.create({
			data: user,
		});
	}
};

async function main() {
	try {
		await seed();
		console.log("Seeding completed");
	} catch (error) {
		console.error("Error during seeding:", error);
		process.exit(1);
	} finally {
		await prisma.$disconnect();
	}
}

main();
