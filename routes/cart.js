const express = require("express");
const router = express.Router();

// importing Schemas
const User = require("../../models/User");

// @type      GET
// @route    /user/cart/
// @desc     route add get cart of a user
// @access   PRIVATE

router.get("/", (req, res) => {
  User.findById(req.user._id)
    .then(user => {
      res.json(user.cart);
    })
    .catch(err => console.log("Error while finding a user " + err));
});

// @type      POST
// @route    /user/cart/
// @desc     route to add products to cart
// @access   PRIVATE
router.post("/", (req, res) => {
  User.findById(req.user._id)
    .then()
    .catch(err=> console.log("Unable to find user to add to cart "+ err));
});

module.exports = router;
