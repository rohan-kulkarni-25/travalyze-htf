const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const axios = require("axios");
const { default: OpenAI } = require("openai");
const { getTravelInfo } = require("./getInformation");

const app = express();

app.use(express.json());
const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

// API Endpoint for Get All Real Time Information.
app.get("/get-info", async (req, res) => {
  const response = await getTravelInfo();
  console.log("Response : ", response);
  res.json({
    message: "Sucess !",
    data: response,
  });
});

// Define API endpoint for itinerary generation
app.get("/plan", async (req, res) => {
  const { destination, duration } = req.body;

  try {
    // Fetch weather forecast for the destination
    // const weatherForecast = await fetchWeatherForecast(destination);

    const getTravelInfo = await getTravelInfo({
      destination: "Pune",
      from: "Mumbai",
    });
    // Generate travel recommendations using OpenAI (dummy response for now)
    const recommendations = generateTravelRecommendations(
      destination,
      duration
    );

    res.json({ weatherForecast, recommendations });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Function to fetch weather forecast from a weather API (replace with actual API call)
async function fetchWeatherForecast(destination) {
  // Dummy response for demonstration purposes
  return {
    destination,
    forecast: "Sunny with a chance of clouds",
    temperature: "25°C",
  };
}

async function generateTravelRecommendations(destination, duration) {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant designed to plan trips",
        },
        {
          role: "user",
          content: `I will be travelling to ${destination} around ${duration}. Can you please suggest me weather Suggestion`,
        },
      ],
      model: "gpt-3.5-turbo-0125",
    });
    console.log(completion.choices[0].message.content);
    return completion.choices[0].message;
  } catch (error) {
    console.log(error);
    // throw new Error("Failed to generate travel recommendations");
    return {};
  }
}

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
