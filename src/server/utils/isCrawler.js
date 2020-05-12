const isShareDomain = require('./isShareDomain');

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

  return DEBUG_SHARE === 'true' || (isSocialMediaBot && isShareDomain(req));
};
