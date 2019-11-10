const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var UserSchema = new mongoose.Schema({
    
    username: {
        type: String,
        unique: true,
        required: true,
        minlength: 5, trim: true
    },

    cart: [
        {
          itemName: {
            type: String
          },
          quantity: {
            type: String
          },
          itemPrice: {
            type: String
          }
        }
      ],
      orders: [
        {
          itemName: {
            type: String
          },
          quantity: {
            type: String
          },
          itemPrice: {
            type: String
          },
          orderedOn: {
            type: Date,
            date: Date.now()
          }
        }
      ],


    password: {
        type: String,
        required: true,
        minlength: 3, trim: true
    },
},
{
  timestamps: true
}
);

module.exports = new mongoose.model('myUser', UserSchema);