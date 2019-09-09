const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('view engine' , 'pug');

const home = require('./routes');

app.use(home);

app.listen(3000, () => {
  console.log('The application is running on localhost: 3000')
});