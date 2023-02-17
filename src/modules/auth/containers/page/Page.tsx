import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';
import React from 'react';
import useAuth from '../../hooks/use-auth/useAuth';

const AuthorizedPage: React.FC<PropsWithChildren> = ({ children }) => {
	const { user, loading } = useAuth();

	const router = useRouter();

	React.useEffect(() => {
		if (!user && !loading) {
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
	}, [router, user, loading]);

	return <>{children}</>;
};

const UnauthorizedPage: React.FC<PropsWithChildren> = ({ children }) => {
	const { user, loading } = useAuth();

	const router = useRouter();

	React.useEffect(() => {
		if (user && !loading) {
			void router.push('/');
		}

		return () => {
			// cleanup
		};
	}, [router, user, loading]);

	return <>{children}</>;
};

export const Page = {
	Authorized: AuthorizedPage,
	OnlyUnauthorized: UnauthorizedPage,
};

export default Page;
