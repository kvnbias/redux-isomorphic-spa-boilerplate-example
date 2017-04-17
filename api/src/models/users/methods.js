
var SALT = 10;
var bcrypt = require('bcrypt');
var Promise = require('bluebird');

exports.hashPassword = function(password) {
  return new Promise((res, rej) => {
    bcrypt.genSalt(SALT, function(err, salt) {
      if (err) rej(err);
      bcrypt.hash(password, salt, function(err, hash) {
        if (err) rej(err);
        res(hash);
      });
    });
  });
}

exports.validatePassword = function(password) {
  var hash = this.password;
  return new Promise((res, rej) => {
    bcrypt.compare(password, hash, function(err, result) {
        if (err) rej(err);
        res(result);
    });
  });
}
