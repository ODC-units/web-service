import { Button, Label, TextInput } from 'flowbite-react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import {
	LOGIN_FORM_INITIAL_VALUES,
	LOGIN_FORM_VALIDATION_SCHEMA,
	REGISTER_FORM_INITIAL_VALUES,
	REGISTER_FORM_VALIDATION_SCHEMA,
} from './constants';
import type { RegisterFormModel } from './types';

export interface RegisterFormProps {
	disabled?: boolean;
	onSubmit: (loginValues: RegisterFormModel) => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
	disabled,
	onSubmit,
}) => (
	<Formik
		initialValues={REGISTER_FORM_INITIAL_VALUES}
		validationSchema={toFormikValidationSchema(REGISTER_FORM_VALIDATION_SCHEMA)}
		validateOnChange={false}
		validateOnBlur={false}
		onSubmit={onSubmit}
	>
		<Form className="flex flex-col gap-4">
			<div>
				<Label htmlFor="username" value="Your username" />
				<Field
					id="username"
					name="username"
					type="text"
					placeholder="Username"
					as={TextInput}
				/>
				<ErrorMessage
					name="email"
					component="div"
					className="text-red-600 text-sm font-medium"
				/>
			</div>
			<div>
				<Label htmlFor="email" value="Your email" />
				<Field
					id="email"
					name="email"
					type="email"
					placeholder="Email"
					as={TextInput}
				/>
				<ErrorMessage
					name="email"
					component="div"
					className="text-red-600 text-sm font-medium"
				/>
			</div>
			<div>
				<Label htmlFor="password" value="Your password" />
				<Field
					id="password"
					name="password"
					type="password"
					placeholder="Password"
					as={TextInput}
				/>
				<ErrorMessage
					name="password"
					component="div"
					className="text-red-600 text-sm font-medium"
				/>
			</div>
			<Button type="submit" disabled={disabled}>
				Register
			</Button>
		</Form>
	</Formik>
);

export default RegisterForm;
