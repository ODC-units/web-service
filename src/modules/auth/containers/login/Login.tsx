import { useNotifications } from '@/modules/notifications';
import React from 'react';
import { LoginForm } from '../../components';
import type { LoginFormModel } from '../../components/login-form/types';
import useAuth from '../../hooks/use-auth/useAuth';

export const Login: React.FC = () => {
	const { loginWithEmailPassword } = useAuth();
	const { addNotification } = useNotifications();
	const [isLoading, setIsLoading] = React.useState(false);

	const handleSubmit = React.useCallback(
		async ({ email, password }: LoginFormModel) => {
			setIsLoading(true);

			try {
				await loginWithEmailPassword(email, password);
			} catch (error) {
				addNotification({
					title: 'Login failed',
					severity: 'error',
				});
			} finally {
				setIsLoading(false);
			}
		},
		[addNotification, loginWithEmailPassword]
	);

	return <LoginForm onSubmit={handleSubmit} disabled={isLoading} />;
};

export default Login;
