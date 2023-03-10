import React from 'react';
import { Auth, updateCurrentUser, updateProfile, User } from 'firebase/auth';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import type { UseFirebaseAuthOptions, UseAuthResult } from '../../types';

const useFirebaseAuth = (
	auth: Auth,
	options?: UseFirebaseAuthOptions
): UseAuthResult => {
	const [user, setUser] = React.useState<User | null>(auth.currentUser);
	const [loading, setLoading] = React.useState<boolean>(true);

	React.useEffect(() => {
		const unsubscribe = onAuthStateChanged(
			auth,
			(currentUser) => {
				if (options?.onUserChange) {
					options.onUserChange(currentUser);
				}

				setUser(currentUser);
				setLoading(false);
			},
			(error) => {
				console.error(error);
			},
			() => {
				setLoading(false);
			}
		);

		return unsubscribe;
	}, [auth, options]);

	const loginWithEmailPassword = React.useCallback(
		async (email: string, password: string) => {
			setLoading(true);
			await signInWithEmailAndPassword(auth, email, password);
			setLoading(false);
		},
		[auth]
	);

	const registerWithEmailPassword = React.useCallback(
		async (username: string, email: string, password: string) => {
			setLoading(true);
			await createUserWithEmailAndPassword(auth, email, password);

			await updateProfile(auth.currentUser!, {
				displayName: username,
			});

			setLoading(false);
		},
		[auth]
	);

	const logout = React.useCallback(async () => {
		setLoading(true);
		await signOut(auth);
		setLoading(false);
	}, [auth]);

	return React.useMemo<UseAuthResult>(
		() => ({
			user,
			loading,
			loginWithEmailPassword,
			registerWithEmailPassword,
			logout,
		}),
		[loginWithEmailPassword, loading, logout, registerWithEmailPassword, user]
	);
};

export default useFirebaseAuth;
