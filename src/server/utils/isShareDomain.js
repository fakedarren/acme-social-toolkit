const log = require('./log');

const { SHARE_DOMAIN } = process.env;

module.exports = (req) => {
  const domain = `${req.protocol}://${req.get('host')}`;

  const isShareDomain = SHARE_DOMAIN === domain;

  log(`Checking isShareDomain....`);
  log('-------------------');
  log(`Domain is '${domain}'`);
  log(`SHARE_DOMAIN env var is '${SHARE_DOMAIN}'`);
  log(`isShareDomain: ${isShareDomain}`);
  log('-------------------');
  log(' ');

  return isShareDomain;
};
