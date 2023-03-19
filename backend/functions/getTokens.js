const axios = require("axios");
require("dotenv").config();

async function getTokens() {
  const carparkToken = await // generate token for URA API
  axios.get("https://www.ura.gov.sg/uraDataService/insertNewToken.action", {
    headers: {
      AccessKey: process.env.URA_API_KEY,
    },
  });

  // console.log(carparkToken.data.Result + "    " + mapToken.data.access_token);
  return {
    URAtoken: carparkToken.data.Result,
  };
}

module.exports = { getTokens };
