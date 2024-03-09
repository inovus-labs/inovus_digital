var express = require('express');
var router = express.Router();

const userHelpers = require('../helpers/user_helpers')


// GET home page
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Home',
    style: 'index.css'
  })
})


// GET user submission page
router.get('/users', function (req, res, next) {
  res.render('userform', {
    title: 'Submit',
    style: 'userformpage.css',
  })
})


// POST user submission page
router.post('/users', (req, res) => {
  userHelpers.addUserInfo(req.body).then((response) => {
    res.redirect('/live')
  })
})


// GET live users page
router.get('/live', (req, res) => {
  userHelpers.getAllUsers().then((userData) => {
    res.render('live_users', {
      title: 'Live',
      header: true,
      style: 'live_users.css',
      userData
    })
  })
})



module.exports = router;