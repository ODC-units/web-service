import { z } from 'zod';

export const ShelterSchema = z.object({
	id: z.string(),
	name: z.string(),
	address: z.string(),
});

export type Shelter = z.infer<typeof ShelterSchema>;
