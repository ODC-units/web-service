import { Button, Label, TextInput } from 'flowbite-react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import {
	LOGIN_FORM_INITIAL_VALUES,
	LOGIN_FORM_VALIDATION_SCHEMA,
} from './constants';
import type { LoginFormModel } from './types';

export interface LoginFormProps {
	disabled?: boolean;
	onSubmit: (loginValues: LoginFormModel) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ disabled, onSubmit }) => (
	<Formik
		initialValues={LOGIN_FORM_INITIAL_VALUES}
		validationSchema={toFormikValidationSchema(LOGIN_FORM_VALIDATION_SCHEMA)}
		validateOnChange={false}
		validateOnBlur={false}
		onSubmit={onSubmit}
	>
		<Form className="flex flex-col gap-4">
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
				Login
			</Button>
		</Form>
	</Formik>
);

export default LoginForm;
