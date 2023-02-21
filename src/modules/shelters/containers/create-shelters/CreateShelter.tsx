import { createShelter } from '@/api/shelters/providers';
import { ShelterInfoSchema } from '@/api/shelters/shelterInfo';
import { useNotifications } from '@/modules/notifications';
import React from 'react';
import { ShelterForm } from '../../components';
import { ShelterFormModel } from '../../components/shelter-form/types';

export const CreateShelter: React.FC = () => {
	const { addNotification } = useNotifications();
	const [isLoading, setIsLoading] = React.useState(false);

	const handleSubmit = React.useCallback(
		async ({
			name,
			province,
			region,
			latitude,
			longitude,
			url,
		}: ShelterFormModel) => {
			setIsLoading(true);

			try {
				await createShelter({
					name,
					province,
					region,
					latitude,
					longitude,
					url,
				});
			} catch (error) {
				addNotification({
					title: 'Sheleter creation failed',
					severity: 'error',
				});
			} finally {
				setIsLoading(false);
			}
		},
		[]
	);

	return <ShelterForm onSubmit={handleSubmit} disabled={isLoading} />;
};

export default CreateShelter;
