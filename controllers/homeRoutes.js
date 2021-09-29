const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  try {
    res.render('homepage')
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/login', (req, res) => {
  try {
    res.render('login')
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/dashboard', (req, res) => {
  try {
    res.render('dashboard')
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;
