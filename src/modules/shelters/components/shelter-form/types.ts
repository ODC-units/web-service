import type { z } from 'zod';
import type { SHELTER_FORM_VALIDATION_SCHEMA } from './constants';

export type ShelterFormModel = z.infer<typeof SHELTER_FORM_VALIDATION_SCHEMA>;
