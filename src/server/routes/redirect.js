const fs = require('fs');

const actions = require('../../../data/actions.json');
const isRedirect = require('../utils/isRedirect');
const log = require('../utils/log');

module.exports = {
  configure: (app) => {
    app.get('*', (req, res, next) => {
      if (isRedirect(req)) {
        const parts = req.path.split('/');

        const share = parts[1];
        const color = parts[2];
        const type = parts[3];

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
          res.redirect(actions[0].redirect);
        }
      } else {
        next();
      }
    });
    app.get('*', (req, res, next) => {
      if (isRedirect(req)) {
        res.redirect(actions[0].redirect);
      } else {
        next();
      }
    });
  },
};
