const express = require("express");
const router = express.Router();

// importing Schemas
const Product = require("../../models/Product");

// @type      POST
// @route    /admin/products/adddomain/:domainname
// @desc     route add a create a new domain of products
// @access   PRIVATE

router.post("/adddomain/:domainName", (req, res) => {
  const newDomain = new Product({
    domain: req.params.domainName
  });
  newDomain
    .save()
    .then(domain => res.json(domain))
    .catch(err => console.log("Error while saving to database " + err));
});

// @type      POST
// @route    /admin/products/:domainname
// @desc     route add a product of a particular domain
// @access   PRIVATE
router.post("/:domain", (req, res) => {
  Product.find({ domain: req.params.domain })
    .then(item => {
      const newProduct = {
        productName: req.body.productName,
        price: req.body.price,
        stockAvailable: req.body.stockAvailable,
        deliveryTime: req.body.deliveryTime
      };
      //   console.log(item);
      item[0].products.push(newProduct);

      item[0]
        .save()
        .then(product => res.json(product))
        .catch(err =>
          console.log("Error while saving the product to database " + err)
        );
    })
    .catch(err =>
      console.log("Error while finding the product with given domain " + err)
    );
});

// @type      GET
// @route    /admin/products/:domainname
// @desc     route get products of a particular domain
// @access   PRIVATE

router.get("/:domain", (req, res) => {
  Product.find({ domain: req.params.domain })
    .then(products => {
      res.json(products);
    })
    .catch(err =>
      console.log(
        `Error finding products of domain ${req.params.domain} ${err}`
      )
    );
});

module.exports = router;
