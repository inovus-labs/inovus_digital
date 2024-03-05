var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.render('userform', {
    title: 'Inovus Digital',
    style: 'userformpage.css',
  });
});

module.exports = router;
