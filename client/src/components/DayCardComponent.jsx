import React, { useState } from "react";
import PlaceCard from "./PlaceCard";
import MealCard from "./MealCard";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Typography,
} from "@mui/material";

const DayCardComponent = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary
        // expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          {data.name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex flex-col gap-1 ">
          {data.places.map((place) => {
            return <PlaceCard data={place} />;
          })}
          {data.meals.map((meal, index) => {
            let name = Object.keys(meal)[0];
            console.log(name);
            return <MealCard data={meal} name={name} />;
          })}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default DayCardComponent;
