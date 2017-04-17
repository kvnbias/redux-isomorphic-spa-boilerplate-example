
var User = require('../models/users');

module.exports = function(server) {

  /** Register user */
  server.post('/register', function(req, res, next) {
    const { email, first_name, last_name, password } = req.params;

    const user = new User({
      email,
      first_name,
      last_name,
      password
    });

    user.save(function(err, user) {
      if (err) {
        res.status(500).send(err);
      }

      res.send(user);
    });

    next();
  });

};
