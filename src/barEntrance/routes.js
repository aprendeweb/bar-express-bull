const express = require('express');
const router = express.Router();
const { entrance } = require('./controller');

router.post('/bar-entrance', entrance);

module.exports = (app) => {
  app.use('/entrance', router);
};
