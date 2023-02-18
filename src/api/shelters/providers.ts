import { getClient } from '../clients/axiosClient';
import { API_SHELTERS_PATH } from './constants';
import type { Shelter } from './dtos';
import { ShelterListSchema, ShelterSchema } from './dtos';

export const getShelter = async (id: Shelter['id']): Promise<Shelter> => {
	const client = getClient();

	const response = await client.get(`${API_SHELTERS_PATH}/${id}`);

	const shelter = ShelterSchema.parse(response.data);

	return shelter;
};

export const getShelters = async (): Promise<Shelter[]> => {
	const client = getClient();

	const response = await client.get(API_SHELTERS_PATH);

	const shelters = ShelterListSchema.parse(response.data);

	return shelters;
};
