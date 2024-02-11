import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import MapComponent from "../components/MapComponent";

import MinimalisticForm from "../components/MinimalisticForm";
import { useState } from "react";
import Trip from "./Trip";

const NewTrip = () => {
  const [data, setData] = useState({});
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAkPYHwPWC5fh6v0RUe8qoNpJeDqT3ZZCM",
  });
  console.log(data);
  return isLoaded ? (
    data.data == undefined ? (
      <div className="h-screen w-full overflow-hidden">
        <div className="h-12 flex flex-row justify-between px-24 bg-black text-white items-center ">
          <p className="font-bold italic text-xl">Travelyze</p>
          {/* <a className="font-mono font-semibold tracking-wider">New Trip</a> */}
        </div>
        <div className="bg-gray-800/70 z-20 absolute h-screen w-screen ">
          <div className="bg-gray-800/70 z-20 absolute h-screen w-screen " />
          <MapComponent />
        </div>

        <div className="absolute  z-50 w-screen">
          <MinimalisticForm setData={setData} data={data} />
        </div>
      </div>
    ) : (
      <Trip setData={setData} data={data.data.days} />
    )
  ) : (
    <></>
  );
};

export default NewTrip;
