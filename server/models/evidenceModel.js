const mongoose = require('mongoose');

const evidenceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'title to evidence is a required'],
  },
  des: {
    type: String,
    required: false,
  },
  file: {
    type: String,
    required: [true, 'File to evidence is a required'],
  },
});

const Evidence = mongoose.model('Evidence', evidenceSchema);
module.exports = Evidence;
