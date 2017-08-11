var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;

//Define schema
var UserSchema = new Schema({
  _id: { type: String, required: true },
  authToken: String,
  email: { type: String, lowercase: true, match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ },
  name: String,
  avatar: {
    image_24: String,
    image_32: String,
    image_48: String,
    image_72: String,
    image_192: String,
    image_512: String
  }
}, { _id: false });

UserSchema.virtual('url').get(function () {
  return '/api/user/' + this._id;
});


UserSchema.plugin(timestamps);

module.exports = mongoose.model('User', UserSchema);
