import { API_SHELTERS_PATH } from '@/api/shelters/constants';
import type { Shelter } from '@/api/shelters/dtos';
import { getShelters } from '@/api/shelters/providers';
import type { SWRResponse } from 'swr';
import useSWR from 'swr';

const useShelters = (): SWRResponse<Shelter[], Error> => {
	return useSWR(API_SHELTERS_PATH, getShelters);
};

export default useShelters;
