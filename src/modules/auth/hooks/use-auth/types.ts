import type { AuthError, User } from 'firebase/auth';

export interface UseAuthResult {
	user: User | null;
	isLoading: boolean;
	error: AuthError | null;
	loginWithEmailPassword: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
}

export interface UseAuthOptions {
	onUserChange?: (user: User | null) => void;
}
