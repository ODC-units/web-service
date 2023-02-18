import type { Location } from '@/components';
import { Visualizer } from '@/components';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Alert, Spinner } from 'flowbite-react';
import React from 'react';
import useShelters from '../../hooks/use-shelters/useShelters';

export const ViewShelters: React.FC = () => {
	const { data: shelters, error: sheltersError } = useShelters();

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

	return <Visualizer locations={locations} />;
};
