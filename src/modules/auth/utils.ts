import { getIdToken, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/modules/auth/config';

export const getUserToken = async (): Promise<string | null> => {
	return new Promise((resolve, reject) => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				getIdToken(user)
					.then((token) => {
						resolve(token);
					})
					.catch((err) => {
						reject(err);
					});
			} else {
				resolve(null);
			}

			unsubscribe();
		});
	});
};
