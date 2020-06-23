const express = require('express');
const router = express.Router();
const { getAll } = require('./controller');

router.get('/get-all', getAll);

module.exports = (app) => {
  app.use('/bar', router);
};
