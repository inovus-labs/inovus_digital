var express = require('express');
var router = express.Router();

const userHelpers = require('../helpers/user_helpers')

/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('index', {
    title: 'Inovus Digital',
    style: 'index.css'
  });
});

router.get('/users', function (req, res, next) {

  res.render('userform', {
    title: 'Inovus Digital',
    style: 'userformpage.css',
  });
});

router.post('/add_user_info', (req, res) => {

  console.log(req.body)
  userHelpers.addUserInfo(req.body).then((response) => {

    console.log(response)

    let userID = response.insertedId
    let acknowledge = response.acknowledged

    console.log(userID, acknowledge)

    let image = req.files.image

    image.mv('./public/user_images/' + userID + '.jpg', (err, done) => {
      if (!err) {
        res.render('userform', {
          alert: acknowledge,
          title: 'Inovus Digital',
          style: 'userformpage.css',
        })
      } else {
        console.log("Error" + err)
      }
    })
  })
})

router.get('/live', (req, res) => {

  res.render('live_users', {
    title: 'live users',
    header: true,
    style: 'live_users.css'
  })
})

module.exports = router;
