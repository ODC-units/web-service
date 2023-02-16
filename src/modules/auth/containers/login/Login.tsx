import React from 'react';
import { LoginForm } from '../../components';
import type { LoginFormModel } from '../../components/login-form/types';
import useAuth from '../../hooks/use-auth/useAuth';

export const Login: React.FC = () => {
	const [isLoading, setIsLoading] = React.useState(false);
	const { loginWithEmailPassword } = useAuth();

	const handleSubmit = React.useCallback(
		({ email, password }: LoginFormModel) => {
			setIsLoading(true);

			try {
				void loginWithEmailPassword(email, password);
			} catch (error) {
				console.error(error);
				// Use toasts
			} finally {
				setIsLoading(false);
			}
		},
		[loginWithEmailPassword]
	);

	return <LoginForm onSubmit={handleSubmit} disabled={isLoading} />;
};

export default Login;
