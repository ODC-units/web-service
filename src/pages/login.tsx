import { Layout } from '@/components';
import { Login as LoginUser, Page, useAuth } from '@/modules/auth';
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

	return (
		<Page.OnlyUnauthorized>
			<Layout padded>
				<LoginUser />
				{/* <button onClick={handleLogin}>Login</button>
				<button onClick={handleRegister}>Register</button> */}
			</Layout>
		</Page.OnlyUnauthorized>
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
