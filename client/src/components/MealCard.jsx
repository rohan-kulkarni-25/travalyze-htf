import { Card, Chip } from "@mui/material";
import React from "react";

const MealCard = ({ data, name }) => {
  console.log(data);
  return (
    <Card variant="outlined">
      <div className="flex flex-row justify-between  p-2  text-black ">
        <div className="flex flex-col gap-2 justify-between">
          <p>{data.name}</p>
          <Chip label={data.preferences} color="info" variant="outlined"></Chip>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <Chip
            label={`${data.budget} INR`}
            color="error"
            variant="outlined"
          ></Chip>
          <Chip label={`${name}`} color="success" variant="outlined"></Chip>
        </div>
      </div>
    </Card>
  );
};

export default MealCard;
