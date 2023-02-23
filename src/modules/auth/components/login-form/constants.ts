import { z } from 'zod';
import type { LoginFormModel, RegisterFormModel } from './types';

export const LOGIN_FORM_VALIDATION_SCHEMA = z.object({
	email: z
		.string({
			required_error: 'Email is required',
			invalid_type_error: 'Invalid email',
		})
		.email('Invalid email')
		.min(1, 'Email is required'),
	password: z
		.string({
			required_error: 'Password is required',
			invalid_type_error: 'Invalid password',
		})
		.min(6, 'Password must be at least 6 characters'),
});

export const LOGIN_FORM_INITIAL_VALUES: LoginFormModel = {
	email: '',
	password: '',
};

export const REGISTER_FORM_VALIDATION_SCHEMA = z.object({
	username: z
		.string({
			required_error: 'Username is required',
			invalid_type_error: 'Invalid username',
		})
		.min(1, 'Username is required'),
	email: z
		.string({
			required_error: 'Email is required',
			invalid_type_error: 'Invalid email',
		})
		.email('Invalid email')
		.min(1, 'Email is required'),
	password: z
		.string({
			required_error: 'Password is required',
			invalid_type_error: 'Invalid password',
		})
		.min(6, 'Password must be at least 6 characters'),
});

export const REGISTER_FORM_INITIAL_VALUES: RegisterFormModel = {
	username: '',
	email: '',
	password: '',
};
