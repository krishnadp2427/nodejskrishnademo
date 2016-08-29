const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const UserSchema = new Schema({
  title: { type: String, required: true },
  body:  { type: String },
  _id:   { type: String }
});


module.exports = mongoose.model('User', UserSchema);
