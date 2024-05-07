import TbButton from "@/components/pageToolbar/tbButton/DialogButton";
import AddCustomerForm from "./addCustomerForm";

const AddCustomerButton = () => {
	return (
		<TbButton title="+ Add Customer">
			<AddCustomerForm />
		</TbButton>
	);
};

export default AddCustomerButton;
