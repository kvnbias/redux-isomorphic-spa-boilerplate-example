

exports.initialize = function(server) {
  require('./users')(server);
};
