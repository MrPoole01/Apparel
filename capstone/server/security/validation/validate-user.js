const validName = require('./valid-name.js');
const validPassword = require('./valid-password');

module.exports = (newUser) => {
  if (!validName(newUser.name)) {
    return {
      success: false,
      message: 'your name is not valid: only alphanumerical characters and spaces allowed.'
    }
  } else if (!validPassword(newUser.password)) {
    return {
      succes: false,
      message: 'your password is not valid. Passwords must be 8 characters in length and contain at least one uppercase character, lowercase character, and a number'
    }
  } else {
    return {
      success: true,
      message: 'you have successfuly signed up!',
    }
  }
}
