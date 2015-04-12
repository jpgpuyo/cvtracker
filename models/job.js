var mongoose = require('mongoose')

var jobSchema = new mongoose.Schema({
  category: String,
  enterprise: String,
  technology: String,
  description: String,
  candidates: [{type: String, ref: 'User'}]
});

module.exports = mongoose.model('Job', jobSchema);