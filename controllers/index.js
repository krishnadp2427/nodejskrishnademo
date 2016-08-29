//I am removing -contoller.js to make it easy "user"
module.exports = require('../libraries/require-all')(__dirname, {
  stripFromName: '-controller'
});
