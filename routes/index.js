const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {name: "Wendy Kakuda", tagline: "Artist, Mom and Busy Bee"});
});

module.exports = router;