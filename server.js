const Arena = require('bull-arena');
const barRoutes = require('./src/bar/routes');
const barEntranceRoutes = require('./src/barEntrance/routes');

module.exports = (app, port, queues) => {
  const arenaConfig = Arena(
    {
      queues,
    },
    {
      basePath: '/arena',
      disableListen: true,
    }
  );

  app.use('/', arenaConfig);
  barRoutes(app);
  barEntranceRoutes(app);

  app.listen(port, () => {
    console.log('Server on port', port);
  });
};
