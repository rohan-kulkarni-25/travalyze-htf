import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const TripPageMapComponent = ({ coordinates }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_API,
  });

  return isLoaded ? (
    <div className="w-full h-full ">
      <GoogleMap
        map
        mapContainerStyle={{ width: "inherit", height: "inherit" }}
        center={coordinates}
        zoom={10}
      >
        <Marker position={coordinates} />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default TripPageMapComponent;
