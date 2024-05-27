"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getUserById } from "@/data/user";
import { useCurrentUserId } from "@/hooks/useCurrentUser";
import { editUserSettings } from "@/server-actions/settings";
import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import AccountInformation from "./_components/AccountInformation";
import SecurityAndAppearance from "./_components/SecurityAndAppearance";

const ProfileSettings = () => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const userId = useCurrentUserId();

	useEffect(() => {
		const loadUserData = async () => {
			if (userId) {
				const userData = await getUserById(userId);
				setUser(userData);
			}
			setLoading(false);
		};

		loadUserData();
	}, [userId]);

	const handleSaveChanges = async () => {
		if (user && userId) {
			setLoading(true);
			await editUserSettings(user, userId);
			setLoading(false);
		}
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="max-w-3xl mx-auto py-8 sm:px-6 lg:px-8 ">
			<div className="flex flex-col justify-center items-center gap-4">
				<div>
					<h1 className="text-3xl font-bold">Profile Settings</h1>
					<p className="text-gray-500 dark:text-gray-400">
						Manage your account information and preferences.
					</p>
				</div>
				<Separator />
				<div className="flex flex-col gap-4">
					<AccountInformation
						user={user}
						setUser={setUser}
					/>
					<SecurityAndAppearance
						user={user as any}
						setUser={setUser}
					/>
				</div>
				<div className="flex justify-end">
					<Button onClick={handleSaveChanges}>Save Changes</Button>
				</div>
			</div>
		</div>
	);
};

export default ProfileSettings;
