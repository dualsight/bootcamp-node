const express = require('express');
const User = require('../models/User');
const router = express.Router();
router.post("/register", (req, res) => {
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
  
  router.post("/register", (req, res) => {
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