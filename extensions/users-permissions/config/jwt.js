module.exports = {
  /*
  that hardcoded alternative better be a dev secret and not prod.
  better to have a separate command to serve dev with hardcoded node environment variables
  this could have unintended consequences if prod doesn't have JWT_SECRET and uses default instead
  */
  jwtSecret: process.env.JWT_SECRET || 'cf6436f2-4ae2-47cf-a2c5-97d1def3fd39'
};