import { updateShelter } from '@/api/shelters/providers';
import { useNotifications } from '@/modules/notifications';
import React from 'react';
import { BrowserRouter, Router, useNavigate } from 'react-router-dom';
import ShelterFormUpdate from '../../components/shelter-form/ShelterFormUpdate';
import type { ShelterFormModel } from '../../components/shelter-form/types';
import useServices from '../../hooks/use-services/useServices';
import useShelter from '../../hooks/use-shelter/useShelter';

export interface UpdateShelterProps {
	id: string;
	onUpdate: () => void;
}

export const UpdateShelter: React.FC<UpdateShelterProps> = ({
	id,
	onUpdate,
}) => {
	const { addNotification } = useNotifications();
	const [isLoading, setIsLoading] = React.useState(false);

	const { data: shelter } = useShelter(id);
	const { data: amenities } = useServices();

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
				// Navigate to shelter details
				onUpdate();
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
			amenities={amenities}
		/>
	);
};

export default UpdateShelter;
