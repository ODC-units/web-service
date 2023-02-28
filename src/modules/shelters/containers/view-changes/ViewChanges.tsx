/* eslint-disable @next/next/no-img-element */

import { Badge, Table, Timeline } from 'flowbite-react';
import moment from 'moment';
import type React from 'react';
import useShelterChanges from '../../hooks/use-shelter-changes/useShelterChanges';

export interface ViewChangesProps {
	id: string;
}

export const ViewChanges: React.FC<ViewChangesProps> = ({ id }) => {
	const { data: shelters } = useShelterChanges(id);

	return (
		<>
			<Timeline>
				{shelters?.map((shelter) => {
					return (
						<Timeline.Item key={`${shelter?.id}${shelter?.dateCreated}`}>
							<Timeline.Point />
							<Timeline.Content>
								<Timeline.Time>
									<Badge color="info">
										Edited on:{' '}
										{moment
											.utc(shelter?.dateCreated)
											.local()
											.format('DD/MM/YYYY')}{' '}
										by <u>{shelter?.author}</u>
									</Badge>
									<br />
								</Timeline.Time>
								<Timeline.Body>
									<div className="flex gap-10">
										<div className="w-1/2">
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
										</div>
										<div className="w-1/2">
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
										</div>
									</div>
								</Timeline.Body>
							</Timeline.Content>
						</Timeline.Item>
					);
				})}
			</Timeline>
		</>
	);
};

export default ViewChanges;
