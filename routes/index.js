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


// GET all users in the category mentor
router.get('/live', async (req, res) => {

  let mentors = {}
  let mentorStatus = false
  let allMentors = {}
  let allMentorsStatus = false
  let learners = {}
  let learnersStatus = false
  let allLearners = {}
  let allLearnersStatus = false
  let explores = {}
  let exploresStatus = false
  let allExplores = {}
  let allExploresStatus = false

  let mentorsCountStatus = false
  let learnersCountStatus = false
  let exploresCountStatus = false

  await userHelpers.getAllMentors().then((mentorsData) => {

    if (mentorsData.length > 0) {
      mentorsCountStatus = true
    }

    if (mentorsData.length >= 6) {
      allMentors = mentorsData
      allMentorsStatus = true
    } else {
      mentors = mentorsData
      mentorStatus = true
    }

  }).catch((err) => {
    console.log(err)
  })

  await userHelpers.getAllLearners().then((learnersData) => {

    if (learnersData.length > 0) {
      learnersCountStatus = true
    }

    if (learnersData.length >= 6) {
      allLearners = learnersData
      allLearnersStatus = true
    } else {
      learners = learnersData
      learnersStatus = true
    }

  }).catch((err) => {
    console.log(err)
  })

  await userHelpers.getAllExplores().then((exploresData) => {

    if (exploresData.length > 0) {
      exploresCountStatus = true
    }

    if (exploresData.length >= 6) {
      allExplores = exploresData
      allExploresStatus = true
    } else {
      explores = exploresData
      exploresStatus = true
    }

  }).catch((err) => {
    console.log(err);
  })

  res.render('live_users', {
    title: 'Live',
    header: true,
    style: 'live_users.css',
    mentorsCountStatus,
    mentors,
    mentorStatus,
    allMentors,
    allMentorsStatus,
    learnersCountStatus,
    learners,
    learnersStatus,
    allLearners,
    allLearnersStatus,
    exploresCountStatus,
    explores,
    exploresStatus,
    allExplores,
    allExploresStatus
  })
})

module.exports = router;