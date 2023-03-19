const { finalGovData } = require("../datasets/processedGov");
const geolib = require("geolib");

function getGOVCarpaks(currentLatLong) {
  const filteredByDistance = finalGovData.filter((carparkEntry) => {
    const obj = {
      latitude: carparkEntry.latitude,
      longitude: carparkEntry.longitude,
    };
    const distance = geolib.getDistance(currentLatLong, obj);
    return distance < 800;
  });

  return filteredByDistance;
}

module.exports = { getGOVCarpaks };
