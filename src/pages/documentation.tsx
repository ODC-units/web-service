import { API_BASE_URL } from '@/api/constants';
import { Layout } from '@/components';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createSwaggerSpec } from 'next-swagger-doc';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), {
	ssr: false,
});

function ApiDocumentation() {
	return (
		<Layout>
			<SwaggerUI url={`${API_BASE_URL}/api-json`} />
		</Layout>
	);
}

export default ApiDocumentation;
