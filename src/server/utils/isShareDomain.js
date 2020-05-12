const { SHARE_DOMAIN } = process.env;

module.exports = (req) =>
  SHARE_DOMAIN === `${req.protocol}://${req.get('host')}`;
