const express = require('express');
// const bodyParser = require('body-parser');

const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine' , 'pug');

// const home = require('./routes');

app.get('/', (req, res) => {
  res.render('index', {name: "Wendy Kakuda", tagline: "Artist, Mom and Busy Bee"});
});

app.get('/projects', (req, res) => {
  res.render('project', );
});

app.get('/about', (req, res) => {
  res.render('about', );
});

app.listen(3000, () => {
  console.log('The application is running on localhost: 3000')
});