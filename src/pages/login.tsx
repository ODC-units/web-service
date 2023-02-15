import { useAuth } from '@/modules/auth';
import type {
	GetServerSidePropsContext,
	GetServerSidePropsResult,
	NextPage,
} from 'next';
import { useRouter } from 'next/router';
import type { Route } from 'nextjs-routes';
import type { ParsedUrlQuery } from 'querystring';
import React from 'react';

interface LoginProps {
	callbackUrl: Route['pathname'];
}

const Login: NextPage<LoginProps> = ({ callbackUrl }) => {
	const router = useRouter();

	const { loginWithEmailPassword, registerWithEmailPassword } = useAuth();

	const handleLogin = React.useCallback(() => {
		void loginWithEmailPassword('email@email.com', 'password').then(() => {
			void router.push(callbackUrl);
		});
	}, [loginWithEmailPassword, callbackUrl, router]);

	const handleRegister = React.useCallback(() => {
		void registerWithEmailPassword('email@email.com', 'password').then(() => {
			void router.push(callbackUrl);
		});
	}, [callbackUrl, registerWithEmailPassword, router]);

	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleRegister}>Register</button>
		</div>
	);
};

interface Query extends ParsedUrlQuery {
	callbackUrl?: Route['pathname'];
}

export const getServerSideProps = (
	context: GetServerSidePropsContext
): GetServerSidePropsResult<LoginProps> => {
	const { callbackUrl } = context.query as Query;

	return {
		props: {
			callbackUrl: callbackUrl ?? '/',
		},
	};
};

export default Login;