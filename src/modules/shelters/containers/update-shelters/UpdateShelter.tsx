import { getShelter, updateShelter } from '@/api/shelters/providers';
import { ShelterInfo } from '@/api/shelters/shelterInfo';
import { useNotifications } from '@/modules/notifications';
import React from 'react';
import { ShelterForm } from '../../components';
import ShelterFormUpdate from '../../components/shelter-form/ShelterFormUpdate';
import { ShelterFormModel } from '../../components/shelter-form/types';
import useShelter from '../../hooks/use-shelter/useShelter';

export interface UpdateShelterProps {
	id: string;
}

export const UpdateShelter: React.FC<UpdateShelterProps> = ({ id }) => {
	const { addNotification } = useNotifications();
	const [isLoading, setIsLoading] = React.useState(false);

	const { data: shelter, error } = useShelter(id);

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
				await updateShelter({
					id,
					...shelterFormModel,
					amenities: amenities,
				});
				addNotification({
					title: 'Sheleter updated',
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

	const shelterFormModel: ShelterFormModel = React.useMemo(
		() => ({
			name: shelter?.name || '',
			province: shelter?.province || '',
			region: shelter?.region || '',
			latitude: shelter?.latitude || 0,
			longitude: shelter?.longitude || 0,
			url: shelter?.url || '',
			Restaurant:
				shelter?.amenities?.find(
					(amenity) => amenity.serviceId === 'Restaurant'
				)?.value === 'true',
			Sanitary:
				shelter?.amenities?.find((amenity) => amenity.serviceId === 'Sanitary')
					?.value === 'true',
			Electricity:
				shelter?.amenities?.find(
					(amenity) => amenity.serviceId === 'Electricity'
				)?.value === 'true',
			Beds:
				shelter?.amenities?.find((amenity) => amenity.serviceId === 'Beds')
					?.value === 'true',
		}),
		[shelter]
	);

	return (
		<ShelterFormUpdate
			onSubmit={handleSubmit}
			disabled={isLoading}
			shelter={shelterFormModel}
		/>
	);
};

export default UpdateShelter;
