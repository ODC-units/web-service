import { z } from 'zod';

const ShelterInfoSchema = z.object({
	id: z.string().optional(),
	name: z.string(),
	province: z.string(),
	region: z.string(),
	latitude: z.number(),
	longitude: z.number(),
	amenities: z.array(
		z.object({
			serviceAttribute: z.string(),
			serviceValue: z.string(),
		})
	),
	url: z.string(),
	author: z.string().optional(),
	uploadDate: z.string().optional(),
});

export type ShelterInfo = z.infer<typeof ShelterInfoSchema>;
export { ShelterInfoSchema };
