const mongoose = require("mongoose")


const profSchema = new mongoose.Schema({
    name: String,
    age: Number,
    weight: Number,
    height: Number,
    isRetired: Boolean,
    nacionality: String,
    oscarsNumber: Number,
    profession: String


})


module.exports = mongoose.model("profesionales" , profSchema, "profesionales",)