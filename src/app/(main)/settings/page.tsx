"use client";
import Loading from "@/app/loading";
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
		return <Loading />;
	}

	return (
		<div className="max-w-3xl mx-auto sm:px-6 lg:px-8 ">
			<div className="flex flex-col gap-4">
				<div>
					<h3 className="text-lg font-medium">Profile</h3>
					<p className="text-sm text-muted-foreground">
						This is how others will see you on the site.
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

				<Button onClick={handleSaveChanges}>Save Changes</Button>
			</div>
		</div>
	);
};

export default ProfileSettings;
