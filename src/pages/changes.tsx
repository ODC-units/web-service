import { Layout } from '@/components';
import { Page } from '@/modules/auth';
import ViewChanges from '@/modules/shelters/containers/view-changes/ViewChanges';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Changes: NextPage = () => {
	const router = useRouter();
	const { id } = router.query;

	console.log(id);

	return (
		<Layout padded>
			<ViewChanges id={id as string} />
		</Layout>
	);
};

export default Changes;
