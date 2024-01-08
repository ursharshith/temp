const mongoose = require("mongoose")

const InstitutionDetailsSchema = new mongoose.Schema({
    email:String,
    districtInstitution: String,
    mandalInstitution: String,
    institutionname: String,
    coursename: String,
    admissionnumber: Number,
    addressInstitution: String,
})

const InstitutionDetailsModel = mongoose.model('institution_details', InstitutionDetailsSchema)
module.exports = InstitutionDetailsModel;