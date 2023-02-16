import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';
import React from 'react';
import useAuth from '../../hooks/use-auth/useAuth';

export const AuthorizedPage: React.FC<PropsWithChildren> = ({ children }) => {
	const { user, isLoading } = useAuth();

	const router = useRouter();

	React.useEffect(() => {
		if (!user && !isLoading) {
			if (router.pathname !== '/login') {
				void router.push({
					pathname: '/login',
					query: {
						callbackUrl: router.pathname,
					},
				});
			}
		}

		return () => {
			// cleanup
		};
	}, [isLoading, router, user]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return <>{children}</>;
};

export default AuthorizedPage;
