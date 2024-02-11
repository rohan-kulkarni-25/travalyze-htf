import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_API,
  });

  return isLoaded ? (
    <div className="w-full h-full  ">
      <GoogleMap
        mapContainerStyle={{ width: "inherit", height: "inherit" }}
        center={{ lat: 18.5713, lng: 73.9137 }}
        zoom={5}
      >
        <Marker position={{ lat: 18.5713, lng: 73.9137 }} />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default MapComponent;
