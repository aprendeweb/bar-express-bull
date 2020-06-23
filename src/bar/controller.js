const { bar } = require('../../queues');
module.exports = {
  getAll: async (req, res) => {
    const total = await bar.getCompletedCount();
    res.send({ total });
  },
};
