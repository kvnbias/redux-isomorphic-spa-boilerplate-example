
module.exports = (server) => {
  /** Install a `/` route that returns server status **/
  const router = server.loopback.Router();

  router.get('/', server.loopback.status());

  router.get('/api/hello', (req, res) => {
    res.send({ ok: 'k' });
  });

  server.use(router);
};
