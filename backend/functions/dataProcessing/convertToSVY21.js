const axios = require("axios");

async function convertToSVY21(lat, lon) {
  const params = new URLSearchParams({
    latitude: lat,
    longitude: lon,
  }).toString();
  const response = await axios.get(
    `https://developers.onemap.sg/commonapi/convert/4326to3414?${params}`
  );
  return response.data;
}

module.exports = { convertToSVY21 };
