
exports.findOneByEmail = function(email) {
  return this.findOne({ email }).exec();
}
