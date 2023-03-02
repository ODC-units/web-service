import { Layout } from '@/components';
import ViewArchive from '@/modules/shelters/containers/view-archive/ViewArchive';
import type { NextPage } from 'next';
import 'swagger-ui-react/swagger-ui.css';

const Archive: NextPage = () => {
	return (
		<Layout>
			<ViewArchive />
		</Layout>
	);
};

export default Archive;
