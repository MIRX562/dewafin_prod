import TbButton from "@/components/common/buttons/DialogButton";
import AddUserForm from "./addUserForm";

const AddUserButton = () => {
	return (
		<TbButton title="+ Add User">
			<AddUserForm />
		</TbButton>
	);
};

export default AddUserButton;
