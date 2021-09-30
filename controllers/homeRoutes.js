const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  try {

    const posts = await Post.findAll({
    }),

    const projects = posts.map((project) => project.get({ plain: true }));
    
    res.render('dashboard',
    {projects})
  
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

router.get('/signup', (req, res) => {
  try {
    res.render('signup')
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


module.exports = router;
