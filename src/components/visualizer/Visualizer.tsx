import * as React from 'react';
import Map, { Marker } from 'react-map-gl';

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY || 'invalid';

export interface Location {
	id: string;
	latitude: number;
	longitude: number;
}

export interface VisualizerProps {
	locations?: Location[];
	onLocationClick?: (id: Location['id']) => void;
}

const Visualizer: React.FC<VisualizerProps> = ({
	locations = [],
	onLocationClick,
}) => {
	const handleLocationClick = React.useCallback(
		(id: Location['id']) => () => {
			if (onLocationClick) {
				onLocationClick(id);
			}
		},
		[onLocationClick]
	);

	const markers: React.ReactNode[] = React.useMemo(
		() =>
			locations.map(({ id, latitude, longitude }) => (
				<Marker key={id} latitude={latitude} longitude={longitude}>
					<div
						onClick={handleLocationClick(id)}
						className="cursor-pointer font-medium text-sm bg-white border rounded-full px-2 py-1 shadow-md duration-200 hover:scale-110"
					>
						<span>Marker</span>
					</div>
				</Marker>
			)),
		[handleLocationClick, locations]
	);

	return (
		<div className="h-full">
			<Map
				mapStyle="mapbox://styles/mapbox/streets-v9"
				mapboxAccessToken={MAPBOX_API_KEY}
				reuseMaps
			>
				{markers}
			</Map>
		</div>
	);
};

export default Visualizer;
