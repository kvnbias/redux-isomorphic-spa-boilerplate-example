
var User = require('../models/users');

module.exports = function(server, io) {

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
        if (err) {
          return res.send(400, err.errors);
        };

        /**
         * Where `redux-isomorphic-feed` is the channel
         * to broadcast in the namespace `frontend`.
         */
        io.of('frontend').to('redux-isomorphic-feed')
          .emit('user-registered', user);

        res.send(user);
        next();
      });
    }, 3000);
  });

  server.get('/users', function(req, res, next) {
    const { page, limit } = req.query;

    let offset = 0;
    if (page > 1) offset = limit * (page - 1);

    User.find()
    .sort('created_at')
    .skip(parseInt(offset))
    .limit(parseInt(limit))
    .exec()
    .then((users) => {
      /**
       * Has timeout for the sake of demonstrating
       * request cancellation
       */
      setTimeout(function() {
        res.send(users);
        next()
      }, 3000);
    })
    .catch(err => {
      console.log(err)
      res.send(500, err.errors);
    });
  });
};
