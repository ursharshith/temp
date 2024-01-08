const mongoose = require("mongoose")

const PhotoSchema = mongoose.Schema({
    email: String,
    image: String,
})

const PhotoModel = mongoose.model('photo', PhotoSchema);
module.exports = PhotoModel;

