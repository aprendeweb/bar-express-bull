module.exports = (job, done) => {
  try {
    job.progress(100);
    done(null, job.data);
  } catch (error) {
    done(error);
  }
};
