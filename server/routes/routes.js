const Router = require('express').Router();
const { Controller } = require('../controller');

Router.route('/homePage')
  .get(Controller.get)
  .post(Controller.post)
  .put(Controller.update)
  .delete(Controller.delete);

module.exports = Router;
