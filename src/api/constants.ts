export const API_BASE_URL =
	process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080';

export const AUTH_ENABLED =
	(process.env.NEXT_PUBLIC_AUTH_ENABLED || 'false') === 'true';
