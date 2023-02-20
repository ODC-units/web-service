import { API_SHELTERS_PATH } from '@/api/shelters/constants';
import type { ShelterEntityJsonLdSchema } from '@/api/shelters/dtos';
import { getShelters } from '@/api/shelters/providers';
import { ShelterLocationSchema } from '@/api/shelters/shelterLocation';
import type { SWRResponse } from 'swr';
import useSWR from 'swr';

const useShelters = (): SWRResponse<ShelterLocationSchema[], Error> => {
	return useSWR(API_SHELTERS_PATH, getShelters);
};

export default useShelters;
