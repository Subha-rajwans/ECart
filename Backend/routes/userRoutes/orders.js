const express = require('express');
const router = express.Router();

// importing Schemas
const User = require('../../models/User');

// @type      GET
// @route    /user/orders/
// @desc     route add get orders of a user
// @access   PRIVATE

router.get('/', (req, res) => {
	User.findById(req.user._id)
		.then(orders => {
			res.json(orders.cart);
		})
		.catch(err => console.log('Error while finding a user ' + err));
});

// @type      POST
// @route    /user/orders/
// @desc     route add to orders of a user
// @access   PRIVATE

router.post('/', (req, res) => {
	User.findById(req.user._id)
		.then(user => {
			// user.orders.push(user.cart);
			// const newOrder = new User({
			// 	username: req.user.username,
			// 	email: req.user.email,
			// 	password: req.user.password,
			// 	phoneno: req.user.phoneno,
			// 	orders: user.cart,
			// });
			let newOrder = {
				order: user.cart,
			};
			user.orders.push(newOrder);
			user.cart = [];
			user.save()
				.then(result => {
					res.json({ success: 'order has been placed' });
				})
				.catch(err => console.log('Error while placing order ' + err));
		})
		.catch(err => console.log('Unable to find user to add to orders ' + err));
});

module.exports = router;
