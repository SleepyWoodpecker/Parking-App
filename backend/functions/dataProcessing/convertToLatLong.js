const axios = require("axios");

async function convertToLatLong(XCoords, YCoords) {
  const params = new URLSearchParams({
    X: XCoords,
    Y: YCoords,
  }).toString();
  const { data } = await axios.get(
    `https://developers.onemap.sg/commonapi/convert/3414to4326?${params}`
  );
  return data;
}

module.exports = { convertToLatLong };
