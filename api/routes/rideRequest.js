const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const RideRequest = require('./models/rideRequest');


app.use(bodyParser.json());

app.post('/rideRequests', async (req, res) => {
const { startLocation, endLocation, passengerCount } = req.body;
const rideRequest = new RideRequest({
startLocation,
endLocation,
passengerCount
});
try {
await rideRequest.save();
res.status(201).send(rideRequest);
} catch (error) {
res.status(400).send(error);
}
});

app.listen(3000, () => console.log('Server started'));