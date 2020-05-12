const isCrawler = require('./isCrawler');
const isShareDomain = require('./isShareDomain');
const log = require('./log');

module.exports = (req) => {
  const isRedirect = isShareDomain(req) && !isCrawler(req);

  log(`Checking isRedirect....`);
  log('-------------------');
  log(`isRedirect: ${isRedirect}`);
  log('-------------------');
  log(' ');

  return isRedirect;
};
