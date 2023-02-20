import { getClient } from '../clients/axiosClient';
import { API_SHELTERS_PATH } from './constants';
import { ShelterEntityJsonLdSchema, ShelterEntityJsonLdHelperSchema } from './dtos';
import { ShelterInfoSchema } from './shelterInfo';
import { ShelterLocationSchema } from './shelterLocation';

export const getShelter = async (id: string) => {
  const client = getClient();

  const response = await client.get(`${API_SHELTERS_PATH}/${id}`);

  const schema = ShelterEntityJsonLdSchema.parse(response.data);

  const shelterEntity = schema['geojson:features'].map((shelter) => {
    const helperSchema = ShelterEntityJsonLdHelperSchema.parse(shelter);
    return helperSchema;
  });

  const shelterInfo = shelterEntity.map((shelter) => {
    const { 'schema:identifier': id, 'schema:name': name, 'schema:description': description, 'schema:address': address, 'schema:amenityFeature': amenities, 'schema:url': url, 'schema:photo': photo } = shelter['geojson:properties'];
    const { 'schema:addressLocality': province, 'schema:addressRegion': region, 'schema:addressCountry': country } = address;
    const { 'schema:value': beds } = amenities;
    const { 'geojson:coordinates': coordinates } = shelter['geojson:geometry'];
    const [latitude, longitude] = coordinates;
    const { 'schema:author': author, 'schema:dateCreated': dateCreated } = shelter;

    return {
      id,
      name,
      description,
      province,
      region,
      country,
      latitude,
      longitude,
      beds,
      url,
      photo,
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
