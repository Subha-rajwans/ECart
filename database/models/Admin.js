const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3, trim: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        minlength: 5, trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 3, trim: true
    }
},
{
    timestamps: true
  }
);

module.exports = Admin = mongoose.model("myAdmin", AdminSchema);
