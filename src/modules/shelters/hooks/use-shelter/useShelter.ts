import { API_SHELTERS_PATH } from '@/api/shelters/constants';
import { getShelter } from '@/api/shelters/providers';
import { ShelterInfo } from '@/api/shelters/shelterInfo';
import type { SWRResponse } from 'swr';
import useSWR from 'swr';

const useShelter = (
	id?: ShelterInfo['id']
): SWRResponse<ShelterInfo, Error> => {
	const key = id ? `${API_SHELTERS_PATH}/${id}` : null;

	return useSWR(key, () => getShelter(id!));
};

export default useShelter;
