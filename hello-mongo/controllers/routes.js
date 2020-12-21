const express = require('express');
const router = express.Router();

const User = require('../models/User');


router.post("/register", (req, res, next) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
  
    newUser
      .save()
      .then(() => {
        res.send("Your account was created successfully. You may now login.");
      })
      .catch((err) => console.log(err));
  });
  
  router.post("/register", (req, res, next) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
  
    newUser
      .save()
      .then(() => {
        res.send("Your account was created successfully. You may now login.");
      })
      .catch((err) => console.log(err));
  });


  module.exports = router;