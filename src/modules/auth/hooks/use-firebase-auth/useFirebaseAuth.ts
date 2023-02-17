import React from 'react';
import type { Auth, User } from 'firebase/auth';
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

	React.useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (options?.onUserChange) {
				options.onUserChange(currentUser);
			}

			setUser(currentUser);
		});

		return unsubscribe;
	}, [auth, options]);

	const loginWithEmailPassword = React.useCallback(
		async (email: string, password: string) => {
			await signInWithEmailAndPassword(auth, email, password);
		},
		[auth]
	);

	const registerWithEmailPassword = React.useCallback(
		async (email: string, password: string) => {
			await createUserWithEmailAndPassword(auth, email, password);
		},
		[auth]
	);

	const logout = React.useCallback(async () => {
		await signOut(auth);
	}, [auth]);

	return React.useMemo<UseAuthResult>(
		() => ({
			user,
			loginWithEmailPassword,
			registerWithEmailPassword,
			logout,
		}),
		[loginWithEmailPassword, logout, registerWithEmailPassword, user]
	);
};

export default useFirebaseAuth;
