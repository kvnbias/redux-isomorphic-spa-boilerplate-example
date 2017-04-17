
var mongoose = require('mongoose');
var validator = require('validator');

var User = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, 'First name is required.']
  },
  last_name: {
    type: String,
    required: [true, 'Last name is required.']
  },
  email: {
    type: String,
    required: [true, 'Email address is required.'],
    validate: [{
      validator: function(string) {
        return validator.isEmail(string);
      },
      message: '{VALUE} is not a email address!'
    },{
      message: '{VALUE} is already taken.',
      validator: function(email, callback) {
        if (this.isNew || this.isModified('email')) {
          this.constructor.findOneByEmail(email).then((user) => {
            if(!user) callback(true);
            callback(false);
          }).catch((err) => callback(false));
        }
        else{
          callback(true);
        }
      }
    }]
  },
  password: {
    type: String,
    required: [true, 'Password is required.']
  }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

User.pre('save', function(cb) {
  var self = this;
  this.updated_at = new Date();

  if (this.isNew) this.created_at = new Date();

  if(this.isNew || this.isModified('password')) {
    this.hashPassword(this.password).then((hash) => {
      self.password = hash;
      cb();
    }).error((err) => {
      cb(err);
    }).catch((err) => {
      cb(err);
    });
  }
  else{
    cb();
  }
});

User.virtual('userId').get(function() {
  return this._id;
});

User.virtual('full_name').get(function() {
  return `${ this.first_name } ${ this.last_name }`;
});

User.methods = require('./methods');
User.statics = require('./statics');

module.exports = mongoose.model('User', User);
