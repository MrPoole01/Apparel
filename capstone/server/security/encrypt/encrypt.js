var bcrypt = require('bcrypt');

module.exports = function (password) {
  var saltRounds = 8
  var hash = bcrypt.hashSync(password, saltRounds);
  return hash
}
