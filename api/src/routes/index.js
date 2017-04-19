

exports.initialize = function(server, io) {
  require('./users')(server, io);
};
