const axios = require("axios");
const { pythagores } = require("./dataProcessing/pythagores");
require("dotenv").config();

// to add as a additional parameter vechicleType
async function getURACarparks(URAtoken, coordinatesO, vehicleType) {
  //need to change this to get more carpark data
  const {
    data: { Result },
  } = await axios.get(
    "https://www.ura.gov.sg/uraDataService/invokeUraDS?service=Car_Park_Details",
    {
      headers: {
        AccessKey: process.env.URA_API_KEY,
        Token: URAtoken,
      },
    }
  );
  const { X, Y } = coordinatesO;

  const nearbyURAcarparks = Result.filter((carparkEntry) => {
    return carparkEntry.vehCat === vehicleType;
  }).filter((carparkEntry) => {
    const coordinatesCP = carparkEntry.geometries[0].coordinates.split(",");
    const [cpX, cpY] = coordinatesCP.map((coordinate) => {
      return Number(coordinate);
    });
    //get all carparks within 500m of the user
    return pythagores(X - cpX, Y - cpY) < 800;
  });
  const filteredURASet = nearbyURAcarparks.map((carparkEntry) => {
    const coordinatesCP = carparkEntry.geometries[0].coordinates.split(",");
    const [cpX, cpY] = coordinatesCP.map((coordinate) => {
      return Number(coordinate);
    });
    return {
      name: carparkEntry.ppName,
      weekday: {
        rate1: carparkEntry.weekdayRate,
      },
      saturday: {
        rate1: carparkEntry.satdayRate,
      },
      sunPH: {
        rate1: carparkEntry.sunPHRate,
      },
      parkingSystem:
        carparkEntry.parkingSystem === "C" ? "Coupon" : "Electronic",
      coordinateType: "SVY21",
      X: cpX,
      Y: cpY,
    };
  });

  return filteredURASet;
}

module.exports = { getURACarparks };
