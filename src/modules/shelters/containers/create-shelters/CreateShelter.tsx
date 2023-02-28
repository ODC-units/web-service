import { createShelter } from '@/api/shelters/providers';
import { useNotifications } from '@/modules/notifications';
import React, { useEffect, useState } from 'react';
import { ShelterForm } from '../../components';
import type { ShelterFormModel } from '../../components/shelter-form/types';
import useServices from '../../hooks/use-services/useServices';

export const CreateShelter: React.FC = () => {
	const { addNotification } = useNotifications();
	const [isLoading, setIsLoading] = React.useState(false);

	const { data: amenities } = useServices();

	const handleSubmit = React.useCallback(
		async ({ ...shelterFormModel }: ShelterFormModel) => {
			setIsLoading(true);

			try {
				await createShelter({
					...shelterFormModel,
				});
				addNotification({
					title: 'Sheleter added',
					severity: 'success',
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
		[addNotification]
	);

	return (
		<ShelterForm
			onSubmit={handleSubmit}
			disabled={isLoading}
			amenities={amenities}
		/>
	);
};

export default CreateShelter;
