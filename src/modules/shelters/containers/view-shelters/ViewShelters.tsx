/* eslint-disable @next/next/no-img-element */
import { API_BASE_URL } from '@/api/constants';
import type { ShelterEntityJsonLdSchema } from '@/api/shelters/dtos';
import type { ShelterInfo } from '@/api/shelters/shelterInfo';
import { ShelterLocationSchema } from '@/api/shelters/shelterLocation';
import { SlidingPanel, Visualizer } from '@/components';
import {
	faBed,
	faEnvelope,
	faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Alert, Button, Spinner, Table } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';
import useShelter from '../../hooks/use-shelter/useShelter';
import useShelters from '../../hooks/use-shelters/useShelters';

export const ViewShelters: React.FC = () => {
	const { data: shelters, error: sheltersError } = useShelters();
	const [selectedShelterId, setSelectedShelterId] =
		React.useState<ShelterInfo['id']>();
	const { data: shelter, error: shelterError } = useShelter(selectedShelterId);
	const [isPanelOpen, setIsPanelOpen] = React.useState(false);

	const features: GeoJSON.Feature[] = (shelters || []).map(
		({ id, latitude, longitude }) => ({
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [longitude, latitude],
			},
			properties: {
				id,
			},
		})
	);

	const onFeatureClick = React.useCallback((id: ShelterInfo['id']) => {
		setSelectedShelterId(id);
		setIsPanelOpen(true);
	}, []);

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
			<Visualizer features={features} onFeatureClick={onFeatureClick} />

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
								Region
							</Table.Cell>
							<Table.Cell>{shelter?.region}</Table.Cell>
						</Table.Row>
						<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
								Province
							</Table.Cell>
							<Table.Cell>{shelter?.province}</Table.Cell>
						</Table.Row>
						<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
								Coordinates
							</Table.Cell>
							<Table.Cell>
								{shelter?.latitude}, {shelter?.longitude}
							</Table.Cell>
						</Table.Row>
						<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
								Website
							</Table.Cell>
							<Table.Cell>{shelter?.url}</Table.Cell>
						</Table.Row>
						<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
								Services
							</Table.Cell>
							<Table.Cell>
								{shelter?.amenities?.map((amenity) => {
									switch (amenity.serviceId) {
										case 'Restaurant':
											return (
												<FontAwesomeIcon icon={faUtensils} className="mr-2" />
											);
										case 'Beds':
											return <FontAwesomeIcon icon={faBed} className="mr-2" />;
										default:
											return null;
									}
								}) || 'No services'}
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>

				<hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

				<center>
					<a href={`${API_BASE_URL}/v1/shelters/${shelter?.id}`}>
						view GeoJSON
					</a>
				</center>
			</SlidingPanel>
		</>
	);
};

export default ViewShelters;
