import type { z } from 'zod';
import type { LOGIN_FORM_VALIDATION_SCHEMA } from './constants';

export type LoginFormModel = z.infer<typeof LOGIN_FORM_VALIDATION_SCHEMA>;
