var mongoose = require('mongoose')

var jobSchema = new mongoose.Schema({
  enterprise: String,
  category: String,
  description: String,
  technology: [String],
  candidate: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  }]
});

module.exports = mongoose.model('Job', jobSchema);