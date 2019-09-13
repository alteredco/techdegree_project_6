const express = require('express');
const router = express.Router();
const { data } = require('../data/portfolioData.json');
const { projects } = data;

router.get('/', (req, res) => {
  res.render('index', {name: 'Wendy Kakuda', tagline: 'Artist, Mom and Busy Bee',
  portfolioDesc: 'Treehouse TechDegree Projects',
  projectLink: '/projects/0'
  });
});

module.exports = router;