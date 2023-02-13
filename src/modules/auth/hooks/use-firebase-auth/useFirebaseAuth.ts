import React from 'react';
import type { Auth, AuthError, User } from 'firebase/auth';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import type {
	UseFirebaseAuthOptions,
	UseFirebaseAuthResult,
} from '../../types';

const useFirebaseAuth = (
	auth: Auth,
	options?: UseFirebaseAuthOptions
): UseFirebaseAuthResult => {
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

	const registerWithEmailPassword = React.useCallback(
		async (email: string, password: string) => {
			setIsLoading(true);

			try {
				await createUserWithEmailAndPassword(auth, email, password);
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

	return React.useMemo<UseFirebaseAuthResult>(
		() => ({
			user,
			isLoading,
			error,
			loginWithEmailPassword,
			registerWithEmailPassword,
			logout,
		}),
		[
			error,
			isLoading,
			loginWithEmailPassword,
			logout,
			registerWithEmailPassword,
			user,
		]
	);
};

export default useFirebaseAuth;
