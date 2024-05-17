import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	// Define data for users
	const userData = [
		{
			name: faker.person.fullName(),
			email: faker.internet.email(),
			password: faker.internet.password(),
			role: "ADMIN",
			isTwoFactorEnabled: faker.datatype.boolean(),
		},
		{
			name: faker.persom.fullName(),
			email: faker.internet.email(),
			password: faker.internet.password(),
			role: "USER",
			isTwoFactorEnabled: faker.datatype.boolean(),
		},
		{
			name: faker.person.fullName(),
			email: faker.internet.email(),
			password: faker.internet.password(),
			role: "MANAGER",
			isTwoFactorEnabled: faker.datatype.boolean(),
		},
	];

	// Define data for employees
	const employeeData = [
		{
			firstName: faker.person.firstName(),
			lastName: faker.person.lastName(),
			email: faker.internet.email(),
			phoneNumber: faker.phone.phoneNumber(),
			role: "Management",
			isActive: faker.helpers.arrayElement(["Active", "Not_Active"]),
			hireDate: faker.date.past(),
		},
		{
			firstName: faker.person.firstName(),
			lastName: faker.person.lastName(),
			email: faker.internet.email(),
			phoneNumber: faker.phone.phoneNumber(),
			role: "Technical_Support",
			isActive: faker.helpers.arrayElement(["Active", "Not_Active"]),
			hireDate: faker.date.past(),
		},
	];

	// Create users and employees
	const users = await prisma.user.createMany({ data: userData });
	const employees = await prisma.employee.createMany({ data: employeeData });

	console.log(users);
	console.log(employees);
	console.log("Seeding completed successfully!");
}

main()
	.catch((e) => console.error(e))
	.finally(async () => {
		await prisma.$disconnect();
	});
