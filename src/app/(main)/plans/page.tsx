/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3evevdfd5OU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { CheckIcon, PlusIcon } from "lucide-react";

export default function Component() {
	return (
		<>
			<div className="flex flex-col h-full">
				<header className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
					<h1 className="text-2xl font-bold">Hosting Plans</h1>
					<Button size="sm">
						<PlusIcon className="mr-2 h-4 w-4" />
						Add New Category
					</Button>
				</header>
				<main className="flex-1 overflow-y-auto p-6">
					<div className="grid gap-6">
						<div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 p-6">
							<div className="flex items-center justify-between">
								<h2 className="text-xl font-bold">Basic</h2>
								<Button size="sm">
									<PlusIcon className="mr-2 h-4 w-4" />
									Add New Plan
								</Button>
							</div>
							<p className="text-gray-500 dark:text-gray-400 mt-2">
								Our entry-level hosting plan for small websites and blogs.
							</p>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
								<Card>
									<CardHeader>
										<CardTitle>Starter</CardTitle>
										<CardDescription>$5/month</CardDescription>
									</CardHeader>
									<CardContent>
										<ul className="space-y-2 text-sm">
											<li>
												<CheckIcon className="mr-2 h-4 w-4 text-green-500" />1
												GB Storage
											</li>
											<li>
												<CheckIcon className="mr-2 h-4 w-4 text-green-500" />1
												GB RAM
											</li>
											<li>
												<CheckIcon className="mr-2 h-4 w-4 text-green-500" />1
												CPU Core
											</li>
											<li>
												<CheckIcon className="mr-2 h-4 w-4 text-green-500" />
												Unlimited Bandwidth
											</li>
										</ul>
									</CardContent>
									<CardFooter>
										<Button size="sm">Select</Button>
									</CardFooter>
								</Card>
								<Card>
									<CardHeader>
										<CardTitle>Standard</CardTitle>
										<CardDescription>$10/month</CardDescription>
									</CardHeader>
									<CardContent>
										<ul className="space-y-2 text-sm">
											<li>
												<CheckIcon className="mr-2 h-4 w-4 text-green-500" />5
												GB Storage
											</li>
											<li>
												<CheckIcon className="mr-2 h-4 w-4 text-green-500" />2
												GB RAM
											</li>
											<li>
												<CheckIcon className="mr-2 h-4 w-4 text-green-500" />2
												CPU Cores
											</li>
											<li>
												<CheckIcon className="mr-2 h-4 w-4 text-green-500" />
												Unlimited Bandwidth
											</li>
										</ul>
									</CardContent>
									<CardFooter>
										<Button size="sm">Select</Button>
									</CardFooter>
								</Card>
								<Card>
									<CardHeader>
										<CardTitle>Pro</CardTitle>
										<CardDescription>$20/month</CardDescription>
									</CardHeader>
									<CardContent>
										<ul className="space-y-2 text-sm">
											<li>
												<CheckIcon className="mr-2 h-4 w-4 text-green-500" />
												10 GB Storage
											</li>
											<li>
												<CheckIcon className="mr-2 h-4 w-4 text-green-500" />4
												GB RAM
											</li>
											<li>
												<CheckIcon className="mr-2 h-4 w-4 text-green-500" />4
												CPU Cores
											</li>
											<li>
												<CheckIcon className="mr-2 h-4 w-4 text-green-500" />
												Unlimited Bandwidth
											</li>
										</ul>
									</CardContent>
									<CardFooter>
										<Button size="sm">Select</Button>
									</CardFooter>
								</Card>
							</div>
						</div>
						<div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 p-6">
							<div className="flex items-center justify-between">
								<h2 className="text-xl font-bold">Enterprise</h2>
								<Button size="sm">
									<PlusIcon className="mr-2 h-4 w-4" />
									Add New Plan
								</Button>
							</div>
							<p className="text-gray-500 dark:text-gray-400 mt-2">
								Our high-performance hosting plans for large websites and
								applications.
							</p>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
								<Card>
									<CardHeader>
										<CardTitle>Business</CardTitle>
										<CardDescription>$50/month</CardDescription>
									</CardHeader>
									<CardContent>
										<ul className="space-y-2 text-sm">
											<li>
												<CheckIcon className="mr-2 h-4 w-4 text-green-500" />
												25 GB Storage
											</li>
											<li>
												<CheckIcon className="mr-2 h-4 w-4 text-green-500" />8
												GB RAM
											</li>
											<li>
												<CheckIcon className="mr-2 h-4 w-4 text-green-500" />8
												CPU Cores
											</li>
											<li>
												<CheckIcon className="mr-2 h-4 w-4 text-green-500" />
												Unlimited Bandwidth
											</li>
										</ul>
									</CardContent>
									<CardFooter>
										<Button size="sm">Select</Button>
									</CardFooter>
								</Card>
								<Card>
									<CardHeader>
										<CardTitle>Enterprise</CardTitle>
										<CardDescription>$100/month</CardDescription>
									</CardHeader>
									<CardContent>
										<ul className="space-y-2 text-sm">
											<li>
												<CheckIcon className="mr-2 h-4 w-4 text-green-500" />
												50 GB Storage
											</li>
											<li>
												<CheckIcon className="mr-2 h-4 w-4 text-green-500" />
												16 GB RAM
											</li>
											<li>
												<CheckIcon className="mr-2 h-4 w-4 text-green-500" />
												16 CPU Cores
											</li>
											<li>
												<CheckIcon className="mr-2 h-4 w-4 text-green-500" />
												Unlimited Bandwidth
											</li>
										</ul>
									</CardContent>
									<CardFooter>
										<Button size="sm">Select</Button>
									</CardFooter>
								</Card>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}
