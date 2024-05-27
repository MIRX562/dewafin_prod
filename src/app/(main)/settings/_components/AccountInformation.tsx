import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getNameInitials } from "@/lib/utils";

const AccountInformation = ({ user, setUser }: any) => {
	const handleChange = (e: any) => {
		const { id, value } = e.target;
		setUser((prevUser: any) => ({
			...prevUser,
			[id]: value,
		}));
	};

	return (
		<div className="space-y-6 bg-slate-100 dark:bg-slate-800 rounded-md p-4 shadow-md">
			<div>
				<h2 className="text-xl text-center font-semibold">
					Account Information
				</h2>
				<div className="mt-4 space-y-4">
					<div className="flex flex-col gap-2">
						<Label htmlFor="avatar">Avatar</Label>
						<div className="mt-2 flex items-center space-x-4">
							<Avatar className="h-16 w-16 border">
								<AvatarImage
									alt={getNameInitials(user.name)}
									src={user.image}
								/>
								<AvatarFallback>{user.name[0]}</AvatarFallback>
							</Avatar>
							<Input
								id="image"
								value={user.image}
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="name">Name</Label>
						<Input
							id="name"
							value={user.name}
							onChange={handleChange}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AccountInformation;
