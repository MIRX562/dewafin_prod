import TbButton from "@/components/common/buttons/DialogButton";
import AddEmployeeForm from "./addEmployeeForm";

const AddEmployeeButton = () => {
	return (
		<TbButton title="+ Add Employee">
			<AddEmployeeForm />
		</TbButton>
	);
};

export default AddEmployeeButton;
