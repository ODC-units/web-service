import { API_SHELTERS_PATH } from '@/api/shelters/constants';
import { getShelter, getShelterChanges } from '@/api/shelters/providers';
import { ShelterInfo } from '@/api/shelters/shelterInfo';
import type { SWRResponse } from 'swr';
import useSWR from 'swr';

const useShelterChanges = (
	id?: ShelterInfo['id']
): SWRResponse<ShelterInfo[], Error> => {
	const key = id ? `${API_SHELTERS_PATH}/${id}/history` : null;

	return useSWR(key, () => getShelterChanges(id!));
};

export default useShelterChanges;
