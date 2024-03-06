var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('index', {
    title: 'Inovus Digital',
    style: 'index.css'
  });
});

router.get('/users', function(req, res, next) {
  
  res.render('userform', {
    title: 'Inovus Digital',
    style: 'userformpage.css',
  });
});

router.get('/live', (req, res)=>{

  res.render('live_users',{
    title: 'live users',
    header: true,
    style: 'live_users.css'
  })
})

module.exports = router;
