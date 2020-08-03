const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roleSchema = new Schema({
  roleId: {
    type: Number,
    required: true
  },
  roleKey: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Role', roleSchema);
