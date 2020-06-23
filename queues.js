const {
  config: { redis },
} = require('./config');
const { bar: barWorker, barEntrance: barEntranceWorker } = require('./workers');
const Queue = require('bull');

const bar = new Queue('bar', { redis });
const barEntrance = new Queue('bar-entrance', { redis });

bar.process((job, done) => barWorker(job, done));
barEntrance.process((job, done) => barEntranceWorker(job, done));

const queues = [
  {
    name: 'bar',
    hostId: 'Bar Queue Manager',
    redis,
  },
  {
    name: 'bar-entrance',
    hostId: 'Bar Queue Manager',
    redis,
  },
];

module.exports = { bar, barEntrance, queues };
