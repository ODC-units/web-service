import { Spinner } from 'flowbite-react';
import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';
import React from 'react';
import useAuth from '../../hooks/use-auth/useAuth';

const AuthorizedPage: React.FC<PropsWithChildren> = ({ children }) => {
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
		return <Spinner />;
	}

	return <>{children}</>;
};

const UnauthorizedPage: React.FC<PropsWithChildren> = ({ children }) => {
	const { user, isLoading } = useAuth();

	const router = useRouter();

	React.useEffect(() => {
		if (user && !isLoading) {
			void router.push('/');
		}

		return () => {
			// cleanup
		};
	}, [isLoading, router, user]);

	if (isLoading) {
		return <Spinner />;
	}

	return <>{children}</>;
};

export const Page = {
	Authorized: AuthorizedPage,
	OnlyUnauthorized: UnauthorizedPage,
};

export default Page;
