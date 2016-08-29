const Promise = require('bluebird');

module.exports = modules => {
  console.log(`aa modules ${JSON.stringify(modules)}`);
  modules.forEach(module => {
    console.log(`aa module ${JSON.stringify(module)}`);
    Promise.promisifyAll(require(module)); // eslint-disable-line global-require
  });
};
