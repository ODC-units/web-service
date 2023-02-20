import { API_SHELTERS_PATH } from '@/api/shelters/constants';
import { getShelter } from '@/api/shelters/providers';
import { ShelterInfoSchema } from '@/api/shelters/shelterInfo';
import type { SWRResponse } from 'swr';
import useSWR from 'swr';

const useShelter = (id?: ShelterInfoSchema['id']): SWRResponse<ShelterInfoSchema, Error> => {
	const key = id ? `${API_SHELTERS_PATH}/${id}` : null;

	return useSWR(key, () => getShelter(id!));
};

export default useShelter;
