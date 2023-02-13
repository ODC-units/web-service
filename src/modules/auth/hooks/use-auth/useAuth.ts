import React from 'react';
import type { Auth, AuthError, User } from 'firebase/auth';
import {
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import type { UseAuthOptions, UseAuthResult } from './types';

const useAuth = (auth: Auth, options?: UseAuthOptions): UseAuthResult => {
	const [error, setError] = React.useState<AuthError | null>(null);
	const [isLoading, setIsLoading] = React.useState(false);
	const [user, setUser] = React.useState<User | null>(auth.currentUser);

	React.useEffect(() => {
		const authListener = onAuthStateChanged(auth, (currentUser) => {
			if (options?.onUserChange) {
				options.onUserChange(currentUser);
			}

			setUser(currentUser);
			setIsLoading(false);
			setError(null);
		});

		return () => authListener();
	}, [auth, options]);

	const loginWithEmailPassword = React.useCallback(
		async (email: string, password: string) => {
			setIsLoading(true);

			try {
				await signInWithEmailAndPassword(auth, email, password);
			} catch (err) {
				setError(err as AuthError);
			} finally {
				setIsLoading(false);
			}
		},
		[auth]
	);

	const logout = React.useCallback(async () => {
		setIsLoading(true);

		try {
			await signOut(auth);
		} catch (err) {
			setError(err as AuthError);
		} finally {
			setIsLoading(false);
		}
	}, [auth]);

	return React.useMemo<UseAuthResult>(
		() => ({
			user,
			isLoading,
			error,
			loginWithEmailPassword,
			logout,
		}),
		[error, isLoading, loginWithEmailPassword, logout, user]
	);
};

export default useAuth;
