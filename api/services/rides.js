const { RideRequest } = require('../models/rideRequest');
const { Driver } = require('../models/driver');
const { calculateDistance } = require('../utils/distance');

async function matchDriverToRideRequest(rideRequestId) {
  const rideRequest = await RideRequest.findById(rideRequestId);
  if (!rideRequest || rideRequest.status !== 'requested') {
    throw new Error('Invalid ride request');
  }

  const drivers = await Driver.find({ available: true });
  let bestMatch = null;
  let bestDistance = Infinity;

  for (const driver of drivers) {
    const distance = calculateDistance(rideRequest.pickupLocation, driver.location);
    if (distance < bestDistance) {
      bestMatch = driver;
      bestDistance = distance;
    }
  }

  if (bestMatch) {
    bestMatch.available = false;
    await bestMatch.save();

    rideRequest.status = 'matched';
    rideRequest.driverId = bestMatch._id;
    await rideRequest.save();

    return { rideRequest, driver: bestMatch };
  }

  return null; // no driver available to match
}

module.exports = { matchDriverToRideRequest };
