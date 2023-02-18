/* eslint-disable @next/next/no-img-element */
import type { Shelter } from '@/api/shelters/dtos';
import type { Location } from '@/components';
import { SlidingPanel, Visualizer } from '@/components';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Alert, Spinner } from 'flowbite-react';
import React from 'react';
import useShelters from '../../hooks/use-shelters/useShelters';

export const ViewShelters: React.FC = () => {
	const { data: shelters, error: sheltersError } = useShelters();
	const [selectedShelter, setSelectedShelter] = React.useState<Shelter>();
	const [isPanelOpen, setIsPanelOpen] = React.useState(false);

	const locations: Location[] = React.useMemo(
		() =>
			(shelters || []).map(({ id, name, latitude, longitude }) => ({
				id,
				name,
				latitude,
				longitude,
			})),
		[shelters]
	);

	const onShelterClick = React.useCallback(
		(id: Location['id']) => {
			const currentShelter = shelters?.find((shelter) => shelter.id === id);

			if (currentShelter) {
				setSelectedShelter(currentShelter);
				setIsPanelOpen(true);
			}
		},
		[shelters]
	);

	const onShelterClose = React.useCallback(() => {
		setIsPanelOpen(false);

		setTimeout(() => {
			setSelectedShelter(undefined);
		}, 500);
	}, []);

	if (!shelters && !sheltersError) {
		return <Spinner />;
	}

	if (sheltersError) {
		return (
			<Alert color="failure" icon={ExclamationCircleIcon}>
				<span className="text-sm font-medium">{sheltersError.message}</span>
			</Alert>
		);
	}

	return (
		<>
			<Visualizer locations={locations} onLocationClick={onShelterClick} />

			<SlidingPanel
				open={isPanelOpen}
				onClose={onShelterClose}
				title={selectedShelter?.name}
			>
				<div className="flex flex-col space-y-4">
					<div className="relative h-80">
						<img
							src={selectedShelter?.photo || ''}
							alt={selectedShelter?.name || ''}
							style={{
								objectFit: 'cover',
								width: '100%',
								height: '100%',
								position: 'absolute',
							}}
						/>
					</div>
				</div>
			</SlidingPanel>
		</>
	);
};

export default ViewShelters;
