import * as React from 'react';
import { useRef } from 'react';
import { render } from 'react-dom';

import Map, { Layer, Source } from 'react-map-gl';

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY || 'invalid';

import type { LayerProps, GeoJSONSource, MapRef } from 'react-map-gl';

const clusterLayer: LayerProps = {
	id: 'clusters',
	type: 'circle',
	source: 'earthquakes',
	filter: ['has', 'point_count'],
	paint: {
		'circle-color': [
			'step',
			['get', 'point_count'],
			'#51bbd6',
			100,
			'#f1f075',
			750,
			'#f28cb1',
		],
		'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],
	},
};

const clusterCountLayer: LayerProps = {
	id: 'cluster-count',
	type: 'symbol',
	source: 'earthquakes',
	filter: ['has', 'point_count'],
	layout: {
		'text-field': '{point_count_abbreviated}',
		'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
		'text-size': 12,
	},
};

const unclusteredPointLayer: LayerProps = {
	id: 'unclustered-point',
	type: 'circle',
	source: 'earthquakes',
	filter: ['!', ['has', 'point_count']],
	paint: {
		'circle-color': ['match', ['get', 'type'], 'shelter', '#fbb03b', '#ccc'],
		'circle-radius': 6,
		'circle-stroke-width': 2,
		'circle-stroke-color': '#fff',
	},
};

export interface VisualizerProps {
	features?: GeoJSON.Feature[];
	onFeatureClick?: (id: string) => void;
}

const Visualizer: React.FC<VisualizerProps> = ({
	features = [],
	onFeatureClick,
}) => {
	const mapRef = React.useRef<MapRef>(null);

	const onClick = (event: mapboxgl.MapLayerMouseEvent) => {
		if (event.features && event.features.length > 0) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const clusterId = event.features[0].properties?.cluster_id;

			if (clusterId) {
				const mapboxSource = mapRef.current?.getSource(
					'earthquakes'
				) as GeoJSONSource;

				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
					if (err) {
						return;
					}

					mapRef.current?.getMap().easeTo({
						center: event.lngLat,
						zoom,
					});
				});
			} else {
				onFeatureClick?.(event.features[0].properties?.id as string);
			}
		}
	};

	const featureCollection: GeoJSON.FeatureCollection<GeoJSON.Geometry> =
		React.useMemo(
			() => ({
				type: 'FeatureCollection',
				features,
			}),
			[features]
		);

	console.log(featureCollection);

	return (
		<div className="h-full">
			<Map
				mapStyle="mapbox://styles/denardincarlodev/clezgu7to002301qololbn8k2"
				mapboxAccessToken={MAPBOX_API_KEY}
				reuseMaps
				interactiveLayerIds={[clusterLayer.id!, unclusteredPointLayer.id!]}
				onClick={onClick}
				ref={mapRef}
				initialViewState={{
					latitude: 47,
					longitude: 12,
					zoom: 6,
				}}
				maxBounds={[
					[6.367489, 36.410317], // Southwest coordinates
					[18.371962, 47.131914], // Northeast coordinates
				]}
			>
				<Source
					id="earthquakes"
					type="geojson"
					data={featureCollection}
					cluster={true}
					clusterMaxZoom={14}
					clusterRadius={50}
				>
					<Layer {...clusterLayer} />
					<Layer {...clusterCountLayer} />
					<Layer {...unclusteredPointLayer} />
				</Source>
			</Map>
		</div>
	);
};

export default Visualizer;
