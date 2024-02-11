import axios from "axios";
import React, { useState } from "react";
import Loading from "./Loading";
import { Navigate, useNavigate } from "react-router-dom";

const MinimalisticForm = ({ setData }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    place: "",
    startDate: "",
    endDate: "",
    numberOfPeople: "",
    visitingFirstTime: false,
    budget: "",
    reasonForTravel: "",
    cityActivities: [],
    tripType: "",
    mealPreferences: [],
    mealBudget: "",
    mealPlans: [],
    stayLocation: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCityActivityChange = (activity) => {
    const newCityActivities = [...formData.cityActivities];
    if (newCityActivities.includes(activity)) {
      newCityActivities.splice(newCityActivities.indexOf(activity), 1);
    } else {
      newCityActivities.push(activity);
    }
    setFormData({
      ...formData,
      cityActivities: newCityActivities,
    });
  };
  const handleTravelReasonChange = (activity) => {
    setFormData({
      ...formData,
      reasonForTravel: activity,
    });
  };
  const handleTripPlan = (activity) => {
    setFormData({
      ...formData,
      tripType: activity,
    });
  };
  const handleMealPreferencesChange = (activity) => {
    const newMealPreferences = [...formData.mealPreferences];
    if (newMealPreferences.includes(activity)) {
      newMealPreferences.splice(newMealPreferences.indexOf(activity), 1);
    } else {
      newMealPreferences.push(activity);
    }
    setFormData({
      ...formData,
      mealPreferences: newMealPreferences,
    });
  };

  const handleMealBudgetChange = (activity) => {
    setFormData({
      ...formData,
      mealBudget: activity,
    });
  };

  const handleMealPlanChange = (activity) => {
    setFormData({
      ...formData,
      mealPlans: activity,
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    // Do something with the form data, such as sending it to a server
    const newTripContent = await axios({
      method: "post",
      url: "http://localhost:8080/trip",
      data: { ...formData },
    });
    console.log(newTripContent);
    // Clear the form fields
    setFormData({
      place: "",
      startDate: "",
      endDate: "",
      numberOfPeople: "",
      visitingFirstTime: false,
      budget: "",
      reasonForTravel: "",
      cityActivities: [],
      tripType: [],
      mealPreferences: [],
      mealBudget: "",
      mealPlans: [],
      stayLocation: "",
    });
    setData({ ...newTripContent });
  };
  const toggleVisitingFirstTime = () => {
    setFormData({
      ...formData,
      visitingFirstTime: !formData.visitingFirstTime,
    });
  };

  return (
    <div className="max-w-3xl h-screen1 my-4 mx-auto">
      {!isLoading ? (
        <div
          // onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-8"
        >
          <div className="flex flex-row justify-between gap-4 border-b border-black border-dashed">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="place"
              >
                Place
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="place"
                type="text"
                placeholder="Place"
                name="place"
                value={formData.place}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="startDate"
              >
                Start Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="startDate"
                type="date"
                placeholder="Start Date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="endDate"
              >
                End Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="endDate"
                type="date"
                placeholder="End Date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="numberOfPeople"
              >
                Number of People
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="numberOfPeople"
                type="number"
                placeholder="Number of People"
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Visiting First Time
              </label>
              <button
                className={`${
                  formData.visitingFirstTime
                    ? "bg-blue-500 hover:bg-blue-700"
                    : "bg-gray-200 hover:bg-gray-300"
                } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                onClick={toggleVisitingFirstTime}
                type="button"
              >
                {formData.visitingFirstTime ? "Yes" : "No"}
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-4  pb-8     items-center border-b border-black border-dashed">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="budget"
              >
                Budget (INR)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="budget"
                type="number"
                placeholder="Budget (INR)"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="stayLocation"
              >
                Stay Location
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="stayLocation"
                type="text"
                placeholder="Stay Location"
                name="stayLocation"
                value={formData.stayLocation}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-row justify-between gap-4  pb-8     items-center border-b border-black border-dashed">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              What to do in City
            </label>
            <div className="flex flex-wrap gap-4 justify-end">
              <button
                className={`${
                  formData.cityActivities.includes("Sightseeing")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mr-2`}
                onClick={() => handleCityActivityChange("Sightseeing")}
                type="button"
              >
                SightSeeing
              </button>
              <button
                className={`${
                  formData.cityActivities.includes("Shopping")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded`}
                onClick={() => handleCityActivityChange("Shopping")}
                type="button"
              >
                Shopping
              </button>
              <button
                className={`${
                  formData.cityActivities.includes("Historical Places")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded`}
                onClick={() => handleCityActivityChange("Historical Places")}
                type="button"
              >
                Historical Places
              </button>
              <button
                className={`${
                  formData.cityActivities.includes("Adventure/Amusement Parks")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded`}
                onClick={() =>
                  handleCityActivityChange("Adventure/Amusement Parks")
                }
                type="button"
              >
                Adventure/Amusement Parks
              </button>
              <button
                className={`${
                  formData.cityActivities.includes("Explore Food")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded`}
                onClick={() => handleCityActivityChange("Explore Food")}
                type="button"
              >
                Explore Food
              </button>
              <button
                className={`${
                  formData.cityActivities.includes("Nothing Specific")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded`}
                onClick={() => handleCityActivityChange("Nothing Specific")}
                type="button"
              >
                Nothing Specific
              </button>
              <button
                className={`${
                  formData.cityActivities.includes("Other")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded`}
                onClick={() => handleCityActivityChange("Other")}
                type="button"
              >
                Other
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-4 items pb-8     items-center border-b border-black border-dashed">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="reasonForTravel"
            >
              Reason for Travel
            </label>
            <div className="flex flex-wrap gap-4">
              <button
                className={`${
                  formData.reasonForTravel.includes("Business Meetings")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mr-2`}
                onClick={() => handleTravelReasonChange("Business Meetings")}
                type="button"
              >
                Business Meetings
              </button>
              <button
                className={`${
                  formData.reasonForTravel.includes("Chill at Resort")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded`}
                onClick={() => handleTravelReasonChange("Chill at Resort")}
                type="button"
              >
                Chill at Resort
              </button>
              <button
                className={`${
                  formData.reasonForTravel.includes("Adventures")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded`}
                onClick={() => handleTravelReasonChange("Adventures")}
                type="button"
              >
                Adventures
              </button>
              <button
                className={`${
                  formData.reasonForTravel.includes("Seasonal")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded`}
                onClick={() => handleTravelReasonChange("Seasonal")}
                type="button"
              >
                Seasonal
              </button>
              <button
                className={`${
                  formData.reasonForTravel.includes("Other")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded`}
                onClick={() => handleTravelReasonChange("Other")}
                type="button"
              >
                Other
              </button>
            </div>
          </div>
          <div className="flex flex-rows justify-between gap-4  pb-8      border-b border-black border-dashed ">
            <label className="block text-gray-700 text-sm font-bold mb-2 ">
              How Should be your trip planned ?
            </label>
            <div className="flex flex-wrap gap-4 justify-end">
              <button
                className={`${
                  formData.tripType.includes("Relaxed ( 1 - 2 sights daily)")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mr-2`}
                onClick={() => handleTripPlan("Relaxed ( 1 - 2 sights daily)")}
                type="button"
              >
                Relax ( 1 - 2 sights daily)
              </button>
              <button
                className={`${
                  formData.tripType.includes("Packed ( 4 - 5 sights daily)")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mr-2`}
                onClick={() => handleTripPlan("Packed ( 4 - 5 sights daily)")}
                type="button"
              >
                Packed ( 4 - 5 sights daily)
              </button>
              <button
                className={`${
                  formData.tripType.includes(
                    "Aesthetic Vibes ( 2 - 3 Aesthetic Places)"
                  )
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded`}
                onClick={() =>
                  handleTripPlan("Aesthetic Vibes ( 2 - 3 Aesthetic Places)")
                }
                type="button"
              >
                Aesthetic Vibes ( 2 - 3 Aesthetic Places)
              </button>
            </div>
          </div>
          <div className="flex flex-rows justify-between gap-4   pb-8     items-center border-b border-black border-dashed">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Meal Preferences
            </label>
            <div className="flex flex-wrap justify-end gap-4">
              <button
                className={`${
                  formData.mealPreferences.includes("Vegetarian")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mr-2`}
                onClick={() => handleMealPreferencesChange("Vegetarian")}
                type="button"
              >
                Vegetarian
              </button>
              <button
                className={`${
                  formData.mealPreferences.includes("Non Vegetarian")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mr-2`}
                onClick={() => handleMealPreferencesChange("Non Vegetarian")}
                type="button"
              >
                Non - Vegetarian
              </button>
              <button
                className={`${
                  formData.mealPreferences.includes("Vegan")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mr-2`}
                onClick={() => handleMealPreferencesChange("Vegan")}
                type="button"
              >
                Vegan
              </button>
              <button
                className={`${
                  formData.mealPreferences.includes("Gluten-free")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded`}
                onClick={() => handleMealPreferencesChange("Gluten-free")}
                type="button"
              >
                Gluten-free
              </button>
              <button
                className={`${
                  formData.mealPreferences.includes("Lactose Intolerance")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded`}
                onClick={() =>
                  handleMealPreferencesChange("Lactose Intolerance")
                }
                type="button"
              >
                Lactose Intolerance
              </button>
              <button
                className={`${
                  formData.mealPreferences.includes("Religious Restrictons")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded`}
                onClick={() =>
                  handleMealPreferencesChange("Religious Restrictons")
                }
                type="button"
              >
                Religious Restrictons
              </button>
            </div>
          </div>
          <div className="flex flex-rows justify-between gap-4   pb-8                 items-center border-b border-black border-dashed">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Per Meal Budget (INR PER PERSON)
            </label>
            <div>
              <button
                className={`${
                  formData.mealBudget === "200"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mr-2`}
                onClick={() => handleMealBudgetChange("200")}
                type="button"
              >
                INR 200
              </button>
              <button
                className={`${
                  formData.mealBudget === "400"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mr-2`}
                onClick={() => handleMealBudgetChange("400")}
                type="button"
              >
                INR 400
              </button>
              <button
                className={`${
                  formData.mealBudget === "500"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded`}
                onClick={() => handleMealBudgetChange("500")}
                type="button"
              >
                INR 500
              </button>
            </div>
          </div>
          <div className="flex flex-rows justify-between gap-4 pb-8 items-center border-b border-black border-dashed">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Meal Plans
            </label>
            <div>
              <button
                className={`${
                  formData.mealPlans.includes("Breakfast-Lunch-Dinner")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mr-2`}
                onClick={() => handleMealPlanChange("Breakfast-Lunch-Dinner")}
                type="button"
              >
                Breakfast-Lunch-Dinner
              </button>
              <button
                className={`${
                  formData.mealPlans.includes("Breakfast-Lunch-Snacks-Dinner")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded`}
                onClick={() =>
                  handleMealPlanChange("Breakfast-Lunch-Snacks-Dinner")
                }
                type="button"
              >
                Breakfast-Lunch-Snacks-Dinner
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              PLAN TRIP
            </button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MinimalisticForm;
