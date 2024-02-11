const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const axios = require("axios");
const { default: OpenAI } = require("openai");

const app = express();

app.use(express.json());
app.use(cors());
const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

// Define the route for /trip
app.post("/trip", async (req, res) => {
  // Extract trip details from the request body
  const {
    destination,
    startDate,
    endDate,
    numberOfPeople,
    visitingFirstTime,
    budget,
    reasonForTravel,
    cityActivities,
    tripType,
    mealPreferences,
    mealBudget,
    mealPlans,
    stayLocation,
  } = req.body;

  console.log();

  const prompt = `Details to plan trip:

- Destination: ${destination}
- Start Date: ${startDate}
- End Date: ${endDate}
- Number of People: ${numberOfPeople}
- Visiting for the First Time: ${visitingFirstTime}
- Budget: ${budget}
- Reason for Travel: ${reasonForTravel}
- City Activities: ${cityActivities}
- Trip Type: ${tripType}
- Meal Preferences: ${mealPreferences}
- Meal Budget: ${mealBudget}
- Meal Plans: ${mealPlans}
- Stay Location: ${stayLocation} 

Also provide the hotels for meals with location and thier public image for meals.`;
  // Call the OpenAI API
  openai.apiKey = process.env.OPENAI_KEY;

  try {
    let response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Use the appropriate engine
      messages: [
        {
          role: "user",
          content: `Plan a trip for me using these details.

          - Destination: ${destination}
          - Start Date: ${startDate}
          - End Date: ${endDate}
          - Number of People: ${numberOfPeople}
          - Visiting for the First Time: ${visitingFirstTime}
          - Budget: ${budget}
          - Reason for Travel: ${reasonForTravel}
          - City Activities: ${cityActivities}
          - Trip Type: ${tripType}
          - Meal Preferences: ${mealPreferences}
          - Meal Budget: ${mealBudget}
          - Meal Plans: ${mealPlans}
          - Stay Location: ${stayLocation} 
          
          Give me Objects with each Object consisting plan  for a single day with names day1,day2 in "days" array also put meals in array. The object should include the specific name of place,cordinates,image and purpose of visit.For eg breakfast,sightseeing. More than one places can be covered in single day as per there triptype:${tripType}.Make sure the meal preferences are considered before planning breakfast,lunch and dinner. Also provide approx amount in INR that will be spent for meals and place visits that day for ${numberOfPeople} people.Also Add a object cityDetails and provide basic city details including a image and co-ordinates in form of lat and lng.`,
        },
      ],
    });

    let response2 = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Use the appropriate engine
      messages: [
        {
          role: "system",
          content: `Convert this text to renderable json ${response.choices[0].message.content} 
          
          days: [
            {
              name: "Day 1",
              places: [
                {
                  name: "",
                  coordinates: {
                    lat: "",
                    lng: "",
                  },
                  purpose: "",
                },
              ],
              meals: [
                {
                  breakfast: {
                    name: "",
                    budget: 300,
                    mealType: "Non-vegetarian",
                  },
                },
              ],
            }, Give Result of Each Day in this manner don't forget any of key amoung this.`,
        },
      ],
    });

    res.status(200).send(response2.choices[0].message.content);
  } catch (error) {
    console.log(error);
  }
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
