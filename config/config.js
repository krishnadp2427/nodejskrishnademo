//This is to store all my config related info.
const milieu = require('milieu');

const config = milieu('krishna', {
  server: {
    port: 8080
  },
  mongo: {
    url: 'mongodb://localhost/krishna'
  }
});


module.exports = config;
