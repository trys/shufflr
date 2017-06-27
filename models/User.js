const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const mongodbErrorHandler = require('mongoose-mongodb-errors');
var findOrCreate = require('mongoose-findorcreate')

const userSchema = new Schema({
  instagramId: {
    type: String,
    required: 'User ID Required!'
  },
  instagramToken: {
    type: String,
    required: 'User token required'
  }
});

userSchema.plugin(findOrCreate);
userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);