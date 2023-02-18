import { Layout } from '@/components';
import { Page } from '@/modules/auth';
import { ViewShelters } from '@/modules/shelters';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<Page.Authorized>
			<Layout>
				<ViewShelters />
			</Layout>
		</Page.Authorized>
	);
};

export default Home;
