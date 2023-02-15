import type { AuthError, User } from 'firebase/auth';

export interface UseAuthResult {
	user: User | null;
	isLoading: boolean;
	error: AuthError | null;
	loginWithEmailPassword: (email: string, password: string) => Promise<void>;
	registerWithEmailPassword: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
}

export interface UseFirebaseAuthOptions {
	onUserChange?: (user: User | null) => void;
}

export type AuthContextType = UseAuthResult;
