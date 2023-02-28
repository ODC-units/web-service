/* eslint-disable @next/next/no-img-element */
import { API_BASE_URL } from '@/api/constants';
import type { ShelterInfo } from '@/api/shelters/shelterInfo';
import { SlidingPanel, Visualizer } from '@/components';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Alert, Badge, Button, Spinner, Table, Tooltip } from 'flowbite-react';
import moment from 'moment';
import Link from 'next/link';
import React from 'react';
import useShelter from '../../hooks/use-shelter/useShelter';
import useShelters from '../../hooks/use-shelters/useShelters';

export const ViewShelters: React.FC = () => {
	const { data: shelters, error: sheltersError } = useShelters();
	const [selectedShelterId, setSelectedShelterId] =
		React.useState<ShelterInfo['id']>();
	const { data: shelter } = useShelter(selectedShelterId);
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
				type: 'shelter',
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
		return (
			<>
				<div className="text-center">
					<Spinner aria-label="Center-aligned spinner example" size="xl" />
				</div>
			</>
		);
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

			<SlidingPanel open={isPanelOpen}>
				<div className="flex flex-wrap gap-12">
					<Button size="xs" color="gray" onClick={onShelterClose}>
						X
					</Button>

					<Button.Group>
						<Button size="xs" color="gray">
							<Link
								href={{
									pathname: '/update',
									query: { id: shelter?.id },
								}}
							>
								Update
							</Link>
						</Button>
						<Button size="xs" color="gray">
							<Tooltip
								content={`${API_BASE_URL}/v1/shelters/${shelter?.id}`}
								trigger="hover"
							>
								<a href={`${API_BASE_URL}/v1/shelters/${shelter?.id}`}>
									Get GeoJSON
								</a>
							</Tooltip>
						</Button>

						<Button size="xs" color="gray">
							<Link
								href={{
									pathname: '/changes',
									query: { id: shelter?.id },
								}}
							>
								View History
							</Link>
						</Button>
					</Button.Group>
				</div>

				<br />
				<Badge color="info">
					Edited on:{' '}
					{moment.utc(shelter?.dateCreated).local().format('DD/MM/YYYY')} by{' '}
					<u>{shelter?.author}</u>
				</Badge>
				<br />
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
					</Table.Body>
				</Table>

				<br />
				<hr />
				<br />
				<Table striped={true}>
					<Table.Head>
						<Table.HeadCell>Service</Table.HeadCell>
						<Table.HeadCell>Value</Table.HeadCell>
					</Table.Head>
					<Table.Body className="divide-y">
						{shelter?.amenities.map((amenity) => (
							<Table.Row
								key={amenity.serviceAttribute}
								className="bg-white dark:border-gray-700 dark:bg-gray-800"
							>
								<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
									{amenity.serviceAttribute}
								</Table.Cell>
								<Table.Cell>{amenity.serviceValue}</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
			</SlidingPanel>
		</>
	);
};

export default ViewShelters;
