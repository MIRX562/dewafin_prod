"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Schema validation using Zod
const profileFormSchema = z.object({
	name: z
		.string()
		.min(2, { message: "Name must be at least 2 characters." })
		.max(30, { message: "Name must not exceed 30 characters." }),
	image: z.string().url({ message: "Please enter a valid image URL." }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function ProfileForm({ user, setUser }: any) {
	const form = useForm<ProfileFormValues>({
		resolver: zodResolver(profileFormSchema),
		defaultValues: user, // Set default values from user prop
		mode: "onChange",
	});

	function onSubmit(data: ProfileFormValues) {
		setUser(data);
		toast({
			title: "Profile updated",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}

	return (
		<Form {...form}>
			{/* Wrap all the elements in a single parent div */}
			<div>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8"
				>
					<div className="flex items-center space-x-4">
						<FormField
							control={form.control}
							name="image"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Avatar</FormLabel>
									<FormControl>
										<Avatar className="h-16 w-16 border">
											<AvatarImage
												src={field.value}
												alt="User Avatar"
											/>
											<AvatarFallback>{user.name[0]}</AvatarFallback>
										</Avatar>
										<Input
											{...field}
											placeholder="Enter image URL"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Enter your name"
									/>
								</FormControl>
								<FormDescription>
									This is your public display name.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Update profile</Button>
				</form>
			</div>
		</Form>
	);
}
