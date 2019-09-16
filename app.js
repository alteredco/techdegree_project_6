const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, './public')))

app.set('view engine' , 'pug');

const homeRoute = require('./routes');
const aboutRoutes = require('./routes/about');
const projectRoutes = require('./routes/projects');

app.use(homeRoute);
app.use('/about', aboutRoutes);
app.use('/projects', projectRoutes);

app.use((req,res, next) => {
  const err = new Error('Not Found');
  err.status =  404;
  next(err);
});

app.use(( err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

app.listen(3000, () => {
  console.log('The application is running on localhost: 3000')
});