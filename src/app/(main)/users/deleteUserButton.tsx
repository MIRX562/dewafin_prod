import { Button } from "@/components/ui/button";
import { deleteUser } from "@/server-actions/user";

const DeleteUserButton = async ({ userId }: { userId: string }) => {
	const handleOnClick = async () => await deleteUser(userId);
	return (
		<Button
			variant="destructive"
			onClick={handleOnClick}
		>
			Yes
		</Button>
	);
};

export default DeleteUserButton;
