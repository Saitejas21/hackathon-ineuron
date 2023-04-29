const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const Driver = require('./models/driver');
const RideRequest = require('./models/rideRequest');
const { getDistance } = require('./utils');



app.use(bodyParser.json());

app.post('/drivers/:id/available', async (req, res) => {
  const { latitude, longitude } = req.body;
  const driver = await Driver.findById(req.params.id);
  if (!driver) {
    return res.status(404).send({ error: 'Driver not found' });
  }
  driver.available = true;
  await driver.save();

  const nearbyRequests = await RideRequest.find({
    status: 'pending',
    startLocation: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [longitude, latitude]
        },
        $maxDistance: 5000 // max distance in meters
      }
    }
  });

  const closestRequest = nearbyRequests.reduce(
    (closest, request) => {
      const distance = getDistance(
        latitude,
        longitude,
        request.startLocation.coordinates[1],
        request.startLocation.coordinates[0]
      );
      if (distance < closest.distance) {
        return { request, distance };
      } else {
        return closest;
      }
    },
    { request: null, distance: Infinity }
  );

  if (closestRequest.request) {
    closestRequest.request.status = 'matched';
    closestRequest.request.driver = driver._id;
    await closestRequest.request.save();
    return res.send({
      request: closestRequest.request,
      driver: driver._id
    });
  } else {
    return res.send({
        message: 'No nearby ride requests found'
      });
    }      
});