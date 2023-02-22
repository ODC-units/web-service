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
	url: z.string({}),
	Restaurant: z.boolean({}),
	Sanitary: z.boolean({}),
	Electricity: z.boolean({}),
	Beds: z.boolean({}),
});

export const SHELTER_FORM_INITIAL_VALUES: ShelterFormModel = {
	name: '',
	province: '',
	region: '',
	latitude: 0,
	longitude: 0,
	url: '',
	Restaurant: false,
	Sanitary: false,
	Electricity: false,
	Beds: false,
};

export const regions = [
	{
		id: '13',
		nome: 'Abruzzo',
		latitudine: 42.354008,
		longitudine: 13.391992,
	},
	{
		id: '17',
		nome: 'Basilicata',
		latitudine: 40.633333,
		longitudine: 15.8,
	},
	{
		id: '18',
		nome: 'Calabria',
		latitudine: 38.91,
		longitudine: 16.5875,
	},
	{
		id: '15',
		nome: 'Campania',
		latitudine: 40.833333,
		longitudine: 14.25,
	},
	{
		id: '8',
		nome: 'Emilia-Romagna',
		latitudine: 44.493889,
		longitudine: 11.342778,
	},
	{
		id: '6',
		nome: 'Friuli-Venezia Giulia',
		latitudine: 45.636111,
		longitudine: 13.804167,
	},
	{
		id: '12',
		nome: 'Lazio',
		latitudine: 41.893056,
		longitudine: 12.482778,
	},
	{
		id: '7',
		nome: 'Liguria',
		latitudine: 44.411156,
		longitudine: 8.932661,
	},
	{
		id: '3',
		nome: 'Lombardia',
		latitudine: 45.464161,
		longitudine: 9.190336,
	},
	{
		id: '11',
		nome: 'Marche',
		latitudine: 43.616667,
		longitudine: 13.516667,
	},
	{
		id: '14',
		nome: 'Molise',
		latitudine: 41.561,
		longitudine: 14.6684,
	},
	{
		id: '1',
		nome: 'Piemonte',
		latitudine: 45.066667,
		longitudine: 7.7,
	},
	{
		id: '16',
		nome: 'Puglia',
		latitudine: 41.125278,
		longitudine: 16.866667,
	},
	{
		id: '20',
		nome: 'Sardegna',
		latitudine: 39.216667,
		longitudine: 9.116667,
	},
	{
		id: '19',
		nome: 'Sicilia',
		latitudine: 38.115556,
		longitudine: 13.361389,
	},
	{
		id: '9',
		nome: 'Toscana',
		latitudine: 43.771389,
		longitudine: 11.254167,
	},
	{
		id: '4',
		nome: 'Trentino-Alto Adige/Südtirol',
		latitudine: 46.066667,
		longitudine: 11.116667,
	},
	{
		id: '10',
		nome: 'Umbria',
		latitudine: 43.1121,
		longitudine: 12.3888,
	},
	{
		id: '2',
		nome: "Valle d'Aosta/Vallée d'Aoste",
		latitudine: 45.737222,
		longitudine: 7.320556,
	},
	{
		id: '5',
		nome: 'Veneto',
		latitudine: 45.439722,
		longitudine: 12.331944,
	},
];

