const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const seed = async () => {
	const seedData = [
		{
			fileName: "document1.pdf",
			mimeType: "application/pdf",
			size: 2300000,
			location: "/path/to/documents/document1.pdf",
		},
		{
			fileName: "image1.jpg",
			mimeType: "image/jpeg",
			size: 1500000,
			location: "/path/to/images/image1.jpg",
		},
		{
			fileName: "presentation1.pptx",
			mimeType:
				"application/vnd.openxmlformats-officedocument.presentationml.presentation",
			size: 4200000,
			location: "/path/to/presentations/presentation1.pptx",
		},
		{
			fileName: "spreadsheet1.xlsx",
			mimeType:
				"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
			size: 3100000,
			location: "/path/to/spreadsheets/spreadsheet1.xlsx",
		},
		{
			fileName: "video1.mp4",
			mimeType: "video/mp4",
			size: 10500000,
			location: "/path/to/videos/video1.mp4",
		},
		{
			fileName: "archive1.zip",
			mimeType: "application/zip",
			size: 7800000,
			location: "/path/to/archives/archive1.zip",
		},
		{
			fileName: "document2.pdf",
			mimeType: "application/pdf",
			size: 2400000,
			location: "/path/to/documents/document2.pdf",
		},
		{
			fileName: "image2.jpg",
			mimeType: "image/jpeg",
			size: 1600000,
			location: "/path/to/images/image2.jpg",
		},
		{
			fileName: "presentation2.pptx",
			mimeType:
				"application/vnd.openxmlformats-officedocument.presentationml.presentation",
			size: 4300000,
			location: "/path/to/presentations/presentation2.pptx",
		},
		{
			fileName: "spreadsheet2.xlsx",
			mimeType:
				"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
			size: 3200000,
			location: "/path/to/spreadsheets/spreadsheet2.xlsx",
		},
		{
			fileName: "video2.mp4",
			mimeType: "video/mp4",
			size: 11000000,
			location: "/path/to/videos/video2.mp4",
		},
		{
			fileName: "archive2.zip",
			mimeType: "application/zip",
			size: 8000000,
			location: "/path/to/archives/archive2.zip",
		},
		{
			fileName: "document3.pdf",
			mimeType: "application/pdf",
			size: 2500000,
			location: "/path/to/documents/document3.pdf",
		},
		{
			fileName: "image3.jpg",
			mimeType: "image/jpeg",
			size: 1700000,
			location: "/path/to/images/image3.jpg",
		},
		{
			fileName: "presentation3.pptx",
			mimeType:
				"application/vnd.openxmlformats-officedocument.presentationml.presentation",
			size: 4400000,
			location: "/path/to/presentations/presentation3.pptx",
		},
		{
			fileName: "spreadsheet3.xlsx",
			mimeType:
				"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
			size: 3300000,
			location: "/path/to/spreadsheets/spreadsheet3.xlsx",
		},
		{
			fileName: "video3.mp4",
			mimeType: "video/mp4",
			size: 11500000,
			location: "/path/to/videos/video3.mp4",
		},
		{
			fileName: "archive3.zip",
			mimeType: "application/zip",
			size: 8200000,
			location: "/path/to/archives/archive3.zip",
		},
		{
			fileName: "document4.pdf",
			mimeType: "application/pdf",
			size: 2600000,
			location: "/path/to/documents/document4.pdf",
		},
		{
			fileName: "image4.jpg",
			mimeType: "image/jpeg",
			size: 1800000,
			location: "/path/to/images/image4.jpg",
		},
	];

	for (const data of seedData) {
		await prisma.file.create({
			data: data,
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
