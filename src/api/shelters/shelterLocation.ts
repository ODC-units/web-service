import { z } from 'zod';

const ShelterLocationSchema = z.object({
  'id': z.string(),
  'latitude': z.number(),
  'longitude': z.number(),
});

export type ShelterLocationSchema = z.infer<typeof ShelterLocationSchema>;
export { ShelterLocationSchema };