const fs = require('fs');

const actions = require('../../../data/actions.json');
const isRedirect = require('../utils/isRedirect');
const log = require('../utils/log');

const { DEFAULT_SHARE_REDIRECT } = process.env;

module.exports = {
  configure: (app) => {
    app.get('/:share/:color/:type', (req, res, next) => {
      if (isRedirect(req)) {
        const { color, share, type } = req.params;

        const details = actions.find((action) => action.type === type);
        const image = fs.existsSync(
          `${__dirname}/../../client/assets/shares/${share}/${color}.png`
        );

        log('Redirect:');
        log(`- details: ${JSON.stringify(details)}`);
        log(`- image: ${image}`);
        log(' ');

        if (details && image) {
          res.redirect(details.redirect);
        } else {
          res.redirect(DEFAULT_SHARE_REDIRECT);
        }
      } else {
        next();
      }
    });
  },
};
