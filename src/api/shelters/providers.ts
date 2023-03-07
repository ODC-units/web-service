import { getClient } from '../clients/axiosClient';
import { API_SHELTERS_PATH } from './constants';
import {
	ShelterEntityJsonLdSchema,
	ShelterEntityJsonLdHelperSchema,
} from './dtos';
import { Service } from './service';
import type { ShelterInfo } from './shelterInfo';
import type { ShelterLocationSchema } from './shelterLocation';

export const createShelter = async (shelterInfo: ShelterInfo) => {
	const client = getClient();

	console.log('shelterInfo', shelterInfo);

	const response = await client.post(API_SHELTERS_PATH, shelterInfo);

	return response;
};

export const updateShelter = async (shelterInfo: ShelterInfo) => {
	const client = getClient();

	const response = await client.put(
		// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
		`${API_SHELTERS_PATH}/${shelterInfo?.id}`,
		shelterInfo
	);

	return response;
};

export const getServices = async (): Promise<Service[]> => {
	const client = getClient();

	const response = await client.get(`${API_SHELTERS_PATH}/get/services`);

	return response.data;
};

export const getShelter = async (id: string): Promise<ShelterInfo> => {
	const client = getClient();

	const response = await client.get(`${API_SHELTERS_PATH}/${id}`);

	const schema = ShelterEntityJsonLdSchema.parse(response.data);

	const shelterEntity = schema['geojson:features'].map((shelter) => {
		const helperSchema = ShelterEntityJsonLdHelperSchema.parse(shelter);
		return helperSchema;
	});

	const shelterInfo = shelterEntity.map((shelter) => {
		const {
			// eslint-disable-next-line @typescript-eslint/no-shadow
			'schema:identifier': id,
			'schema:name': name,
			'schema:address': address,
			'schema:amenityFeature': amenities,
			'schema:url': url,
		} = shelter['geojson:properties'];

		const {
			'schema:addressLocality': province,
			'schema:addressRegion': region,
		} = address;

		const { 'geojson:coordinates': coordinates } = shelter['geojson:geometry'];

		const [latitude, longitude] = coordinates;

		const { 'schema:author': author, 'schema:uploadDate': dateCreated } =
			shelter;

		return {
			id,
			name,
			province,
			region,
			latitude,
			longitude,
			amenities: amenities.map((amenity) => ({
				serviceAttribute: amenity['schema:name'],
				serviceValue: amenity['schema:value'],
			})),
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

export const getShelterChanges = async (id: string): Promise<ShelterInfo[]> => {
	const client = getClient();

	const response = await client.get(`${API_SHELTERS_PATH}/${id}/history`);

	const schema = ShelterEntityJsonLdSchema.parse(response.data);

	const sheltersEntity = schema['geojson:features'].map((shelter) => {
		const helperSchema = ShelterEntityJsonLdHelperSchema.parse(shelter);
		return helperSchema;
	});

	const sheltersInfo = sheltersEntity.map((shelter) => {
		const {
			// eslint-disable-next-line @typescript-eslint/no-shadow
			'schema:identifier': id,
			'schema:name': name,
			'schema:address': address,
			'schema:amenityFeature': amenities,
			'schema:url': url,
		} = shelter['geojson:properties'];

		const {
			'schema:addressLocality': province,
			'schema:addressRegion': region,
		} = address;

		const { 'geojson:coordinates': coordinates } = shelter['geojson:geometry'];

		const [latitude, longitude] = coordinates;

		const { 'schema:author': author, 'schema:uploadDate': dateCreated } =
			shelter;

		return {
			id,
			name,
			province,
			region,
			latitude,
			longitude,
			amenities: amenities.map((amenity) => ({
				serviceAttribute: amenity['schema:name'],
				serviceValue: amenity['schema:value'],
			})),
			url,
			author,
			dateCreated,
		};
	});

	console.log(sheltersInfo);

	return sheltersInfo;
};
