module.exports = (job, done) => {
  const { bar } = require('../queues');
  try {
    const { name, age } = job.data;
    if (age < 18) throw new Error('You cannot access');

    bar.add({ name, age });
    done(null, job.data);
  } catch (error) {
    done(error);
  }
};
