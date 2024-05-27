import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { User } from "@prisma/client";
import { useTheme } from "next-themes";
import Link from "next/link";

interface SecurityAndAppearanceProps {
	user: User;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const SecurityAndAppearance: React.FC<SecurityAndAppearanceProps> = ({
	user,
	setUser,
}) => {
	const { setTheme } = useTheme();

	const handleSwitchChange = () => {
		setUser((prevUser: any) =>
			prevUser
				? { ...prevUser, isTwoFactorEnabled: !prevUser.isTwoFactorEnabled }
				: null
		);
	};

	const handleSelectChange = (value: string) => {
		setTheme(value);
	};

	return (
		<div className="space-y-6 bg-slate-100 dark:bg-slate-800 rounded-md p-4 shadow-md">
			<div>
				<h2 className="text-xl text-center font-semibold">
					Security & Appearance
				</h2>
				<div className="mt-4 space-y-4">
					<div className="flex flex-col gap-2">
						<Label htmlFor="2fa">Two-Factor Authentication</Label>
						<div className="flex items-center justify-between">
							<span className="text-gray-500 dark:text-gray-400">
								Enable two-factor authentication
							</span>
							<Switch
								id="2fa"
								checked={user.isTwoFactorEnabled}
								onCheckedChange={handleSwitchChange}
							/>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="2fa">Reset Password</Label>
						<div className="flex items-center justify-between gap-2">
							<span className="text-gray-500 dark:text-gray-400">
								Change your current password
							</span>
							<Link href="/auth/reset">
								<Button variant="destructive">Reset</Button>
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="theme">Theme</Label>
						<Select
							defaultValue="system"
							onValueChange={handleSelectChange}
						>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select theme" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="light">Light</SelectItem>
								<SelectItem value="dark">Dark</SelectItem>
								<SelectItem value="system">System</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SecurityAndAppearance;
