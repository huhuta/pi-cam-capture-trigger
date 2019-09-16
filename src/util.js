exports.logger = console

const { logger } = this

// eslint-disable-next-line promise/no-callback-in-promise
exports.catchErrors = (fn) => (req, res, next) => fn(req, res, next).catch(next)

// eslint-disable-next-line no-unused-vars
exports.productionErrors = (err, req, res, next) => {
  logger.error(err)
  // logger.error(req);
  res.status(err.status || 500)
  res.send(err.message)
}
