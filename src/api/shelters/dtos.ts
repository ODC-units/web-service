import { z } from 'zod';

export const ShelterSchema = z.object({
	id: z.string(),
	name: z.string(),
	description: z.string(),
	latitude: z.number(),
	longitude: z.number(),
	province: z.string(),
	region: z.string(),
	country: z.string(),
	beds: z.number(),
	url: z.string(),
	photo: z.string(),
	createdAt: z.string(),
	updatedAt: z.string(),
});

export type Shelter = z.infer<typeof ShelterSchema>;

export const ShelterListSchema = z.array(ShelterSchema);
