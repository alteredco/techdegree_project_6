const express = require('express');
const router = express.Router();
const { data } = require('../data/portfolioData.json');
const { projects } = data;

router.get('/', (req, res) => {
  const id  =  projects[0];
  const { project_name } = id;
  const title = project_name;
  const {image_urls} = id;
  const {thumbnail} = image_urls;
  const projectImg = thumbnail;
  res.render('index', {name: 'Wendy Kakuda', tagline: 'Full Stack Developer',
  portfolioDesc: 'All the works',
  projectLink: `/projects/0`,
  title,
  projectImg
  });
});

module.exports = router;