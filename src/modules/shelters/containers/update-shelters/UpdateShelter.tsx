import { updateShelter } from '@/api/shelters/providers';
import { useNotifications } from '@/modules/notifications';
import React from 'react';
import ShelterFormUpdate from '../../components/shelter-form/ShelterFormUpdate';
import type { ShelterFormModel } from '../../components/shelter-form/types';
import useShelter from '../../hooks/use-shelter/useShelter';

export interface UpdateShelterProps {
	id: string;
}

export const UpdateShelter: React.FC<UpdateShelterProps> = ({ id }) => {
	const { addNotification } = useNotifications();
	const [isLoading, setIsLoading] = React.useState(false);

	const { data: shelter } = useShelter(id);

	const handleSubmit = React.useCallback(
		async ({ ...shelterFormModel }: ShelterFormModel) => {
			setIsLoading(true);

			try {
				await updateShelter({
					id,
					...shelterFormModel,
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
		[addNotification, id]
	);

	const shelterFormModel: ShelterFormModel = React.useMemo(
		() => ({
			name: shelter?.name || '',
			province: shelter?.province || '',
			region: shelter?.region || '',
			latitude: shelter?.latitude || 0,
			longitude: shelter?.longitude || 0,
			url: shelter?.url || '',
			amenities: shelter?.amenities || [],
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
