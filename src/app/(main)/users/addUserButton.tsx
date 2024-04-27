import TbButton from "@/components/pageToolbar/tbButton/TbButton";
import AddUserForm from "./addUserForm";

const AddUserButton = () => {
	return (
		<TbButton title="+ Add User">
			<AddUserForm />
		</TbButton>
	);
};

export default AddUserButton;
