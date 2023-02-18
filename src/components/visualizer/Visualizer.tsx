import type * as React from 'react';
import Map, { Marker } from 'react-map-gl';

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY || 'invalid';

const id = 1;
const latitude = 46.290689;
const longitude = 12.034301;

const Visualizer: React.FC = () => {
	return (
		<div className="h-full">
			<Map
				mapStyle="mapbox://styles/mapbox/streets-v9"
				mapboxAccessToken={MAPBOX_API_KEY}
			>
				<Marker key={id} latitude={latitude} longitude={longitude} />
			</Map>
		</div>
	);
};

export default Visualizer;
