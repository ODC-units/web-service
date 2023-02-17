import type { User } from 'firebase/auth';

export interface UseAuthResult {
	user: User | null;
	loading: boolean;
	loginWithEmailPassword: (email: string, password: string) => Promise<void>;
	registerWithEmailPassword: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
}

export interface UseFirebaseAuthOptions {
	onUserChange?: (user: User | null) => void;
}

export type AuthContextType = UseAuthResult;
