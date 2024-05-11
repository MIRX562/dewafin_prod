/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ObgVJUqV0as
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TaskCard from "./_components/TaskCard";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { task } from "@/types/menu/taskMenu";
import { Task } from "@prisma/client";

const mockTasks: Task[] = [];

export default function TaskManagerPage() {
	return (
		<>
			<TaskNavBar />
			<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
				<div className="flex items-center">
					<h1 className="font-semibold text-lg md:text-2xl">Tasks</h1>
					<Button
						className="ml-auto"
						size="sm"
					>
						Add Task
					</Button>
				</div>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					<div className="border shadow-sm rounded-lg">
						<div className="p-4 bg-gray-100/40 space-y-4 dark:bg-gray-800/40">
							<h2 className="font-semibold text-base">To Do</h2>
							{mockTasks.map((task) => (
								<TaskCard
									key={task.title}
									task={task as any}
								/>
							))}
						</div>
					</div>
					<div className="border shadow-sm rounded-lg">
						<div className="p-4 bg-gray-100/40 dark:bg-gray-800/40">
							<h2 className="font-semibold text-base">In Progress</h2>
						</div>
						<div className="p-4 space-y-4">
							{mockTasks.map((task) => (
								<TaskCard
									key={task.title}
									task={task as any}
								/>
							))}
						</div>
					</div>
					<div className="border shadow-sm rounded-lg">
						<div className="p-4 bg-gray-100/40 dark:bg-gray-800/40">
							<h2 className="font-semibold text-base">Completed</h2>
						</div>
						<div className="p-4 space-y-4">
							{mockTasks.map((task) => (
								<TaskCard
									key={task.title}
									task={task as any}
								/>
							))}
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

const TaskNavBar = () => {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				{task.map((menu) => (
					<NavigationMenuItem key={menu.label}>
						<Link
							href={menu.path}
							legacyBehavior
							passHref
						>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								{menu.label}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
};
