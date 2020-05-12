const isCrawler = require('./isCrawler');
const isShareDomain = require('./isShareDomain');

module.exports = (req) => {
  return isShareDomain(req) && !isCrawler(req);
};
