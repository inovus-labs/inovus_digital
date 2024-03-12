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
  let allMentors = {}
  let learners = {}
  let allLearners = {}
  let explores = {}
  let allExplores = {}

  await userHelpers.getAllMentors().then((mentorsData) => {
    console.log("Mentors Data", mentorsData)

    if (mentorsData.length >= 6) {
      allMentors = mentorsData
    } else {
      mentors = mentorsData
    }

  }).catch((err) => {
    console.log(err)
  })

  await userHelpers.getAllLearners().then((learnersData) => {
    console.log("Leaners Data", learnersData)

    if (learnersData.length >= 6){
      allLearners = learnersData
    }else{
      learners = learnersData
    }

  }).catch((err) => {
    console.log(err)
  })

  await userHelpers.getAllExplores().then((exploresData) => {
    console.log("Explorers Data", exploresData)

    if(exploresData.length >= 6){
      allExplores = exploresData
    }else{
      explores = exploresData
    }

  }).catch((err) => {
    console.log(err);
  })

  console.log("mentors : ", mentors)
  console.log("All mentors: ", allMentors)
  console.log("Learners : ", learners)
  console.log("All Learners : ", allLearners)
  console.log("Explorers : ", explores)
  console.log("All Explorers : ", allExplores)

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