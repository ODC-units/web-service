/* eslint-disable @next/next/no-img-element */

import { API_BASE_URL } from '@/api/constants';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import InformationCircleIcon from '@heroicons/react/24/outline/InformationCircleIcon';
import { Badge, Button, Table, Timeline, Tooltip } from 'flowbite-react';
import moment from 'moment';
import Link from 'next/link';
import type React from 'react';
import useShelterChanges from '../../hooks/use-shelter-changes/useShelterChanges';

export interface ViewChangesProps {
	id: string;
}

export const ViewChanges: React.FC<ViewChangesProps> = ({ id }) => {
	const { data: shelters } = useShelterChanges(id);

	return (
		<>
			<Button.Group>
				<Button size="xs" color="gray">
					<Link
						href={{
							pathname: '/update',
							query: { id },
						}}
					>
						Update
					</Link>
				</Button>
				<Button size="xs" color="gray">
					<Tooltip
						content={`${API_BASE_URL}/v1/shelters/${id}/history`}
						trigger="hover"
					>
						<a href={`${API_BASE_URL}/v1/shelters/${id}/history`}>
							Get History
						</a>
					</Tooltip>
				</Button>
			</Button.Group>
			<br />
			<br />
			<Timeline>
				{shelters?.map((shelter) => {
					return (
						<Timeline.Item key={`${shelter?.id}${shelter?.dateCreated}`}>
							<Timeline.Point />
							<Timeline.Content>
								<Timeline.Time>
									Edited on{' '}
									<b>
										{moment
											.utc(shelter?.dateCreated)
											.local()
											.format('DD/MM/YYYY')}{' '}
									</b>
									by{' '}
									<b>
										<u>{shelter?.author}</u>
									</b>
								</Timeline.Time>
								<br />
								<br />
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
														<Table.Cell>
															<a href={`${shelter?.url}`} target="_blank">
																{shelter?.url}
															</a>
														</Table.Cell>
													</Table.Row>
												</Table.Body>
											</Table>
										</div>
										<div className="w-1/2">
											{shelter?.amenities.length > 0 ? (
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
																	{amenity.serviceAttribute}{' '}
																	<a
																		href={`https://storage.cloud.google.com/vocabularies/openshelterapi/vocabularies/${amenity.serviceAttribute}.json`}
																		target="_blank"
																		style={{
																			display: 'inline-block',
																			verticalAlign: 'middle',
																		}}
																	>
																		<InformationCircleIcon className="w-5 h-5" />
																	</a>
																</Table.Cell>
																<Table.Cell>{amenity.serviceValue}</Table.Cell>
															</Table.Row>
														))}
													</Table.Body>
												</Table>
											) : (
												<div className="text-gray-500 dark:text-gray-400">
													<center>No services informations</center>
												</div>
											)}
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
