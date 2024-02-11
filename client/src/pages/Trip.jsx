import TripDetailsComponent from "../components/TripDetailsComponent";
import TripPageMapComponent from "../components/TripPageMapComponent";

const Trip = ({ setData, data }) => {
  console.log(data);
  return (
    <div className="flex flex-col overscroll-auto">
      <div className="h-12 flex flex-row justify-between px-24 bg-black text-white items-center ">
        <p className="font-bold italic text-xl">Travelyze</p>
        <div
          onClick={() => setData("")}
          className="font-mono font-semibold tracking-wider"
        >
          New Trip
        </div>
      </div>

      <div className="flex flex-row w-screen h-screen sm:flex-col">
        <div className="w-1/2 sm:w-full">
          <TripDetailsComponent data={data} />
        </div>

        <div className="w-1/2 sm:w-full">
          {/* <TripPageMapComponent coordinates={data.city_details.coordinates} /> */}
        </div>
      </div>
    </div>
  );
};

export default Trip;
