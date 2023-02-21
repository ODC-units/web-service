import { Layout } from '@/components';
import { Page } from '@/modules/auth';
import { ViewShelters } from '@/modules/shelters';
import type { NextPage } from 'next';
import 'swagger-ui-react/swagger-ui.css';

const Home: NextPage = () => {
	return (
		<Layout>
			<ViewShelters />
		</Layout>
	);
};

export default Home;
