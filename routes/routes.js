require('strict-mode')(function () {
  const controllers = require('../controllers');

const Router = require('express').Router;
const router = new Router();


router.get('/', (req, res) => {
  res.json({ message: 'Welcome to krishna API!' });
});

  // ...args is not working. hence had to use req, res, next
  router.route('/user')
      .get((req, res, next) => controllers.user.find(req, res, next))
      .post((req, res, next) => {
        console.log(`req ${req}  req.body ${JSON.stringify(req.body)}`);
        controllers.user.create(req, res, next)});

  router.route('/user/:id')
      .put((req, res, next) => controllers.user.update(req, res, next))
      .get((req, res, next) => controllers.user.findById(req, res, next))
      .delete((req, res, next) => controllers.user.remove(req, res, next));

    //The code I intended to run is below.
  /*
  router.route('/user')
    .get((...args) => controllers.user.find(...args))
    .post((...args) => controllers.user.create(...args));

  router.route('/user/:id')
    .put((...args) => controllers.user.update(...args))
    .get((...args) => controllers.user.findById(...args))
    .delete((...args) => controllers.user.remove(...args));

  */

module.exports = router;

})
