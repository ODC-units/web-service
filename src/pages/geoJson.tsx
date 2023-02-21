import { Layout } from '@/components';
import { Page } from '@/modules/auth';
import ShelterForm from '@/modules/shelters/components/shelter-form/ShelterForm';
import CreateShelter from '@/modules/shelters/containers/create-shelters/CreateShelter';
import type { NextPage } from 'next';
import ReactJson from 'react-json-view';

const GeoJsonPage: NextPage = () => {
	return (
		<Page.Authorized>
			<ReactJson src={{}} />
		</Page.Authorized>
	);
};

export default GeoJsonPage;
