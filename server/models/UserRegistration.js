const mongoose = require('mongoose');

const UserRegistrationSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    phone:Number,
    email:String,
    password:String,
    wallet:Number
})

const UserRegistrationModel = mongoose.model("registration", UserRegistrationSchema);
module.exports = UserRegistrationModel;