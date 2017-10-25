module.exports = (password) => {
  return (
   password.length >= 8 &&
   (/[A-Z]/g).test(password) &&
   (/[a-z]/g).test(password) &&
   (/[0-9]/g).test(password)
 )
}
