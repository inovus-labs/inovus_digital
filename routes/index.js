var express = require('express');
var router = express.Router();

const userHelpers = require('../helpers/user_helpers');


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
// router.get('/live', (req, res) => {
//   userHelpers.getAllUsers().then((userData) => {
//     if (userData.length >= 6) {
//       res.render('live_users', {
//         title: 'Live',
//         header: true,
//         style: 'live_users.css',
//         allUsersData: userData
//       })
//     } else {
//       res.render('live_users', {
//         title: 'Live',
//         header: true,
//         style: 'live_users.css',
//         users: userData
//       })
//     }
//   })
// })


// GET all users in the category mentor
router.get('/live', async (req, res) => {

  let mentors = {}
  let learners = {}
  let explores = {}

  await userHelpers.getAllMentors().then((mentorsData) => {
    console.log("Mentors Data", mentorsData)
    mentors = mentorsData
  }).catch((err) => {
    console.log(err)
  })

  await userHelpers.getAllLearners().then((learnersData) => {
    console.log("Leaners Data", learnersData)
    learners = learnersData
  }).catch((err) => {
    console.log(err)
  })

  await userHelpers.getAllExplores().then((exploresData) => {
    console.log("Explorers Data", exploresData)
    explores = exploresData
  }).catch((err) => {
    console.log(err);
  })

  console.log("mentors : ", mentors)
  console.log("Learners : ", learners)
  console.log("Explorers : ", explores)

  res.render('live_users', {
    title: 'Live',
    header: true,
    style: 'live_users.css',
    mentors,
    learners,
    explores
  })
})


module.exports = router;