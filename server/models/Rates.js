const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratesSchema = new Schema({
    repair_type: String,
    rateOfRepair: Number
})

const Rates =  mongoose.model('Rates', ratesSchema)
module.exports = Rates