import { createShelter } from '@/api/shelters/providers';
import { ShelterInfo } from '@/api/shelters/shelterInfo';
import { useNotifications } from '@/modules/notifications';
import React from 'react';
import { ShelterForm } from '../../components';
import { ShelterFormModel } from '../../components/shelter-form/types';

export const CreateShelter: React.FC = () => {
	const { addNotification } = useNotifications();
	const [isLoading, setIsLoading] = React.useState(false);

	const handleSubmit = React.useCallback(
		async ({
			Restaurant,
			Sanitary,
			Electricity,
			Beds,
			...shelterFormModel
		}: ShelterFormModel) => {
			setIsLoading(true);

			console.log(shelterFormModel);

			const amenities = Object.entries({
				Restaurant,
				Sanitary,
				Electricity,
				Beds,
			}).reduce((acc, [key, value]) => {
				if (value) {
					acc = [
						...acc,
						{
							serviceId: key,
							value: 'true',
						},
					];
				}

				return acc;
			}, [] as ShelterInfo['amenities']);

			try {
				await createShelter({
					...shelterFormModel,
					amenities: amenities,
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
		[]
	);

	return <ShelterForm onSubmit={handleSubmit} disabled={isLoading} />;
};

export default CreateShelter;
