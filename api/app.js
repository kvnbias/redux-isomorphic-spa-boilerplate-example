
var restify = require('restify');
var chalk = require('chalk');
var os = require('os');
var config = require('./config');
var db = require('./database');
var router = require('./src/routes');

var server = restify.createServer();
var rendererHost = `${ config.renderer.host }:${ config.renderer.port }`;

/**
 * Parses out the Accept header, and ensures that the server can
 * respond to what the client asked for. If the request is for
 * a non-handled type, this plugin will return an error of 406
 */
server.use(restify.acceptParser(server.acceptable));

/**
 * Supports tacking CORS headers into actual requests. Sample overrides:
 *
 * server.use(restify.CORS({
 *   origins: ['https://foobarbaz.com'],
 *   credentials: true,
 *   headers: ['x-foo']
 * }));
 */
server.use(restify.CORS({
  origins: [rendererHost]
}));

/**
 * Parses the HTTP query string. he parsed content will always be
 * available in req.query, additionally params are merged into
 * req.params. You can disable by passing in mapParams:
 * false in the options object
 */
server.use(restify.queryParser({ mapParams: false }));

/**
 * Blocks your chain on reading and parsing the HTTP request body.
 * Switches on Content-Type and does the appropriate logic.
 * application/json, application/x-www-form-urlencoded
 * and multipart/form-data are currently supported.
 */
server.use(restify.bodyParser({
  mapParams: true,
  mapFiles: false,
  multipartHandler: function(part) {
    part.on('data', function(data) {
      /** do something with the multipart data */
    });
  },
  multipartFileHandler: function(part) {
    part.on('data', function(data) {
      /** do something with the multipart file data */
    });
  },
  uploadDir: os.tmpdir(),
  multiples: true,
  hash: 'sha1'
}));

/**
 * Request throttler.
 * Edit the settings base on what you need. Sample implementation:
 *
 * server.use(restify.throttle({
 *   burst: 1, // If available, the amount of requests to burst to
 *   rate: 1, // Steady state number of requests/second to allow
 *   ip: true, // Do throttling on a /32 (source IP)
 *   overrides: {
 *     'http://my.slow/operation': {
 *       rate: 0, // unlimited
 *       burst: 0 // unlimited
 *     }
 *   }
 * }));
 */
server.use(restify.throttle({
  burst: 100,
  rate: 50,
  ip: true
}));

/** Setup routes */
router.initialize(server);

server.listen(config.node.port || 8080, function() {
  console.log(
    chalk.bold.green('%s listening at %s'),
    server.name,
    server.url
  );
});

/** Connect to MongoDB */
db.mongo_connect();
