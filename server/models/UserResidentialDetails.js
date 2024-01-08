const mongoose = require("mongoose")

const UserResidentialDetails = mongoose.Schema({
    email: String,
    district: String,
    mandal: String,
    village: String,
    address: String,
    postalCode: Number,
})

const UserResidentialDetailsModel = mongoose.model("user-residential-details", UserResidentialDetails);
module.exports = UserResidentialDetailsModel;