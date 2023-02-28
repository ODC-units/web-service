import { z } from 'zod';
import type { ShelterFormModel } from './types';

export const SHELTER_FORM_VALIDATION_SCHEMA = z.object({
	name: z
		.string({
			required_error: 'Name is required',
			invalid_type_error: 'Invalid name',
		})
		.min(1, 'Name is required'),
	region: z
		.string({
			required_error: 'Region is required',
			invalid_type_error: 'Invalid region',
		})
		.min(1, 'Region is required'),
	province: z
		.string({
			required_error: 'Province is required',
			invalid_type_error: 'Invalid province',
		})
		.min(1, 'Province is required'),
	latitude: z.number({
		required_error: 'Latitude is required',
		invalid_type_error: 'Invalid latitude',
	}),
	longitude: z.number({
		required_error: 'Longitude is required',
		invalid_type_error: 'Invalid longitude',
	}),
	url: z
		.string({
			required_error: 'Url is required',
			invalid_type_error: 'Invalid url',
		})
		.url('Invalid url')
		.min(1, 'Url is required'),
	amenities: z.array(
		z.object({
			serviceAttribute: z.string(),
			serviceValue: z.string(),
		})
	),
});

export const SHELTER_FORM_INITIAL_VALUES: ShelterFormModel = {
	name: '',
	province: '',
	region: '',
	latitude: 0,
	longitude: 0,
	url: '',
	amenities: [],
};

export const regions = [
	{
		id: 0,
		name: 'Abruzzo',
		provinces: ['Chieti', "L'Aquila", 'Pescara', 'Teramo'],
	},
	{
		id: 1,
		name: 'Basilicata',
		provinces: ['Matera', 'Potenza'],
	},
	{
		id: 2,
		name: 'Calabria',
		provinces: [
			'Catanzaro',
			'Cosenza',
			'Crotone',
			'Reggio Calabria',
			'Vibo Valentia',
		],
	},
	{
		id: 3,
		name: 'Campania',
		provinces: ['Avellino', 'Benevento', 'Caserta', 'Napoli'],
	},
	{
		id: 4,
		name: 'Emilia-Romagna',
		provinces: [
			'Bologna',
			'Ferrara',
			'Forlì-Cesena',
			'Modena',
			'Parma',
			'Piacenza',
			'Ravenna',
			'Reggio Emilia',
			'Rimini',
		],
	},
	{
		id: 5,
		name: 'Friuli Venezia Giulia',
		provinces: ['Gorizia', 'Pordenone', 'Udine', 'Trieste'],
	},
	{
		id: 6,
		name: 'Lazio',
		provinces: ['Frosinone', 'Latina', 'Rieti', 'Roma', 'Viterbo'],
	},
	{
		id: 7,
		name: 'Liguria',
		provinces: ['Genova', 'Imperia', 'La Spezia', 'Savona'],
	},
	{
		id: 8,
		name: 'Lombardia',
		provinces: [
			'Bergamo',
			'Brescia',
			'Como',
			'Cremona',
			'Lecco',
			'Lodi',
			'Mantova',
			'Milano',
			'Monza e della Brianza',
			'Pavia',
			'Sondrio',
			'Varese',
		],
	},
	{
		id: 9,
		name: 'Marche',
		provinces: [
			'Ancona',
			'Ascoli Piceno',
			'Fermo',
			'Macerata',
			'Pesaro e Urbino',
		],
	},
	{
		id: 10,
		name: 'Molise',
		provinces: ['Campobasso', 'Isernia'],
	},
	{
		id: 11,
		name: 'Piemonte',
		provinces: [
			'Alessandria',
			'Asti',
			'Biella',
			'Cuneo',
			'Novara',
			'Torino',
			'Verbano-Cusio-Ossola',
			'Vercelli',
		],
	},
	{
		id: 12,
		name: 'Puglia',
		provinces: [
			'Bari',
			'Barletta-Andria-Trani',
			'Brindisi',
			'Foggia',
			'Lecce',
			'Taranto',
		],
	},
	{
		id: 13,
		name: 'Sardegna',
		provinces: [
			'Cagliari',
			'Carbonia-Iglesias',
			'Medio Campidano',
			'Nuoro',
			'Ogliastra',
			'Olbia-Tempio',
			'Oristano',
			'Sassari',
		],
	},
	{
		id: 14,
		name: 'Sicilia',
		provinces: [
			'Agrigento',
			'Caltanissetta',
			'Catania',
			'Enna',
			'Messina',
			'Palermo',
			'Ragusa',
			'Siracusa',
			'Trapani',
		],
	},
	{
		id: 15,
		name: 'Toscana',
		provinces: [
			'Arezzo',
			'Firenze',
			'Grosseto',
			'Livorno',
			'Lucca',
			'Massa-Carrara',
			'Pisa',
			'Pistoia',
			'Prato',
			'Siena',
		],
	},
	{ id: 16, name: 'Trentino-Alto Adige', provinces: ['Bolzano', 'Trento'] },
	{ id: 17, name: 'Umbria', provinces: ['Perugia', 'Terni'] },
	{ id: 18, name: "Valle d'Aosta", provinces: ['Aosta'] },
	{
		id: 19,
		name: 'Veneto',
		provinces: [
			'Belluno',
			'Padova',
			'Rovigo',
			'Treviso',
			'Venezia',
			'Verona',
			'Vicenza',
		],
	},
];
