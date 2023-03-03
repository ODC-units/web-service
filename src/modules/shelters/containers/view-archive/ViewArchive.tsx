/* eslint-disable @next/next/no-img-element */
import { Table } from 'flowbite-react';
import type React from 'react';

const regions = [
	{
		name: 'Abruzzo',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Abruzzo-shelters.jsonld',
	},
	{
		name: 'Basilicata',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Basilicata-shelters.jsonld',
	},
	{
		name: 'Calabria',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Calabria-shelters.jsonld',
	},
	{
		name: 'Campania',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Campania-shelters.jsonld',
	},
	{
		name: 'Emilia-Romagna',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Emilia-Romagna-shelters.jsonld',
	},
	{
		name: 'Friuli Venezia Giulia',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Friuli%20Venezia%20Giulia-shelters.jsonld',
	},
	{
		name: 'Lazio',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Lazio-shelters.jsonld',
	},
	{
		name: 'Liguria',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Liguria-shelters.jsonld',
	},
	{
		name: 'Lombardia',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Lombardia-shelters.jsonld',
	},
	{
		name: 'Marche',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Marche-shelters.jsonld',
	},
	{
		name: 'Molise',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Molise-shelters.jsonld',
	},
	{
		name: 'Piemonte',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Piemonte-shelters.jsonld',
	},
	{
		name: 'Puglia',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Puglia-shelters.jsonld',
	},
	{
		name: 'Sardegna',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Sardegna-shelters.jsonld',
	},
	{
		name: 'Sicilia',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Sicilia-shelters.jsonld',
	},
	{
		name: 'Toscana',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Toscana-shelters.jsonld',
	},
	{
		name: 'Trentino-Alto Adige',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Trentino-Alto%20Adige-shelters.jsonld',
	},
	{
		name: 'Umbria',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Umbria-shelters.jsonld',
	},
	{
		name: "Valle d'Aosta",
		url: "https://storage.cloud.google.com/openshelterapi-archive/Valle%20d'Aosta-shelters.jsonld",
	},
	{
		name: 'Veneto',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Veneto-shelters.jsonld',
	},
];

export const ViewArchive: React.FC = () => {
	return (
		<>
			<br />
			<br />
			<div className="flex flex-col">
				<center>
					<div className="w-1/3">
						<Table hoverable={true}>
							<Table.Head>
								<Table.HeadCell>State</Table.HeadCell>

								<Table.HeadCell>
									<span>Get</span>
								</Table.HeadCell>
							</Table.Head>
							<Table.Body className="divide-y">
								<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
									<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
										Italy
									</Table.Cell>
									<Table.Cell>
										<a
											href="https://storage.cloud.google.com/openshelterapi-archive/italy-shelters.jsonld"
											className="font-medium text-blue-600 hover:underline dark:text-blue-500"
											target="_blank"
											download="italy-shelters.jsonld"
										>
											Get
										</a>
									</Table.Cell>
								</Table.Row>
							</Table.Body>
						</Table>
					</div>

					<br />
					<br />

					<div className="w-1/3">
						<Table hoverable={true}>
							<Table.Head>
								<Table.HeadCell>Region</Table.HeadCell>

								<Table.HeadCell>
									<span>Get</span>
								</Table.HeadCell>
							</Table.Head>
							<Table.Body className="divide-y">
								{regions.map((region) => {
									return (
										<Table.Row
											key={`${region}`}
											className="bg-white dark:border-gray-700 dark:bg-gray-800"
										>
											<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
												{region.name}
											</Table.Cell>
											<Table.Cell>
												<a
													href={region.url}
													className="font-medium text-blue-600 hover:underline dark:text-blue-500"
													target="_blank"
													download={`${region}-shelters.jsonld`}
												>
													Get
												</a>
											</Table.Cell>
										</Table.Row>
									);
								})}
							</Table.Body>
						</Table>
					</div>
				</center>
			</div>
		</>
	);
};

export default ViewArchive;
