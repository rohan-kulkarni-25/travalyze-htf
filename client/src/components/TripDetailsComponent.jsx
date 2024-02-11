import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DayCardComponent from "./DayCardComponent";

const TripDetailsComponent = ({ data }) => {
  let days = data;
  console.log(days);
  return (
    <div className="overflow-y-scroll h-screen flex flex-col gap-4 overflow-x-hidden bg-gradient-to-r from-purple-100 to-green-100">
      <div>
        <div className="m-4 h-60 w-full bg-cover bg-center bg-[url('https://tripplanner.ai/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmaps-photos-prod%2FAUacShiM7ZBPfgOCdKTl17eSd41i8HM5igRpFUAWvdWVi8EzdOwcPNEF4fvKH8an-CUkac8Egg88mfKQqdNC8Lk9MIw5URiOMaQ5HfyOvkWjWHoq9OrfMp9Fk7kCE-mtiVtOucA1fZfOS5H_fCO5BGk_y4fOmz-EDxvOSE6LqtpgqDQMRJ-q%2F1024.jpg&w=1920&q=75')] ">
          <p className="text-7xl text-white font-bold p-4">PUNE</p>
        </div>
        <div className="flex flex-col p-4 gap-2  h-full ">
          {days.map((day) => {
            return <DayCardComponent data={day} key={day.name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TripDetailsComponent;
