const express = require("express");
const router = express.Router();

// importing Schemas
const User = require("../../models/User");

// @type      GET
// @route    /user/orders/
// @desc     route add get orders of a user
// @access   PRIVATE

router.get("/", (req, res) => {
  User.findById(req.user._id)
    .then(orders => {
      res.json(orders.cart);
    })
    .catch(err => console.log("Error while finding a user " + err));
});

// @type      POST
// @route    /user/orders/
// @desc     route add to orders of a user
// @access   PRIVATE

router.post("/", (req, res) => {
  User.findById(req.user._id)
    .then()
    .catch(err=> console.log("Unable to find user to add to orders "+ err))
});

module.exports = router;
