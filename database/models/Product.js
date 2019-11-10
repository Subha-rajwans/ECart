const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    domain: {
      type: String,
      required: true
    },
    products: [
      {
        productName: {
          type: String,
          required: true
        },
        price: {
          type: String,
          required: true
        },
        stockAvailable: {
          type: String,
          required: true
        },
        deliveryTime: {
          type: String,
          required: true
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = Product = mongoose.model("myProducts", ProductSchema);
