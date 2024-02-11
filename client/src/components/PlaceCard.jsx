import { Card, Chip } from "@mui/material";
import React from "react";

const PlaceCard = ({ data }) => {
  return (
    <Card variant="outlined">
      <div className="flex flex-row justify-between  p-2">
        <p>{data.name}</p>
        {/* <p>{data.purpose}</p> */}
        <Chip label={data.purpose} color="info" variant="outlined" />
      </div>
    </Card>
  );
};

export default PlaceCard;
