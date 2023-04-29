const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');


app.use(bodyParser.json());

app.post('/users', async (req, res) => {
  const { name, email, password, paymentInfo } = req.body;
  const user = new User({
    name,
    email,
    password,
    paymentInfo
  });
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(3000, () => console.log('Server started'));
