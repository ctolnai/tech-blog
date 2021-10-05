const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('homepage', { 
      posts,
    });
  } catch (err) {
    res.status(500).json(err);
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

router.get('/dashboard', withAuth, (req, res) => {
  try {
    res.render('dashboard')
  } catch (err) {
    res.status(500).json(err)
    res.redirect('/login')
    return
    
  }
});


module.exports = router;
