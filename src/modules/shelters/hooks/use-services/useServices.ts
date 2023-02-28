import { API_SHELTERS_PATH } from '@/api/shelters/constants';
import type { ShelterEntityJsonLdSchema } from '@/api/shelters/dtos';
import { getServices, getShelters } from '@/api/shelters/providers';
import { Service } from '@/api/shelters/service';
import { ShelterLocationSchema } from '@/api/shelters/shelterLocation';
import type { SWRResponse } from 'swr';
import useSWR from 'swr';

const useServices = (): SWRResponse<Service[], Error> => {
	const key = `http://localhost:8080/v1/shelters/get/services`;

	return useSWR(key, () => getServices());
};

export default useServices;
