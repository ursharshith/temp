const mongoose = require("mongoose")

const ResidentialAddressDetailsSchema = new mongoose.Schema({
    email: String,
    district: String,
    mandal: String,
    village: String,
    address: String,
    postalCode: Number,
})

const ResidentialAddressDetailsModel = mongoose.model('residential_details', ResidentialAddressDetailsSchema);
module.exports = ResidentialAddressDetailsModel;