import * as React from "react";
import Map, { FullscreenControl, Marker, Popup } from "react-map-gl";
import { VisualizerContainer } from "./Visualizer.style";

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY || "invalid";

export interface VisualizerProps {
  width?: number;
  height?: number;
}

const id = 1;
const latitude = 46.290689;
const longitude = 12.034301;

const Visualizer: React.FC<VisualizerProps> = ({
  // Add width and height props to the component to 100% fill the parent container
  width = 1200,
  height = 800,
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

      <Marker key={id} latitude={latitude} longitude={longitude} />
      
      </Map>
    </VisualizerContainer>
  );
};

export default Visualizer;