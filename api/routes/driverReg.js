const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const Driver = require('./models/driver');

app.use(bodyParser.json());

app.post('/drivers', async (req, res) => {
  const { name, email, password, vehicleInfo, licenseInfo } = req.body;
  const driver = new Driver({
    name,
    email,
    password,
    vehicleInfo,
    licenseInfo
  });
  try {
    await driver.save();
    res.status(201).send(driver);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(3000, () => console.log('Server started'));
