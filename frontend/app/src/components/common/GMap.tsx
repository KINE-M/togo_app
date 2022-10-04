import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

type GMapProps = {
  children?: React.ReactNode;
  mapStyles: { height: string; width: string };
  zoom: number;
  mapCenterPosition: { lat: number; lng: number };
  mapOptions: {
    gestureHandling: string;
    zoomControl: boolean;
    scaleControl: boolean;
    streetViewControl: boolean;
    panControl: boolean;
    mapTypeControl: boolean;
    fullscreenControl: boolean;
  };
  handleClick?: ((e: google.maps.MapMouseEvent) => void) | (() => void);
};

const GMap: React.FC<GMapProps> = ({
  children,
  mapStyles,
  zoom,
  mapCenterPosition,
  mapOptions,
  handleClick,
}) => (
  <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}>
    <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={zoom}
      center={mapCenterPosition}
      options={mapOptions}
      onClick={handleClick}
    >
      {children}
    </GoogleMap>
  </LoadScript>
);
export default GMap;
