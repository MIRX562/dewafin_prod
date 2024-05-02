import TbButton from "@/components/pageToolbar/tbButton/TbButton";
import AddEmployeeForm from "./addEmployeeForm";

const AddEmployeeButton = () => {
  return (
    <TbButton title="+ Add Employee">
      <AddEmployeeForm />
    </TbButton>
  );
};

export default AddEmployeeButton;
