const { barEntrance } = require('../../queues');
module.exports = {
  entrance: async (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) return res.send('The age and name are require');
    await barEntrance.add({ name, age });
    res.send(`${name} has been added to the entrance bar queue`);
  },
};
