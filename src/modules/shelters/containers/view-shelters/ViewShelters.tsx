/* eslint-disable @next/next/no-img-element */
import type { ShelterEntityJsonLdSchema } from '@/api/shelters/dtos';
import { ShelterInfoSchema } from '@/api/shelters/shelterInfo';
import { ShelterLocationSchema } from '@/api/shelters/shelterLocation';
import type { Location } from '@/components';
import { SlidingPanel, Visualizer } from '@/components';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Alert, Spinner, Table } from 'flowbite-react';
import { MapboxGeoJSONFeature } from 'mapbox-gl';
import React from 'react';
import useShelter from '../../hooks/use-shelter/useShelter';
import useShelters from '../../hooks/use-shelters/useShelters';

export const ViewShelters: React.FC = () => {
	const { data: shelters, error: sheltersError } = useShelters();
	const [selectedShelterId, setSelectedShelterId] =
		React.useState<ShelterInfoSchema['id']>();
	const { data: shelter, error: shelterError } = useShelter(selectedShelterId);
	const [isPanelOpen, setIsPanelOpen] = React.useState(false);

	const locations: GeoJSON.FeatureCollection<GeoJSON.Geometry> = React.useMemo(
		() => (shelters || []).map(({ id, latitude, longitude }) => ({})),
		[shelters]
	);

	const onShelterClick = React.useCallback(
		(id: Location['id']) => {
			setSelectedShelterId(id);
			setIsPanelOpen(true);
		},
		[selectedShelterId]
	);

	const onShelterClose = React.useCallback(() => {
		setIsPanelOpen(false);

		setTimeout(() => {
			setSelectedShelterId(undefined);
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

			<SlidingPanel open={isPanelOpen} onClose={onShelterClose}>
				<Table striped={true}>
					<Table.Head>
						<Table.HeadCell>Field</Table.HeadCell>
						<Table.HeadCell>Value</Table.HeadCell>
					</Table.Head>
					<Table.Body className="divide-y">
						<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
								Name
							</Table.Cell>
							<Table.Cell>{shelter?.name}</Table.Cell>
						</Table.Row>
						<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
								Description
							</Table.Cell>
							<Table.Cell>{shelter?.description}</Table.Cell>
						</Table.Row>
						<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
								Province
							</Table.Cell>
							<Table.Cell>{shelter?.province}</Table.Cell>
						</Table.Row>
						<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
								Region
							</Table.Cell>
							<Table.Cell>{shelter?.region}</Table.Cell>
						</Table.Row>
						<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
								Country
							</Table.Cell>
							<Table.Cell>{shelter?.country}</Table.Cell>
						</Table.Row>
						<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
								Beds
							</Table.Cell>
							<Table.Cell>{shelter?.beds}</Table.Cell>
						</Table.Row>
						<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
								Website
							</Table.Cell>
							<Table.Cell>{shelter?.url}</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
			</SlidingPanel>
		</>
	);
};

export default ViewShelters;
