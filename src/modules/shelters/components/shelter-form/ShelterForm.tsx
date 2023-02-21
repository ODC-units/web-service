import { Button, Label, TextInput } from 'flowbite-react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
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

export const ShelterForm: React.FC<ShelterFormProps> = ({
	disabled,
	onSubmit,
}) => (
	<Formik
		initialValues={SHELTER_FORM_INITIAL_VALUES}
		validationSchema={toFormikValidationSchema(SHELTER_FORM_VALIDATION_SCHEMA)}
		validateOnChange={false}
		validateOnBlur={false}
		onSubmit={onSubmit}
	>
		<Form className="flex flex-col gap-4">
			<div className="flex gap-4">
				<div className="flex-1">
					<Label htmlFor="name" value="Shelter name" />
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
					<Label htmlFor="region" value="Region" />
					<Field
						id="region"
						name="region"
						type="text"
						placeholder="Region"
						as={TextInput}
					/>
					<ErrorMessage
						name="region"
						component="div"
						className="text-red-600 text-sm font-medium"
					/>
				</div>
				<div className="flex-2">
					<Label htmlFor="province" value="Province" />
					<Field
						id="province"
						name="province"
						type="text"
						placeholder="Province"
						as={TextInput}
					/>
					<ErrorMessage
						name="province"
						component="div"
						className="text-red-600 text-sm font-medium"
					/>
				</div>
			</div>
			<div className="flex gap-4">
				<div className="flex-1">
					<Label htmlFor="latitude" value="Latitude" />
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
					<Label htmlFor="longitude" value="Longitude" />
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
			<Button type="submit" disabled={disabled}>
				Add Shelter
			</Button>
		</Form>
	</Formik>
);

export default ShelterForm;
