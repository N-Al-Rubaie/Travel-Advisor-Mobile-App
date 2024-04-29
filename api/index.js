import axios from "axios"; // Importing Axios for making HTTP requests

// Function to fetch place data from the Travel Advisor API based on boundary coordinates and type
export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    // Making GET request to the Travel Advisor API
    const {
      data: { data }, // Extracting data from the response
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, // API endpoint for fetching places within a boundary
      {
        params: {
          // Query parameters including boundary coordinates, limit, currency, distance unit, and language
          bl_latitude: bl_lat ? bl_lat : "25.15543993776612", // Bottom left latitude
          tr_latitude: tr_lat ? tr_lat : "25.41257834546226", // Top right latitude
          bl_longitude: bl_lng ? bl_lng : "51.39587210719369", // Bottom left longitude
          tr_longitude: tr_lng ? tr_lng : "51.62812119686502", // Top right longitude
          limit: "30", // Limiting the number of results
          currency: "USD", // Currency
          lunit: "km", // Distance unit
          lang: "en_US", // Language
        },
        headers: {
          // Headers required for RapidAPI authentication
          "X-RapidAPI-Key": "",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data; // Returning the fetched data
  } catch (error) {
    return null; // Returning null if there's an error
  }
};
