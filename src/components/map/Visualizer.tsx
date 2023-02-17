import * as React from "react";
import Map, { Marker } from "react-map-gl";
import { VisualizerContainer } from "./Visualizer.style";

const MAPBOX_API_KEY = process.env.REACT_APP_MAPBOX_API_KEY || "invalid";

export interface VisualizerProps {
  width?: number;
  height?: number;
}

const Visualizer: React.FC<VisualizerProps> = ({
  width = 600,
  height = 400,
}) => {
  return (
    <VisualizerContainer>
      <Map
        style={{
          width,
          height,
          borderRadius: "1rem",
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_API_KEY}
      >
      </Map>
    </VisualizerContainer>
  );
};

export default Visualizer;