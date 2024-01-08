const mongoose = require('mongoose');

const RouteDetailsSchema = new mongoose.Schema({
    fromplace:String,
    toplace:String,
    phone:Number
})

const RouteDetailsModel = mongoose.model("route-details", RouteDetailsSchema);
module.exports = RouteDetailsModel;