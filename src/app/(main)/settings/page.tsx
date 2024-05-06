/**
 * v0 by Vercel.
 * @see https://v0.dev/t/L0wHm9nJOxb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Component() {
	return (
		<div className="flex min-h-screen w-full">
			<div className="flex-1">
				<div className="grid gap-8 p-6 md:p-10">
					<div className="grid gap-6 md:grid-cols-[200px_1fr]">
						<div className="space-y-2">
							<h2 className="text-lg font-semibold">General</h2>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Update your profile information.
							</p>
						</div>
						<Card>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="name">Name</Label>
									<Input
										id="name"
										placeholder="Enter your name"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										placeholder="Enter your email"
										type="email"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="bio">Bio</Label>
									<Textarea
										id="bio"
										placeholder="Enter your bio"
									/>
								</div>
							</CardContent>
							<CardFooter>
								<Button>Save Changes</Button>
							</CardFooter>
						</Card>
					</div>
					<div className="grid gap-6 md:grid-cols-[200px_1fr]">
						<div className="space-y-2">
							<h2 className="text-lg font-semibold">Security</h2>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Change your password.
							</p>
						</div>
						<Card>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="current-password">Current Password</Label>
									<Input
										id="current-password"
										placeholder="Enter your current password"
										type="password"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="new-password">New Password</Label>
									<Input
										id="new-password"
										placeholder="Enter your new password"
										type="password"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="confirm-password">Confirm Password</Label>
									<Input
										id="confirm-password"
										placeholder="Confirm your new password"
										type="password"
									/>
								</div>
							</CardContent>
							<CardFooter>
								<Button>Change Password</Button>
							</CardFooter>
						</Card>
					</div>
					<div className="grid gap-6 md:grid-cols-[200px_1fr]">
						<div className="space-y-2">
							<h2 className="text-lg font-semibold">Notifications</h2>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Manage your notification preferences.
							</p>
						</div>
						<Card>
							<CardContent className="space-y-4">
								<div className="flex items-center space-x-2">
									<Checkbox
										defaultChecked
										id="email-notifications"
									/>
									<Label htmlFor="email-notifications">
										Email Notifications
									</Label>
								</div>
								<div className="flex items-center space-x-2">
									<Checkbox id="push-notifications" />
									<Label htmlFor="push-notifications">Push Notifications</Label>
								</div>
								<div className="flex items-center space-x-2">
									<Checkbox id="sms-notifications" />
									<Label htmlFor="sms-notifications">SMS Notifications</Label>
								</div>
							</CardContent>
							<CardFooter>
								<Button>Save Preferences</Button>
							</CardFooter>
						</Card>
					</div>
					<div className="grid gap-6 md:grid-cols-[200px_1fr]">
						<div className="space-y-2">
							<h2 className="text-lg font-semibold">Billing</h2>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								View your billing details.
							</p>
						</div>
						<Card>
							<CardContent className="space-y-4">
								<div className="grid gap-2">
									<div className="flex items-center justify-between">
										<span>Plan</span>
										<span className="font-medium">Pro</span>
									</div>
									<div className="flex items-center justify-between">
										<span>Subscription</span>
										<span className="font-medium">Monthly</span>
									</div>
									<div className="flex items-center justify-between">
										<span>Next Billing Date</span>
										<span className="font-medium">June 1, 2023</span>
									</div>
									<div className="flex items-center justify-between">
										<span>Amount Due</span>
										<span className="font-medium">$49.99</span>
									</div>
								</div>
							</CardContent>
							<CardFooter>
								<Button variant="outline">Update Payment Method</Button>
							</CardFooter>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
