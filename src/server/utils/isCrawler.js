const isShareDomain = require('./isShareDomain');
const log = require('./log');

const {
  DEBUG_SHARE,
  FACEBOOK_USER_AGENT = 'facebookexternalhit/1.1',
  TWITTER_USER_AGENT = 'Twitterbot',
} = process.env;

module.exports = (req) => {
  const userAgent = req.headers['user-agent'];

  const isSocialMediaBot =
    userAgent.includes(FACEBOOK_USER_AGENT) ||
    userAgent.includes(TWITTER_USER_AGENT);

  const isCrawler =
    DEBUG_SHARE === 'true' || (isSocialMediaBot && isShareDomain(req));

  log(`Checking isCrawler....`);
  log('-------------------');
  log(`User Agent is ${userAgent}`);
  log(`DEBUG_SHARE env var is '${DEBUG_SHARE}'`);
  log(`FACEBOOK_USER_AGENT env var is '${FACEBOOK_USER_AGENT}'`);
  log(`TWITTER_USER_AGENT env var is '${TWITTER_USER_AGENT}'`);
  log(`isCrawler: ${isCrawler}`);
  log('-------------------');
  log(' ');

  return isCrawler;
};
