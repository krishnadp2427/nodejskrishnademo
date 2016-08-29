const Controller = require('../libraries/controller');
const UserModel  = require('../models/user-model');

//I can have my additional controllers here.
class UserController extends Controller {

}

module.exports = new UserController(UserModel);