export const provinces = [
	{
		nome: 'Agrigento',
		sigla: 'AG',
		regione: 'Sicilia',
	},
	{
		nome: 'Alessandria',
		sigla: 'AL',
		regione: 'Piemonte',
	},
	{
		nome: 'Ancona',
		sigla: 'AN',
		regione: 'Marche',
	},
	{
		nome: 'Arezzo',
		sigla: 'AR',
		regione: 'Toscana',
	},
	{
		nome: 'Ascoli Piceno',
		sigla: 'AP',
		regione: 'Marche',
	},
	{
		nome: 'Asti',
		sigla: 'AT',
		regione: 'Piemonte',
	},
	{
		nome: 'Avellino',
		sigla: 'AV',
		regione: 'Campania',
	},
	{
		nome: 'Bari',
		sigla: 'BA',
		regione: 'Puglia',
	},
	{
		nome: 'Barletta-Andria-Trani',
		sigla: 'BT',
		regione: 'Puglia',
	},
	{
		nome: 'Belluno',
		sigla: 'BL',
		regione: 'Veneto',
	},
	{
		nome: 'Benevento',
		sigla: 'BN',
		regione: 'Campania',
	},
	{
		nome: 'Bergamo',
		sigla: 'BG',
		regione: 'Lombardia',
	},
	{
		nome: 'Biella',
		sigla: 'BI',
		regione: 'Piemonte',
	},
	{
		nome: 'Bologna',
		sigla: 'BO',
		regione: 'Emilia-Romagna',
	},
	{
		nome: 'Bolzano/Bozen',
		sigla: 'BZ',
		regione: 'Trentino-Alto Adige',
	},
	{
		nome: 'Brescia',
		sigla: 'BS',
		regione: 'Lombardia',
	},
	{
		nome: 'Brindisi',
		sigla: 'BR',
		regione: 'Puglia',
	},
	{
		nome: 'Cagliari',
		sigla: 'CA',
		regione: 'Sardegna',
	},
	{
		nome: 'Caltanissetta',
		sigla: 'CL',
		regione: 'Sicilia',
	},
	{
		nome: 'Campobasso',
		sigla: 'CB',
		regione: 'Molise',
	},
	{
		nome: 'Carbonia-Iglesias',
		sigla: 'CI',
		regione: 'Sardegna',
	},
	{
		nome: 'Caserta',
		sigla: 'CE',
		regione: 'Campania',
	},
	{
		nome: 'Catania',
		sigla: 'CT',
		regione: 'Sicilia',
	},
	{
		nome: 'Catanzaro',
		sigla: 'CZ',
		regione: 'Calabria',
	},
	{
		nome: 'Chieti',
		sigla: 'CH',
		regione: 'Abruzzo',
	},
	{
		nome: 'Como',
		sigla: 'CO',
		regione: 'Lombardia',
	},
	{
		nome: 'Cosenza',
		sigla: 'CS',
		regione: 'Calabria',
	},
	{
		nome: 'Cremona',
		sigla: 'CR',
		regione: 'Lombardia',
	},
	{
		nome: 'Crotone',
		sigla: 'KR',
		regione: 'Calabria',
	},
	{
		nome: 'Cuneo',
		sigla: 'CN',
		regione: 'Piemonte',
	},
	{
		nome: 'Enna',
		sigla: 'EN',
		regione: 'Sicilia',
	},
	{
		nome: 'Fermo',
		sigla: 'FM',
		regione: 'Marche',
	},
	{
		nome: 'Ferrara',
		sigla: 'FE',
		regione: 'Emilia-Romagna',
	},
	{
		nome: 'Firenze',
		sigla: 'FI',
		regione: 'Toscana',
	},
	{
		nome: 'Foggia',
		sigla: 'FG',
		regione: 'Puglia',
	},
	{
		nome: 'Forlì-Cesena',
		sigla: 'FC',
		regione: 'Emilia-Romagna',
	},
	{
		nome: 'Frosinone',
		sigla: 'FR',
		regione: 'Lazio',
	},
	{
		nome: 'Genova',
		sigla: 'GE',
		regione: 'Liguria',
	},
	{
		nome: 'Gorizia',
		sigla: 'GO',
		regione: 'Friuli-Venezia Giulia',
	},
	{
		nome: 'Grosseto',
		sigla: 'GR',
		regione: 'Toscana',
	},
	{
		nome: 'Imperia',
		sigla: 'IM',
		regione: 'Liguria',
	},
	{
		nome: 'Isernia',
		sigla: 'IS',
		regione: 'Molise',
	},
	{
		nome: "L'Aquila",
		sigla: 'AQ',
		regione: 'Abruzzo',
	},
	{
		nome: 'La Spezia',
		sigla: 'SP',
		regione: 'Liguria',
	},
	{
		nome: 'Latina',
		sigla: 'LT',
		regione: 'Lazio',
	},
	{
		nome: 'Lecce',
		sigla: 'LE',
		regione: 'Puglia',
	},
	{
		nome: 'Lecco',
		sigla: 'LC',
		regione: 'Lombardia',
	},
	{
		nome: 'Livorno',
		sigla: 'LI',
		regione: 'Toscana',
	},
	{
		nome: 'Lodi',
		sigla: 'LO',
		regione: 'Lombardia',
	},
	{
		nome: 'Lucca',
		sigla: 'LU',
		regione: 'Toscana',
	},
	{
		nome: 'Macerata',
		sigla: 'MC',
		regione: 'Marche',
	},
	{
		nome: 'Mantova',
		sigla: 'MN',
		regione: 'Lombardia',
	},
	{
		nome: 'Massa-Carrara',
		sigla: 'MS',
		regione: 'Toscana',
	},
	{
		nome: 'Matera',
		sigla: 'MT',
		regione: 'Basilicata',
	},
	{
		nome: 'Medio Campidano',
		sigla: 'VS',
		regione: 'Sardegna',
	},
	{
		nome: 'Messina',
		sigla: 'ME',
		regione: 'Sicilia',
	},
	{
		nome: 'Milano',
		sigla: 'MI',
		regione: 'Lombardia',
	},
	{
		nome: 'Modena',
		sigla: 'MO',
		regione: 'Emilia-Romagna',
	},
	{
		nome: 'Monza e della Brianza',
		sigla: 'MB',
		regione: 'Lombardia',
	},
	{
		nome: 'Napoli',
		sigla: 'NA',
		regione: 'Campania',
	},
	{
		nome: 'Novara',
		sigla: 'NO',
		regione: 'Piemonte',
	},
	{
		nome: 'Nuoro',
		sigla: 'NU',
		regione: 'Sardegna',
	},
	{
		nome: 'Ogliastra',
		sigla: 'OG',
		regione: 'Sardegna',
	},
	{
		nome: 'Olbia-Tempio',
		sigla: 'OT',
		regione: 'Sardegna',
	},
	{
		nome: 'Oristano',
		sigla: 'OR',
		regione: 'Sardegna',
	},
	{
		nome: 'Padova',
		sigla: 'PD',
		regione: 'Veneto',
	},
	{
		nome: 'Palermo',
		sigla: 'PA',
		regione: 'Sicilia',
	},
	{
		nome: 'Parma',
		sigla: 'PR',
		regione: 'Emilia-Romagna',
	},
	{
		nome: 'Pavia',
		sigla: 'PV',
		regione: 'Lombardia',
	},
	{
		nome: 'Perugia',
		sigla: 'PG',
		regione: 'Umbria',
	},
	{
		nome: 'Pesaro e Urbino',
		sigla: 'PU',
		regione: 'Marche',
	},
	{
		nome: 'Pescara',
		sigla: 'PE',
		regione: 'Abruzzo',
	},
	{
		nome: 'Piacenza',
		sigla: 'PC',
		regione: 'Emilia-Romagna',
	},
	{
		nome: 'Pisa',
		sigla: 'PI',
		regione: 'Toscana',
	},
	{
		nome: 'Pistoia',
		sigla: 'PT',
		regione: 'Toscana',
	},
	{
		nome: 'Pordenone',
		sigla: 'PN',
		regione: 'Friuli-Venezia Giulia',
	},
	{
		nome: 'Potenza',
		sigla: 'PZ',
		regione: 'Basilicata',
	},
	{
		nome: 'Prato',
		sigla: 'PO',
		regione: 'Toscana',
	},
	{
		nome: 'Ragusa',
		sigla: 'RG',
		regione: 'Sicilia',
	},
	{
		nome: 'Ravenna',
		sigla: 'RA',
		regione: 'Emilia-Romagna',
	},
	{
		nome: 'Reggio di Calabria',
		sigla: 'RC',
		regione: 'Calabria',
	},
	{
		nome: "Reggio nell'Emilia",
		sigla: 'RE',
		regione: 'Emilia-Romagna',
	},
	{
		nome: 'Rieti',
		sigla: 'RI',
		regione: 'Lazio',
	},
	{
		nome: 'Rimini',
		sigla: 'RN',
		regione: 'Emilia-Romagna',
	},
	{
		nome: 'Roma',
		sigla: 'RM',
		regione: 'Lazio',
	},
	{
		nome: 'Rovigo',
		sigla: 'RO',
		regione: 'Veneto',
	},
	{
		nome: 'Salerno',
		sigla: 'SA',
		regione: 'Campania',
	},
	{
		nome: 'Sassari',
		sigla: 'SS',
		regione: 'Sardegna',
	},
	{
		nome: 'Savona',
		sigla: 'SV',
		regione: 'Liguria',
	},
	{
		nome: 'Siena',
		sigla: 'SI',
		regione: 'Toscana',
	},
	{
		nome: 'Siracusa',
		sigla: 'SR',
		regione: 'Sicilia',
	},
	{
		nome: 'Sondrio',
		sigla: 'SO',
		regione: 'Lombardia',
	},
	{
		nome: 'Taranto',
		sigla: 'TA',
		regione: 'Puglia',
	},
	{
		nome: 'Teramo',
		sigla: 'TE',
		regione: 'Abruzzo',
	},
	{
		nome: 'Terni',
		sigla: 'TR',
		regione: 'Umbria',
	},
	{
		nome: 'Torino',
		sigla: 'TO',
		regione: 'Piemonte',
	},
	{
		nome: 'Trapani',
		sigla: 'TP',
		regione: 'Sicilia',
	},
	{
		nome: 'Trento',
		sigla: 'TN',
		regione: 'Trentino-Alto Adige',
	},
	{
		nome: 'Treviso',
		sigla: 'TV',
		regione: 'Veneto',
	},
	{
		nome: 'Trieste',
		sigla: 'TS',
		regione: 'Friuli-Venezia Giulia',
	},
	{
		nome: 'Udine',
		sigla: 'UD',
		regione: 'Friuli-Venezia Giulia',
	},
	{
		nome: "Valle d'Aosta",
		sigla: 'AO',
		regione: "Valle d'Aosta",
	},
	{
		nome: 'Varese',
		sigla: 'VA',
		regione: 'Lombardia',
	},
	{
		nome: 'Venezia',
		sigla: 'VE',
		regione: 'Veneto',
	},
	{
		nome: 'Verbano-Cusio-Ossola',
		sigla: 'VB',
		regione: 'Piemonte',
	},
	{
		nome: 'Vercelli',
		sigla: 'VC',
		regione: 'Piemonte',
	},
	{
		nome: 'Verona',
		sigla: 'VR',
		regione: 'Veneto',
	},
	{
		nome: 'Vibo Valentia',
		sigla: 'VV',
		regione: 'Calabria',
	},
	{
		nome: 'Vicenza',
		sigla: 'VI',
		regione: 'Veneto',
	},
	{
		nome: 'Viterbo',
		sigla: 'VT',
		regione: 'Lazio',
	},
];
