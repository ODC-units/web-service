import { API_SHELTERS_PATH } from '@/api/shelters/constants';
import type { Shelter } from '@/api/shelters/dtos';
import { getShelter } from '@/api/shelters/providers';
import type { SWRResponse } from 'swr';
import useSWR from 'swr';

const useShelter = (id?: Shelter['id']): SWRResponse<Shelter, Error> => {
	const key = id ? `${API_SHELTERS_PATH}/${id}` : null;

	return useSWR(key, getShelter);
};

export default useShelter;
