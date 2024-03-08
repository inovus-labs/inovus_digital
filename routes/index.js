var express = require('express');
var router = express.Router();

const userHelpers = require('../helpers/user_helpers')

/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('index', {
    title: 'Inovus Digital',
    style: 'index.css'
  })
})

router.get('/users', function (req, res, next) {

  res.render('userform', {
    title: 'Inovus Digital',
    style: 'userformpage.css',
  })
})

router.post('/users', (req, res) => {

  userHelpers.addUserInfo(req.body).then((response) => {
    res.redirect('/live')
  })
})

router.get('/live', (req, res) => {

  userHelpers.getAllUsers().then((userData)=>{
    console.log(userData)
    res.render('live_users', {
      title: 'Live',
      header: true,
      style: 'live_users.css',
      userData
    })
  })
})

module.exports = router;
