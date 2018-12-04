const Find = require('express').Router();
const { FindController } = require('../controller/FindController');

Find.route('/find')
  .get(FindController.get)
  .post(FindController.post)
  .put(FindController.update)
  .delete(FindController.delete);

module.exports = Find;
