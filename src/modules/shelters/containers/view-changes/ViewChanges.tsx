/* eslint-disable @next/next/no-img-element */
import {
	faBed,
	faBolt,
	faShower,
	faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Table } from 'flowbite-react';
import moment from 'moment';
import React from 'react';
import useShelterChanges from '../../hooks/use-shelter-changes/useShelterChanges';

export interface ViewChangesProps {
	id: string;
}

export const ViewChanges: React.FC<ViewChangesProps> = ({ id }) => {
	const { data: shelters } = useShelterChanges(id);

	console.log(shelters?.length);

	return (
		<>
			{shelters?.map((shelter) => {
				return (
					<div key={`${shelter?.id} ${shelter?.dateCreated}`}>
						<div className="flex flex-wrap gap-2">
							<Badge color="info">
								Creation Date:{' '}
								{moment
									.utc(shelter?.dateCreated)
									.local()
									.format('DD/MM/YYYY HH:mm:ss')}
							</Badge>
							<Badge color="purple">Author: {shelter.author}</Badge>
						</div>
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
								<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
									<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
										Services
									</Table.Cell>
									<Table.Cell>
										{shelter?.amenities?.map((amenity) => {
											switch (amenity.serviceId) {
												case 'Restaurant':
													return (
														<FontAwesomeIcon
															key={amenity.serviceId}
															icon={faUtensils}
															className="mr-2"
														/>
													);
												case 'Beds':
													return (
														<FontAwesomeIcon
															key={amenity.serviceId}
															icon={faBed}
															className="mr-2"
														/>
													);
												case 'Sanitary':
													return (
														<FontAwesomeIcon
															key={amenity.serviceId}
															icon={faShower}
															className="mr-2"
														/>
													);
												case 'Electricity':
													return (
														<FontAwesomeIcon
															key={amenity.serviceId}
															icon={faBolt}
															className="mr-2"
														/>
													);
												default:
													return null;
											}
										}) || 'No services'}
									</Table.Cell>
								</Table.Row>
							</Table.Body>
						</Table>
						<br />
						<hr />
						<br />
					</div>
				);
			})}
		</>
	);
};

export default ViewChanges;
