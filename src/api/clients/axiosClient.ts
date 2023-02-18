import { getUserToken } from '@/modules/auth/utils';
import type { AxiosInstance } from 'axios';
import axios from 'axios';
import { API_BASE_URL, AUTH_ENABLED } from '../constants';

let client: AxiosInstance;

export const getClient = (): AxiosInstance => {
	if (client) return client;

	const baseClient = axios.create({
		baseURL: API_BASE_URL,
	});

	if (AUTH_ENABLED) {
		baseClient.interceptors.request.use(
			async (config) => {
				try {
					const token = await getUserToken();

					if (token) {
						config.headers.Authorization = `Bearer ${token}`;
					}

					return config;
				} catch (err) {
					return config;
				}
			},
			(error) => {
				return Promise.reject(error);
			}
		);
	}

	client = baseClient;

	return client;
};
