const express = require('express');
const router = express.Router();
const { data } = require('../data/portfolioData.json');
const { projects } = data;

router.get('/:id', (req, res) => {
  res.render('project', {
    title: projects[req.params.id].project_name,
    desc: projects[req.params.id].description,
    tech: projects[req.params.id].technologies,
    liveLink: projects[req.params.id].live_link,
    ghLink: projects[req.params.id].github_link,
    image1: projects[req.params.id].image_urls.image1,
    image2: projects[req.params.id].image_urls.image2,
    image3: projects[req.params.id].image_urls.image3
  });
});

module.exports = router;