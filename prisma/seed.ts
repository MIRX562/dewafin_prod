import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	// Seed data for the Customer table
	const customersSeedData = [
		{
			email: 'customer1@example.com',
			phone: '+1234567890',
			address: '123 Street, City, Country',
		},
		{
			email: 'customer2@example.com',
			phone: '+2345678901',
			address: '456 Street, City, Country',
		},
		{
			email: 'customer3@example.com',
			phone: '+3456789012',
			address: '789 Street, City, Country',
		},
		{
			email: 'customer4@example.com',
			phone: '+4567890123',
			address: '012 Street, City, Country',
		},
		{
			email: 'customer5@example.com',
			phone: '+5678901234',
			address: '345 Street, City, Country',
		},
		{
			email: 'customer6@example.com',
			phone: '+6789012345',
			address: '678 Street, City, Country',
		},
		{
			email: 'customer7@example.com',
			phone: '+7890123456',
			address: '901 Street, City, Country',
		},
		{
			email: 'customer8@example.com',
			phone: '+8901234567',
			address: '234 Street, City, Country',
		},
		{
			email: 'customer9@example.com',
			phone: '+9012345678',
			address: '567 Street, City, Country',
		},
		{
			email: 'customer10@example.com',
			phone: '+0123456789',
			address: '890 Street, City, Country',
		},
		{
			email: 'customer11@example.com',
			phone: '+0987654321',
			address: '111 Street, City, Country',
		},
		{
			email: 'customer12@example.com',
			phone: '+9876543210',
			address: '222 Street, City, Country',
		},
		{
			email: 'customer13@example.com',
			phone: '+8765432109',
			address: '333 Street, City, Country',
		},
		{
			email: 'customer14@example.com',
			phone: '+7654321098',
			address: '444 Street, City, Country',
		},
		{
			email: 'customer15@example.com',
			phone: '+6543210987',
			address: '555 Street, City, Country',
		},
		{
			email: 'customer16@example.com',
			phone: '+5432109876',
			address: '666 Street, City, Country',
		},
		{
			email: 'customer17@example.com',
			phone: '+4321098765',
			address: '777 Street, City, Country',
		},
		{
			email: 'customer18@example.com',
			phone: '+3210987654',
			address: '888 Street, City, Country',
		},
		{
			email: 'customer19@example.com',
			phone: '+2109876543',
			address: '999 Street, City, Country',
		},
		{
			email: 'customer20@example.com',
			phone: '+1098765432',
			address: '000 Street, City, Country',
		},
		{
			email: 'customer21@example.com',
			phone: '+9876543210',
			address: '111 Street, City, Country',
		},
		{
			email: 'customer22@example.com',
			phone: '+8765432109',
			address: '222 Street, City, Country',
		},
		{
			email: 'customer23@example.com',
			phone: '+7654321098',
			address: '333 Street, City, Country',
		},
		{
			email: 'customer24@example.com',
			phone: '+6543210987',
			address: '444 Street, City, Country',
		},
		{
			email: 'customer25@example.com',
			phone: '+5432109876',
			address: '555 Street, City, Country',
		},
		{
			email: 'customer26@example.com',
			phone: '+4321098765',
			address: '666 Street, City, Country',
		},
		{
			email: 'customer27@example.com',
			phone: '+3210987654',
			address: '777 Street, City, Country',
		},
		{
			email: 'customer28@example.com',
			phone: '+2109876543',
			address: '888 Street, City, Country',
		},
		{
			email: 'customer29@example.com',
			phone: '+1098765432',
			address: '999 Street, City, Country',
		},
		{
			email: 'customer30@example.com',
			phone: '+0987654321',
			address: '000 Street, City, Country',
		},
		{
			email: 'customer31@example.com',
			phone: '+9876543210',
			address: '111 Street, City, Country',
		},
		{
			email: 'customer32@example.com',
			phone: '+8765432109',
			address: '222 Street, City, Country',
		},
		{
			email: 'customer33@example.com',
			phone: '+7654321098',
			address: '333 Street, City, Country',
		},
		{
			email: 'customer34@example.com',
			phone: '+6543210987',
			address: '444 Street, City, Country',
		},
		{
			email: 'customer35@example.com',
			phone: '+5432109876',
			address: '555 Street, City, Country',
		},
		{
			email: 'customer36@example.com',
			phone: '+4321098765',
			address: '666 Street, City, Country',
		},
		{
			email: 'customer37@example.com',
			phone: '+3210987654',
			address: '777 Street, City, Country',
		},
		{
			email: 'customer38@example.com',
			phone: '+2109876543',
			address: '888 Street, City, Country',
		},
		{
			email: 'customer39@example.com',
			phone: '+1098765432',
			address: '999 Street, City, Country',
		},
		{
			email: 'customer40@example.com',
			phone: '+0987654321',
			address: '000 Street, City, Country',
		},
		{
			email: 'customer41@example.com',
			phone: '+9876543210',
			address: '111 Street, City, Country',
		},
		{
			email: 'customer42@example.com',
			phone: '+8765432109',
			address: '222 Street, City, Country',
		},
		{
			email: 'customer43@example.com',
			phone: '+7654321098',
			address: '333 Street, City, Country',
		},
		{
			email: 'customer44@example.com',
			phone: '+6543210987',
			address: '444 Street, City, Country',
		},
		{
			email: 'customer45@example.com',
			phone: '+5432109876',
			address: '555 Street, City, Country',
		},
		{
			email: 'customer46@example.com',
			phone: '+4321098765',
			address: '666 Street, City, Country',
		},
		{
			email: 'customer47@example.com',
			phone: '+3210987654',
			address: '777 Street, City, Country',
		},
		{
			email: 'customer48@example.com',
			phone: '+2109876543',
			address: '888 Street, City, Country',
		},
		{
			email: 'customer49@example.com',
			phone: '+1098765432',
			address: '999 Street, City, Country',
		},
		{
			email: 'customer50@example.com',
			phone: '+0987654321',
			address: '000 Street, City, Country',
		},
	];

	// Insert customers into the database
	await prisma.customer.createMany({
		data: customersSeedData,
	});

	console.log('Seeding completed!');
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
