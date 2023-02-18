import { Layout } from '@/components';
import Visualizer from '@/components/visualizer/Visualizer';
import { Page } from '@/modules/auth';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<Page.Authorized>
			<Layout>
				<Visualizer />
			</Layout>
		</Page.Authorized>
	);
};

export default Home;
