
const loopback = require('loopback');
const boot = require('loopback-boot');
const app = module.exports = loopback();

app.start = () => {
  /** start the web server **/
  return app.listen(() => {
    app.emit('started');
    let baseUrl = app.get('url').replace(/\/$/, '');
    console.info('===> 💩   API server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      let explorerPath = app.get('loopback-component-explorer').mountPath;
      console.info(
        '===> 💩   Browse your REST API at %s%s',
        baseUrl,
        explorerPath
      );
    }
  });
};

/**
    Bootstrap the application, configure models, datasources and middleware.
    Sub-apps like REST API are mounted via boot scripts.
*/
boot(app, __dirname, (err) => {
  if (err) throw err;

  /** start the server if `$ node server.js` **/
  let mainModule = require.main;
  if (mainModule === module) app.start();
});
