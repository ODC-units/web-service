import { Button, Checkbox, Label, Select, TextInput } from 'flowbite-react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { SetStateAction, useState } from 'react';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import {
	SHELTER_FORM_INITIAL_VALUES,
	SHELTER_FORM_VALIDATION_SCHEMA,
} from './constants';
import { ShelterFormModel } from './types';

export interface ShelterFormProps {
	disabled?: boolean;
	onSubmit: (loginValues: ShelterFormModel) => void;
}

const regions = [
	{
		id: 0,
		name: 'Friuli Venezia Giulia',
		provinces: ['Gorizia', 'Pordenone', 'Udine', 'Trieste'],
	},
	{ id: 1, name: 'Lombardia', provinces: ['Milano', 'Bergamo', 'Brescia'] },
	{ id: 2, name: 'Toscana', provinces: ['Firenze', 'Pisa', 'Siena'] },
	{
		id: 3,
		name: 'Veneto',
		provinces: ['Belluno', 'Verona', 'Vicenza', 'Padova'],
	},
];

export const ShelterForm: React.FC<ShelterFormProps> = ({
	disabled,
	onSubmit,
}) => {
	return (
		<Formik
			initialValues={SHELTER_FORM_INITIAL_VALUES}
			validationSchema={toFormikValidationSchema(
				SHELTER_FORM_VALIDATION_SCHEMA
			)}
			validateOnChange={false}
			validateOnBlur={false}
			onSubmit={onSubmit}
		>
			{({ values }) => (
				<Form className="flex flex-col gap-4">
					<h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>
						Shelter Informations
					</h1>
					<div className="flex gap-4">
						<div className="flex-1">
							<Label htmlFor="name" value="Shelter name *" />
							<Field
								id="name"
								name="name"
								type="text"
								placeholder="Name"
								as={TextInput}
							/>
							<ErrorMessage
								name="name"
								component="div"
								className="text-red-600 text-sm font-medium"
							/>
						</div>

						<div className="flex-2">
							<Label htmlFor="region" value="Region *" />
							<Field id="region" name="region" as={Select}>
								<option value="">Select a region</option>
								{regions.map((region) => (
									<option key={region.id} value={region.name}>
										{region.name}
									</option>
								))}
							</Field>
							<ErrorMessage
								name="region"
								component="div"
								className="text-red-600 text-sm font-medium"
							/>
						</div>

						<div className="flex-2">
							<Label htmlFor="province" value="Province *" />
							<Field as={Select} id="province" name="province">
								<option value="">Select a province</option>
								{regions
									.find((r) => r.name === values.region)
									?.provinces.map((province) => (
										<option key={province} value={province}>
											{province}
										</option>
									))}
							</Field>
							<ErrorMessage
								name="province"
								component="div"
								className="text-red-600 text-sm font-medium"
							/>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="flex-1">
							<Label htmlFor="latitude" value="Latitude *" />
							<Field
								id="latitude"
								name="latitude"
								type="number"
								placeholder="Latitude"
								as={TextInput}
							/>
							<ErrorMessage
								name="latitude"
								component="div"
								className="text-red-600 text-sm font-medium"
							/>
						</div>
						<div className="flex-1">
							<Label htmlFor="longitude" value="Longitude *" />
							<Field
								id="longitude"
								name="longitude"
								type="number"
								placeholder="Longitude"
								as={TextInput}
							/>
							<ErrorMessage
								name="longitude"
								component="div"
								className="text-red-600 text-sm font-medium"
							/>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="flex-1">
							<Label htmlFor="url" value="Website" />
							<Field
								id="url"
								name="url"
								type="text"
								placeholder="Website"
								as={TextInput}
							/>
							<ErrorMessage
								name="url"
								component="div"
								className="text-red-600 text-sm font-medium"
							/>
						</div>
					</div>
					<br />
					<h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>
						Shelter Services
					</h1>
					<div className="flex gap-4">
						<div className="flex-1">
							<div className="flex items-center mb-4">
								<Field
									id="Restaurant"
									name="Restaurant"
									type="checkbox"
									placeholder="Restaurant"
									as={TextInput}
								/>
								<label
									htmlFor="Restaurant"
									className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
								>
									Restaurant
								</label>
							</div>
						</div>
						<div className="flex-1">
							<div className="flex items-center mb-4">
								<Field
									id="Sanitary"
									name="Sanitary"
									type="checkbox"
									placeholder="Sanitary"
									as={TextInput}
								/>
								<label
									htmlFor="Sanitary"
									className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
								>
									Sanitary
								</label>
							</div>
						</div>
						<div className="flex-1">
							<div className="flex items-center mb-4">
								<Field
									id="Electricity"
									name="Electricity"
									type="checkbox"
									placeholder="Electricity"
									as={TextInput}
								/>
								<label
									htmlFor="Electricity"
									className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
								>
									Electricity
								</label>
							</div>
						</div>
						<div className="flex-1">
							<div className="flex items-center mb-4">
								<Field
									id="Beds"
									name="Beds"
									type="checkbox"
									placeholder="Beds"
									as={TextInput}
								/>
								<label
									htmlFor="Beds"
									className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
								>
									Beds
								</label>
							</div>
						</div>
					</div>
					<Button type="submit" disabled={disabled}>
						Add Shelter
					</Button>
				</Form>
			)}
		</Formik>
	);
};

export default ShelterForm;
