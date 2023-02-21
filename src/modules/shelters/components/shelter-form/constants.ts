import { z } from 'zod';
import type { ShelterFormModel } from './types';

export const SHELTER_FORM_VALIDATION_SCHEMA = z.object({
	name: z
		.string({
			required_error: 'Name is required',
			invalid_type_error: 'Invalid name',
		})
		.min(1, 'Name is required'),
	province: z
		.string({
			required_error: 'Province is required',
			invalid_type_error: 'Invalid province',
		})
		.min(1, 'Province is required'),
	region: z
		.string({
			required_error: 'Region is required',
			invalid_type_error: 'Invalid region',
		})
		.min(1, 'Region is required'),
	latitude: z.number({
		required_error: 'Latitude is required',
		invalid_type_error: 'Invalid latitude',
	}),
	longitude: z.number({
		required_error: 'Longitude is required',
		invalid_type_error: 'Invalid longitude',
	}),
	url: z
		.string({
			required_error: 'Website is required',
			invalid_type_error: 'Invalid website',
		})
		.min(1, 'Website is required'),
});

export const SHELTER_FORM_INITIAL_VALUES: ShelterFormModel = {
	name: '',
	province: '',
	region: '',
	latitude: 0,
	longitude: 0,
	url: '',
};
