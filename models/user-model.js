const Model = require('../libraries/model');
const UserSchema  = require('../schemas/user-schema');

// I created this class to show that I can have additional implementation here.
class UserModel extends Model {}

module.exports = new UserModel(UserSchema);
