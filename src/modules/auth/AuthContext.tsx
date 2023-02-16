import type { PropsWithChildren } from 'react';
import React from 'react';
import useFirebaseAuth from './hooks/use-firebase-auth/useFirebaseAuth';
import type { AuthContextType } from './types';
import { auth } from './config';

const AuthContext = React.createContext<AuthContextType>({
	user: null,
	isLoading: true,
	error: null,
	loginWithEmailPassword: async () => {},
	registerWithEmailPassword: async () => {},
	logout: async () => {},
});

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const firebaseAuth = useFirebaseAuth(auth);

	if (firebaseAuth.isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<AuthContext.Provider value={firebaseAuth}>{children}</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
