
const Promise = require('bluebird');
const config = require('../config');
const mongoose = require('mongoose');
const chalk = require('chalk');
const _ = require('underscore');

const checkMongoConnection = (err) => {
  if (err) console.log(chalk.bold.red('Connection to MongoDB error'), err);
  else console.log(chalk.bold.green('Connection to MongoDB successful'));
};

exports.mongo_connect = () => {

  return new Promise((res, rej) => {
    const { user, pass, authdb, host, port, database } = config.database.mongodb;
    const options = { user, pass, auth: { authdb } };

    try{
      mongoose.Promise = Promise;
      mongoose.set('debug', true);
      mongoose.connect(
        `mongodb:// ${ user }: ${ pass }@${ host }:${ port }/${ database }`,
        options,
        checkMongoConnection()
      );

      res(mongoose);
    }
    catch(err){
      console.log(chalk.bold.red('Connection to MongoDB error'), err);
      rej(err);
    }
  });
};
