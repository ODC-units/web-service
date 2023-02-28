import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Button, Label, Select, TextInput } from 'flowbite-react';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import type React from 'react';
import { useState } from 'react';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { CustomInput } from '../custom/customInput';
import {
	SHELTER_FORM_INITIAL_VALUES,
	SHELTER_FORM_VALIDATION_SCHEMA,
} from './constants';
import type { ShelterFormModel } from './types';

export interface ShelterFormProps {
	disabled?: boolean;
	onSubmit: (loginValues: ShelterFormModel) => void;
	shelter?: ShelterFormModel;
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

const amenities = [
	{
		id: 0,
		serviceAttribute: 'Restaurant',
		serviceValue: ['Si', 'No'],
	},
	{
		id: 1,
		serviceAttribute: 'Electricity',
		serviceValue: ['Si', 'No'],
	},
	{
		id: 2,
		serviceAttribute: 'Beds',
		serviceValue: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
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
			onSubmit={(values, { resetForm }) => {
				onSubmit(values);
				resetForm();
			}}
		>
			{({ values }) => (
				<Form className="flex flex-col gap-4">
					<div className="grid grid-cols-12">
						<div className="col-span-7">
							<h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>
								Informations
							</h1>
							<div className="flex gap-4">
								<CustomInput
									id="name"
									name="name"
									type="text"
									placeholder="Name"
									as={TextInput}
								/>
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
							<br />
							<div className="flex gap-4">
								<CustomInput
									id="latitude"
									name="latitude"
									type="number"
									placeholder="Latitude"
									as={TextInput}
								/>
								<CustomInput
									id="longitude"
									name="longitude"
									type="number"
									placeholder="Longitude"
									as={TextInput}
								/>
							</div>
							<br />
							<div className="flex gap-4">
								<CustomInput
									id="url"
									name="url"
									type="text"
									placeholder="Website"
									as={TextInput}
								/>
							</div>
						</div>
						<div className="col-start-9 col-span-4">
							<h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>Services</h1>

							<FieldArray name="amenities">
								{({ push, remove }) => (
									<div>
										{values.amenities.map((amenity, index) => {
											return (
												<div key={index}>
													<br />
													<div className="flex gap-1">
														<div className="w-40">
															<Field
																id={`amenities[${index}].serviceAttribute`}
																name={`amenities[${index}].serviceAttribute`}
																as={Select}
															>
																<option value="">Key</option>
																{amenities.map((a, i) => (
																	<option
																		key={`${a.serviceAttribute}-${i}`}
																		value={a.serviceAttribute}
																	>
																		{a.serviceAttribute}
																	</option>
																))}
															</Field>
														</div>
														<div className="w-40">
															<Field
																as={Select}
																id={`amenities[${index}].serviceValue`}
																name={`amenities[${index}].serviceValue`}
															>
																<option value="">Value</option>
																{amenities
																	.find(
																		(a) =>
																			a.serviceAttribute ===
																			amenity.serviceAttribute
																	)
																	?.serviceValue.map((value) => (
																		<option key={value} value={value}>
																			{value}
																		</option>
																	))}
															</Field>
														</div>
														<div>
															<Button
																color="failure"
																onClick={() => remove(index)}
															>
																<TrashIcon className="h-5 w-5" />
															</Button>
														</div>
													</div>
												</div>
											);
										})}
										<br />
										<div className="flex">
											<Button color="gray" onClick={() => push({})}>
												<PlusIcon className="h-5 w-5" />
											</Button>
										</div>
									</div>
								)}
							</FieldArray>
						</div>
					</div>
					<br />
					<Button type="submit" disabled={disabled}>
						Add Shelter
					</Button>
				</Form>
			)}
		</Formik>
	);
};

export default ShelterForm;
