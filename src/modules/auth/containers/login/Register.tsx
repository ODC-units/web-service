import { useNotifications } from '@/modules/notifications';
import React from 'react';
import { LoginForm } from '../../components';
import RegisterForm from '../../components/login-form/RegisterForm';
import type { RegisterFormModel } from '../../components/login-form/types';
import useAuth from '../../hooks/use-auth/useAuth';

export const Register: React.FC = () => {
	const { registerWithEmailPassword } = useAuth();
	const { addNotification } = useNotifications();
	const [isLoading, setIsLoading] = React.useState(false);

	const handleSubmit = React.useCallback(
		async ({ username, email, password }: RegisterFormModel) => {
			setIsLoading(true);

			try {
				await registerWithEmailPassword(username, email, password);
			} catch (error) {
				addNotification({
					title: 'Login failed',
					severity: 'error',
				});
			} finally {
				setIsLoading(false);
			}
		},
		[addNotification, registerWithEmailPassword]
	);

	return <RegisterForm onSubmit={handleSubmit} disabled={isLoading} />;
};

export default Register;
