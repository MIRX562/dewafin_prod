import { Input } from "@/components/ui/input";
import React from "react";

interface CommaSeparatedInputProps {
	value: string[];
	onChange: (value: string[]) => void;
}

export const CommaSeparatedInput: React.FC<CommaSeparatedInputProps> = ({
	value,
	onChange,
}) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		const valuesArray = inputValue.split(",").map((val) => val.trim());
		onChange(valuesArray);
	};

	return (
		<Input
			type="text"
			value={value.join(", ")}
			onChange={handleChange}
			placeholder="Enter comma-separated values"
			className="input-class"
		/>
	);
};
