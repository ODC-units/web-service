import type { FirebaseOptions } from 'firebase/app';
import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const options: FirebaseOptions = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
};

const initializeFirebaseApp = () => {
	if (options.apiKey) {
		return getApps().length === 0 ? initializeApp(options) : getApps()[0];
	}

	throw new Error('Firebase API key is not defined');
};

const firebaseApp = initializeFirebaseApp();

export const auth = getAuth(firebaseApp);
