// import { faker } from "@faker-js/faker";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// const userData = Array.from({ length: 10 }, () => ({
// 	name: faker.name.fullName(),
// 	email: faker.internet.email(),
// 	password: faker.internet.password(),
// 	role: faker.helpers.arrayElement(["ADMIN", "USER", "MANAGER"]),
// 	isTwoFactorEnabled: faker.datatype.boolean(),
// }));

// const employeeData = Array.from({ length: 20 }, () => ({
// 	firstName: faker.name.firstName(),
// 	lastName: faker.name.lastName(),
// 	email: faker.internet.email(),
// 	phoneNumber: faker.phone.number(),
// 	role: faker.helpers.arrayElement([
// 		"Management",
// 		"Technical_Support",
// 		"Customer_Support",
// 		"Sales_Marketing",
// 		"Administration",
// 	]),
// 	isActive: faker.helpers.arrayElement(["Active", "Not_Active"]),
// 	hireDate: faker.date.past(),
// }));

// const fileData = Array.from({ length: 15 }, () => ({
// 	fileName: faker.system.fileName(),
// 	mimeType: faker.system.mimeType(),
// 	size: faker.datatype.number(),
// 	location: faker.system.filePath(),
// }));

// const categoryData = Array.from({ length: 5 }, () => ({
// 	name: faker.commerce.department(),
// }));

// const productData = Array.from({ length: 10 }, () => ({
// 	name: faker.commerce.productName(),
// 	description: faker.commerce.productDescription(),
// }));

// const planData = Array.from({ length: 15 }, () => ({
// 	name: faker.commerce.productAdjective(),
// 	price: faker.datatype.number({ min: 10, max: 1000 }),
// 	description: faker.commerce.productDescription(),
// 	specification: faker.datatype.json(),
// 	mainFeature: faker.datatype.json(),
// 	additionalFeature: faker.datatype.json(),
// }));

// const reportData = Array.from({ length: 12 }, () => ({
// 	title: faker.lorem.sentence(),
// 	description: faker.lorem.paragraph(),
// 	filePath: faker.system.filePath(),
// 	department: faker.helpers.arrayElement([
// 		"Management",
// 		"Technical_Support",
// 		"Customer_Support",
// 		"Sales_Marketing",
// 		"Administration",
// 	]),
// }));

// const noteData = Array.from({ length: 8 }, () => ({
// 	title: faker.lorem.sentence(),
// 	content: faker.lorem.paragraph(),
// }));

// const taskData = Array.from({ length: 25 }, () => ({
// 	title: faker.lorem.sentence(),
// 	description: faker.lorem.paragraph(),
// 	startDate: faker.date.past(),
// 	endDate: faker.date.future(),
// 	status: faker.helpers.arrayElement(["TODO", "IN_PROGRESS", "FINISHED"]),
// 	priority: faker.helpers.arrayElement(["HIGH", "MEDIUM", "LOW"]),
// }));

// async function main() {
// 	const users = await prisma.user.createMany({ data: userData });

// 	const reports = await prisma.report.createMany({ data: reportData });

// 	const notes = await prisma.note.createMany({ data: noteData });

// 	const files = await prisma.file.createMany({ data: fileData });

// 	const employees = await prisma.employee.createMany({ data: employeeData });

// 	const categories = await prisma.category.createMany({ data: categoryData });

// 	const products = await prisma.product.createMany({
// 		data: productData.map((product) => ({
// 			...product,
// 		})),
// 	});

// 	const plans = await prisma.plan.createMany({
// 		data: planData.map((plan) => ({
// 			...plan,
// 		})),
// 	});

// 	const tasks = await prisma.task.createMany({
// 		data: taskData.map((task) => ({
// 			...task,
// 		})),
// 	});

// 	console.log("Seeding completed successfully!");
// }

// main()
// 	.catch((e) => console.error(e))
// 	.finally(async () => {
// 		await prisma.$disconnect();
// 	});
