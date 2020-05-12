require('dotenv').config();

const compression = require('compression');
const express = require('express');

const redirect = require('./routes/redirect');
const share = require('./routes/share');
const ui = require('./routes/ui');

const { PORT = 8000 } = process.env;

//
const app = express();

//
app.set('trust proxy');
app.use(compression());
app.use(express.static(`${__dirname}/../../dist`, { index: false }));

//
redirect.configure(app);
share.configure(app);
ui.configure(app);

//
app.listen(PORT, () => {
  console.log(`Application running at http://localhost:${PORT}`);
});
