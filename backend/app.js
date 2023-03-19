const express = require("express");
const axios = require("axios");
const app = express();
const bodyParser = require("body-parser");
const { getTokens } = require("./functions/getTokens.js");
const {
  processLocation,
} = require("./functions/dataProcessing/processLocation.js");
const { getURACarparks } = require("./functions/getURACarparks.js");
const { getGOVCarpaks } = require("./functions/getGovCarparks");
const { finalGovData } = require("./datasets/processedGov.js");

// enable express to read data from the http body
app.use(bodyParser.json());

app.post("/getCarparks", async (req, res) => {
  console.log("request detected");

  try {
    const { searchLocation } = req.body;

    // get tokens to make requests to the One Map and URA Apis
    const { URAtoken } = await getTokens();

    // assuming that the input for searchLocation can either be a string, Lat & long or SVY21, perform reverse geocoding
    const coordinates = await processLocation(searchLocation);

    // now get a list of all the carparks available from the URA dataset, for now will only get for cars
    const nearbyURACarparks = await getURACarparks(
      URAtoken,
      { X: coordinates.X, Y: coordinates.Y },
      "Car"
    );

    // get a list of carparks from the GOV.sg dataset, modified based on proximity
    const nearbyGOVcarparks = getGOVCarpaks({
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
    });
    const finalizedArray = nearbyGOVcarparks.concat(nearbyURACarparks);
    res.send({ name: coordinates.name, carparks: finalizedArray });
  } catch (err) {
    console.log(err);
    res.status(500).send("welp, there seemed to be an error");
  }
});

app.get("/test", async (req, res) => {
  finalGovData.forEach((carparkEntry) => {
    if (carparkEntry.sunPH === undefined) console.log(carparkEntry.name);
    if (carparkEntry.sunPH.rate1 === "Same as Saturday") {
      carparkEntry.sunPH = carparkEntry.saturday;
    }
  });
  res.status(200).send(finalGovData);
});

app.listen(8080, () => {
  console.log("app is listening on port 8080");
  return;
});
