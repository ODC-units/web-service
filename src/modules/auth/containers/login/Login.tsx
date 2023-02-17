import { useNotifications } from '@/modules/notifications';
import React from 'react';
import { LoginForm } from '../../components';
import type { LoginFormModel } from '../../components/login-form/types';
import useAuth from '../../hooks/use-auth/useAuth';

export const Login: React.FC = () => {
	const { loginWithEmailPassword, isLoading, error } = useAuth();
	const { addNotification } = useNotifications();

	const handleSubmit = React.useCallback(
		({ email, password }: LoginFormModel) => {
			void loginWithEmailPassword(email, password);
			if (error) {
				addNotification({
					severity: 'error',
					title: 'Error',
					message: error.message,
				});
			}
		},
		[addNotification, error, loginWithEmailPassword]
	);

	return <LoginForm onSubmit={handleSubmit} disabled={isLoading} />;
};

export default Login;
