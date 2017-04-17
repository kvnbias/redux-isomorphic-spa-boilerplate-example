
var User = require('../models/users');

module.exports = function(server) {

  /** Register user */
  server.post('/register', function(req, res, next) {

    const { email, first_name, last_name, password } = req.params;
    const user = new User({ email, first_name, last_name, password });

    /**
     * Has timeout for the sake of demonstrating
     * the redux state on registration attempt
     */
    setTimeout(function() {
      user.save(function(err, user) {
        if (err) res.send(400, err.errors);
        res.send(user);
        next();
      });
    }, 3000);
  });

};
