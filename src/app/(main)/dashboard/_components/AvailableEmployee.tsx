/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zpbuLYdbnGa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AECard from "./AECard";

export default function AvailableEmployee() {
	const dummyData = [
		{
			avatarSrc: "/avatars/avatar1.jpg",
			name: "John Doe",
			jobTitle: "Software Developer",
		},
		{
			avatarSrc: "/avatars/avatar2.jpg",
			name: "Jane Smith",
			jobTitle: "UX Designer",
		},
		{
			avatarSrc: "/avatars/avatar3.jpg",
			name: "Mike Johnson",
			jobTitle: "Data Analyst",
		},
		{
			avatarSrc: "/avatars/avatar4.jpg",
			name: "Sarah Williams",
			jobTitle: "Project Manager",
		},
		{
			avatarSrc: "/avatars/avatar5.jpg",
			name: "David Brown",
			jobTitle: "Frontend Developer",
		},
		{
			avatarSrc: "/avatars/avatar6.jpg",
			name: "Emily Taylor",
			jobTitle: "Marketing Specialist",
		},
		{
			avatarSrc: "/avatars/avatar7.jpg",
			name: "Alex Clark",
			jobTitle: "Business Analyst",
		},
		{
			avatarSrc: "/avatars/avatar8.jpg",
			name: "Rachel Green",
			jobTitle: "Product Manager",
		},
		{
			avatarSrc: "/avatars/avatar9.jpg",
			name: "Chris Anderson",
			jobTitle: "Graphic Designer",
		},
	];
	return (
		<Card className="w-full col-span-2 lg:h-[30svh] h-full overflow-y-auto">
			<CardHeader>
				<CardTitle>Available Employees</CardTitle>
			</CardHeader>
			<CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
				{dummyData.map((data, index) => (
					<AECard
						key={index}
						avatarSrc={data.avatarSrc}
						name={data.name}
						jobTitle={data.jobTitle}
					/>
				))}
			</CardContent>
		</Card>
	);
}
