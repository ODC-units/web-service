import { z } from 'zod';

const ShelterEntityJsonLdHelperSchema = z.object({
	'@type': z.string(),
	'geojson:properties': z.object({
		'@type': z.string(),
		'schema:identifier': z.string(),
		'schema:name': z.string(),
		'schema:address': z.object({
			'@type': z.string(),
			'schema:addressLocality': z.string(),
			'schema:addressRegion': z.string(),
		}),
		'schema:amenityFeature': z.array(
			z.object({
				'@type': z.string(),
				'schema:name': z.string(),
				'schema:value': z.string(),
			})
		),
		'schema:url': z.string(),
	}),
	'geojson:geometry': z.object({
		'geojson:type': z.string(),
		'geojson:coordinates': z.array(z.number()),
	}),
	'schema:author': z.string(),
	'schema:uploadDate': z.string(),
});

const ShelterEntityJsonLdSchema = z.object({
	'@context': z.object({
		dc: z.string(),
		schema: z.string(),
		geojson: z.string(),
	}),
	'dc:title': z.string(),
	'dc:description': z.string(),
	'dc:creator': z.string(),
	'dc:date': z.string(),
	'dc:format': z.string(),
	'dc:language': z.string(),
	'dc:source': z.string(),
	'dc:rights': z.string(),
	'@type': z.string(),
	'geojson:features': z.array(ShelterEntityJsonLdHelperSchema),
});

export type ShelterEntityJsonLdSchema = z.infer<
	typeof ShelterEntityJsonLdSchema
>;
export type ShelterEntityJsonLdHelperSchema = z.infer<
	typeof ShelterEntityJsonLdHelperSchema
>;

export { ShelterEntityJsonLdSchema, ShelterEntityJsonLdHelperSchema };
