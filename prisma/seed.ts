const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const seed = async () => {
	const users = [
		{
			firstName: "Muhammad",
			lastName: "Rizqy",
			email: "muhammad.rizqy@example.com",
			phoneNumber: "123-456-7890",
			role: "Leaders",
			department: "Management",
			isActive: true,
			hireDate: new Date("2020-09-21"),
		},
		{
			firstName: "Putri Sri",
			lastName: "Kurniangsih",
			email: "putri.sri@example.com",
			phoneNumber: "234-567-8901",
			role: "Admins",
			department: "Management",
			isActive: true,
			hireDate: new Date("2020-09-21"),
		},
		{
			firstName: "Wahyu",
			lastName: "Riandi",
			email: "wahyu.riandi@example.com",
			phoneNumber: "345-678-9012",
			role: "Staffs",
			department: "Customer Support",
			isActive: true,
			hireDate: new Date("2020-09-21"),
		},
		{
			firstName: "Ruslan",
			lastName: "Gareth",
			email: "ruslan.gareth@example.com",
			phoneNumber: "456-789-0123",
			role: "Staffs",
			department: "Customer Support",
			isActive: true,
			hireDate: new Date("2020-11-11"),
		},
		{
			firstName: "Angga",
			lastName: "Aditya",
			email: "angga.aditya@example.com",
			phoneNumber: "567-890-1234",
			role: "Staffs",
			department: "Customer Support",
			isActive: true,
			hireDate: new Date("2020-11-11"),
		},
		{
			firstName: "Andryanto",
			lastName: "Saputra Noerdin",
			email: "andryanto.saputra@example.com",
			phoneNumber: "678-901-2345",
			role: "Staffs",
			department: "IT Support",
			isActive: true,
			hireDate: new Date("2021-04-19"),
		},
		{
			firstName: "Adam",
			lastName: "Perkasa",
			email: "adam.perkasa@example.com",
			phoneNumber: "789-012-3456",
			role: "Staffs",
			department: "Customer Support",
			isActive: true,
			hireDate: new Date("2021-08-06"),
		},
		{
			firstName: "Rizkiani",
			lastName: "Widawati",
			email: "rizkiani.widawati@example.com",
			phoneNumber: "890-123-4567",
			role: "Staffs",
			department: "Staff Administration",
			isActive: true,
			hireDate: new Date("2022-01-27"),
		},
		{
			firstName: "Achmad",
			lastName: "Mu'awwan",
			email: "achmad.muawwan@example.com",
			phoneNumber: "901-234-5678",
			role: "Staffs",
			department: "Graphic Design",
			isActive: true,
			hireDate: new Date("2022-08-01"),
		},
		{
			firstName: "Qotrun",
			lastName: "Nida",
			email: "qotrun.nida@example.com",
			phoneNumber: "012-345-6789",
			role: "Staffs",
			department: "Sales & Marketing",
			isActive: true,
			hireDate: new Date("2023-01-23"),
		},
		{
			firstName: "Raifa",
			lastName: "Akbar",
			email: "raifa.akbar@example.com",
			phoneNumber: "987-654-3210",
			role: "Staffs",
			department: "Customer Support",
			isActive: true,
			hireDate: new Date("2023-06-02"),
		},
		{
			firstName: "Fahry",
			lastName: "Trisnawam",
			email: "fahry.trisnawam@example.com",
			phoneNumber: "876-543-2109",
			role: "Staffs",
			department: "IT Support",
			isActive: true,
			hireDate: new Date("2023-06-19"),
		},
		{
			firstName: "Ahmad Fikri",
			lastName: "Maulana",
			email: "ahmad.fikri@example.com",
			phoneNumber: "765-432-1098",
			role: "Staffs",
			department: "Sales & Marketing",
			isActive: true,
			hireDate: new Date("2023-09-11"),
		},
		// Add more employees as needed...
	];

	for (const user of users) {
		await prisma.employee.create({
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
