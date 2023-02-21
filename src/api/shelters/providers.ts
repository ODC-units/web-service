import { useFirebaseAuth } from '@/modules/auth';
import { getClient } from '../clients/axiosClient';
import { API_SHELTERS_PATH } from './constants';
import {
	ShelterEntityJsonLdSchema,
	ShelterEntityJsonLdHelperSchema,
} from './dtos';
import { ShelterInfoSchema } from './shelterInfo';
import type { ShelterLocationSchema } from './shelterLocation';

export const createShelter = async (shelterInfo: any) => {
	const client = getClient();

	console.log(shelterInfo);

	const response = await client.post(API_SHELTERS_PATH, shelterInfo);

	return response;
};

export const getShelter = async (id: string) => {
	const client = getClient();

	const response = await client.get(`${API_SHELTERS_PATH}/${id}`);

	const schema = ShelterEntityJsonLdSchema.parse(response.data);

	const shelterEntity = schema['geojson:features'].map((shelter) => {
		const helperSchema = ShelterEntityJsonLdHelperSchema.parse(shelter);
		return helperSchema;
	});

	const shelterInfo = shelterEntity.map((shelter) => {
		const {
			'schema:identifier': id,
			'schema:name': name,
			'schema:address': address,
			'schema:url': url,
		} = shelter['geojson:properties'];
		const {
			'schema:addressLocality': province,
			'schema:addressRegion': region,
		} = address;
		const { 'geojson:coordinates': coordinates } = shelter['geojson:geometry'];
		const [latitude, longitude] = coordinates;
		const { 'schema:author': author, 'schema:dateCreated': dateCreated } =
			shelter;

		return {
			id,
			name,
			province,
			region,
			latitude,
			longitude,
			url,
			author,
			dateCreated,
		};
	});

	return shelterInfo[0];
};

export const getShelters = async (): Promise<ShelterLocationSchema[]> => {
	const client = getClient();

	const response = await client.get(API_SHELTERS_PATH);

	const schema = ShelterEntityJsonLdSchema.parse(response.data);

	const sheltersEntity = schema['geojson:features'].map((shelter) => {
		const helperSchema = ShelterEntityJsonLdHelperSchema.parse(shelter);
		return helperSchema;
	});

	const sheltersLocation = sheltersEntity.map((shelter) => {
		const { 'schema:identifier': id } = shelter['geojson:properties'];
		const { 'geojson:coordinates': coordinates } = shelter['geojson:geometry'];
		const [latitude, longitude] = coordinates;

		return {
			id,
			latitude,
			longitude,
		};
	});

	return sheltersLocation;
};
