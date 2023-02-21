import { Layout } from '@/components';
import { Page } from '@/modules/auth';
import ShelterForm from '@/modules/shelters/components/shelter-form/ShelterForm';
import CreateShelter from '@/modules/shelters/containers/create-shelters/CreateShelter';
import type { NextPage } from 'next';

const Form: NextPage = () => {
	return (
		<Page.Authorized>
			<Layout padded>
				<CreateShelter />
			</Layout>
		</Page.Authorized>
	);
};

export default Form;
