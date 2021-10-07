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

router.get('/comment/:id', async (req, res) => {
  try {
    const commentData = await Post.findOne({ where: { id: req.params.id },
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    const comments = JSON.stringify(commentData)
    const comments1 = JSON.parse(comments)
    // commentData.map((comment) => comment.get({ plain: true }));
    console.log(`!!!!!!!!!!!!!!!!!!!! ${commentData}!!!!!!!!!!!!!!!!!`)
    console.log(comments1)
    res.render('comment',  comments1 )
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

// how do you show all comments, not just from that user?
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk({ where: { user_id: req.session.user_id },
      include: [
        {
          model: User,
          attributes: ['username']
        },
      {
        model: Comment,
        attributes: ['body']
      }
      ]
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts)
    res.render('dashboard', { posts })
  } catch (err) {
    res.status(500).json(err)
  } 
});

module.exports = router;
