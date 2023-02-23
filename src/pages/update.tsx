import { Layout } from '@/components';
import { Page } from '@/modules/auth';
import UpdateShelter from '@/modules/shelters/containers/update-shelters/UpdateShelter';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Form: NextPage = () => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<Page.Authorized>
			<Layout padded>
				<UpdateShelter id={id as string} />
			</Layout>
		</Page.Authorized>
	);
};

export default Form;
