const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReportsSchema = new Schema({
  Complain1: { type: String },
  Complain2: { type: String},
  Complain3: { type: String},
  Complain4: { type: String},
});

const Reports = mongoose.model('Reports', ReportsSchema);

module.exports = Reports;