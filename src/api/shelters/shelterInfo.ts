import { z } from 'zod';

const ShelterInfoSchema = z.object({
  'id': z.string(),
  'name': z.string(),
  'description': z.string(),
  'province': z.string(),
  'region': z.string(),
  'country': z.string(),
  'latitude': z.number(),
  'longitude': z.number(),
  'beds': z.number(),
  'url': z.string(),
  'photo': z.string(),
  'author': z.string(),
  'dateCreated': z.string(),
});

export type ShelterInfoSchema = z.infer<typeof ShelterInfoSchema>;
export { ShelterInfoSchema };