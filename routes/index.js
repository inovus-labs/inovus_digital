var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('index', {
    title: 'Inovus Digital',
    style: 'index.css'
  });
});

module.exports = router;
