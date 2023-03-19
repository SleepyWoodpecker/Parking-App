const axios = require("axios");
const { convertToLatLong } = require("./convertToLatLong");
const { convertToSVY21 } = require("./convertToSVY21");
require("dotenv").config();

const regex = /[a-zA-Z]/;

// keep in mind that input will always be string
async function processLocation(input) {
  // assumption 1: if it does not have a comma, it represents the name of the place
  if (regex.test(input)) {
    const params = new URLSearchParams({
      text: input,
      filter: "countrycode:sg",
      apiKey: process.env.REVERSE_GEOCODE_API_KEY,
    }).toString();

    const response = await axios.get(
      `https://api.geoapify.com/v1/geocode/autocomplete?${params}`
    );
    const mostSimilarResult = findMostSimilarResult(response.data);
    const { lat, lon, name } = mostSimilarResult.properties;
    const SVY21Coords = await convertToSVY21(lat, lon);
    // add in the name property to show what the autocorrected result ended up becoming
    return {
      name,
      ...SVY21Coords,
      latitude: lat,
      longitude: lon,
    };
  }

  // remove any instances of a space inside the input string, adn get the X&Y / Lat&Long coordinates
  const coordinates = input.replace(" ", "").split(",");
  const [input1, input2] = coordinates.map((coordinate) => {
    return Number(coordinate);
  });
  // identify Lat Long coordinates
  if ((input1 <= 90 && input1 >= -90) || (input2 <= 180 && input2 >= -180)) {
    // convert them to SVY21. Somehow input should have at least 1 dp
    const response = await convertToSVY21(input1, input2);
    return {
      ...response.data,
      latitude: input1,
      longitude: input2,
    };
  }

  // else it is just SVY21 coordinates
  const latLong = await convertToLatLong(input1, input2);
  return {
    X: input1,
    Y: input2,
    ...latLong,
  };
}

function findMostSimilarResult(response) {
  let base = 0;
  let maxIndex;
  response.features.forEach((location, i) => {
    const importance = location.properties.rank.importance;
    if (importance > base) {
      maxIndex = i;
      base = importance;
    }
  });
  return response.features[maxIndex];
}

module.exports = { processLocation };
