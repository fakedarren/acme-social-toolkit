const fs = require('fs');

const template = fs.readFileSync(
  `${__dirname}/../../../dist/index.html`,
  'utf8'
);

module.exports = {
  configure: (app) => {
    app.get('*', (req, res, next) => {
      res.send(template);
    });
  },
};
