const fs = require('fs');

const actions = require('../../../data/actions.json');
const isCrawler = require('../utils/isCrawler');

const { SHARE_DOMAIN } = process.env;

module.exports = {
  configure: (app) => {
    app.get('*', (req, res, next) => {
      if (isCrawler(req)) {
        const parts = req.path.split('/');

        let share = parts[1];
        let color = parts[2];
        const type = parts[3];

        let details = actions.find((action) => action.type === type);
        const image = fs.existsSync(
          `${__dirname}/../../client/assets/shares/${share}/${color}.png`
        );

        if (!details || !image) {
          details = actions[0];
          share = 1;
          color = 1;
        }

        const imagepath = `${SHARE_DOMAIN}/assets/shares/${share}/${color}.png`;
        const link = details.redirect;
        const url = `${SHARE_DOMAIN}${req.path}`;

        let template = fs.readFileSync(
          `${__dirname}/../../client/share.html`,
          'utf8'
        );

        template = template.replace(/{{HEADLINE}}/gi, details.share.headline);
        template = template.replace(
          /{{DESCRIPTION}}/gi,
          details.share.description
        );
        template = template.replace(/{{IMAGE}}/gi, imagepath);
        template = template.replace(/{{LINK}}/gi, link);
        template = template.replace(/{{URL}}/gi, url);

        res.send(template);
      } else {
        next();
      }
    });
  },
};
