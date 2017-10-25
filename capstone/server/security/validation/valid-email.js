module.export = (email) => {
  return (
    email.includes('@') &&
    email.includes('.') &&
    typeof email == 'string'
  )
}
