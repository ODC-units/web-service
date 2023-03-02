/* eslint-disable @next/next/no-img-element */
import { Table } from 'flowbite-react';
import type React from 'react';

const regions = [
	{
		name: 'Abruzzo',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Abruzzo-shelters.geojson',
	},
	{
		name: 'Basilicata',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Basilicata-shelters.geojson',
	},
	{
		name: 'Calabria',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Calabria-shelters.geojson',
	},
	{
		name: 'Campania',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Campania-shelters.geojson',
	},
	{
		name: 'Emilia-Romagna',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Emilia-Romagna-shelters.geojson',
	},
	{
		name: 'Friuli Venezia Giulia',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Friuli%20Venezia%20Giulia-shelters.geojson',
	},
	{
		name: 'Lazio',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Lazio-shelters.geojson',
	},
	{
		name: 'Liguria',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Liguria-shelters.geojson',
	},
	{
		name: 'Lombardia',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Lombardia-shelters.geojson',
	},
	{
		name: 'Marche',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Marche-shelters.geojson',
	},
	{
		name: 'Molise',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Molise-shelters.geojson',
	},
	{
		name: 'Piemonte',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Piemonte-shelters.geojson',
	},
	{
		name: 'Puglia',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Puglia-shelters.geojson',
	},
	{
		name: 'Sardegna',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Sardegna-shelters.geojson',
	},
	{
		name: 'Sicilia',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Sicilia-shelters.geojson',
	},
	{
		name: 'Toscana',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Toscana-shelters.geojson',
	},
	{
		name: 'Trentino-Alto Adige',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Trentino-Alto%20Adige-shelters.geojson',
	},
	{
		name: 'Umbria',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Umbria-shelters.geojson',
	},
	{
		name: "Valle d'Aosta",
		url: "https://storage.cloud.google.com/openshelterapi-archive/Valle%20d'Aosta-shelters.geojson",
	},
	{
		name: 'Veneto',
		url: 'https://storage.cloud.google.com/openshelterapi-archive/Veneto-shelters.geojson',
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
											href="https://storage.cloud.google.com/openshelterapi-archive/italy-shelters.geojson"
											className="font-medium text-blue-600 hover:underline dark:text-blue-500"
											target="_blank"
											download="italy-shelters.geojson"
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
													download="italy-shelters.geojson"
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
