require('dotenv').config();
const {
  config: { port },
} = require('./config');
const express = require('express');
const app = express();
const { queues } = require('./queues');

require('./server')(app, port, queues);
