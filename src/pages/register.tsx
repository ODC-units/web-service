import { Layout } from '@/components';
import { Register as RegisterUser, Page, useAuth } from '@/modules/auth';
import type {
	GetServerSidePropsContext,
	GetServerSidePropsResult,
	NextPage,
} from 'next';
import { useRouter } from 'next/router';
import type { Route } from 'nextjs-routes';
import type { ParsedUrlQuery } from 'querystring';
import React from 'react';

interface RegisterProps {
	callbackUrl: Route['pathname'];
}

const Register: NextPage<RegisterProps> = ({ callbackUrl }) => {
	const router = useRouter();

	return (
		<Page.OnlyUnauthorized>
			<Layout padded>
				<RegisterUser />
			</Layout>
		</Page.OnlyUnauthorized>
	);
};

interface Query extends ParsedUrlQuery {
	callbackUrl?: Route['pathname'];
}

export const getServerSideProps = (
	context: GetServerSidePropsContext
): GetServerSidePropsResult<RegisterProps> => {
	const { callbackUrl } = context.query as Query;

	return {
		props: {
			callbackUrl: callbackUrl ?? '/',
		},
	};
};

export default Register;
