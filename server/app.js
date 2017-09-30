const express      = require('express');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const path         = require('path');
const logger       = require('morgan');
const routes       = require('./routes');

const port = 3000;

// configure the express server
const app = express();

app.set('port', port);
app.use(logger('dev'))
  .use(cookieParser())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(express.static(path.resolve(__dirname, '../client/public')))
  .use('/', routes);

// Start her up, boys
app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});
