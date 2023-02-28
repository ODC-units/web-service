import type { TextInputProps } from 'flowbite-react';
import { Label, TextInput } from 'flowbite-react';
import { ErrorMessage, Field } from 'formik';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

interface CustomTextInputProps {
	id: string;
	name: string;
	type: string;
	placeholder: string;
	as: ForwardRefExoticComponent<
		TextInputProps & RefAttributes<HTMLInputElement>
	>;
}

export const CustomInput: React.FC<CustomTextInputProps> = ({
	id,
	name,
	type,
	placeholder,
}) => {
	return (
		<div className="flex-1">
			<Label htmlFor={id} value={placeholder} />
			<Field
				id={id}
				name={name}
				type={type}
				placeholder={placeholder}
				as={TextInput}
			/>
			<ErrorMessage
				name={name}
				component="div"
				className="text-red-600 text-sm font-medium"
			/>
		</div>
	);
};
