const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  console.log(req.body)
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });


  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  console.log(req.session)
  if (req.session.logged_in) {
    console.log("was logged in")
    req.session.destroy(() => {
      res.status(204).end();
      res.redirect('/');
      return;
    });
  } else {
    console.log("wasn't logged in")
    res.status(404).end();
  }
});

// just like the one below!!!!
// router.get('/comment/:id', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.findByPk({
//       include: [
//         {
//           model: User,
//           attributes: ['username'],
//           model: Comment,
//           attributes: ['body'],
//         },
//       ],
//     });

//     res.render('post', {
//       posts,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/dashboard', async (req, res) => {
  try {
    const postData = await Post.findAll({ where: { user_id: req.session.user_id } });

    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts)
    res.render('dashboard', { posts })
  } catch (err) {
    res.status(500).json(err)
  } 
});

module.exports = router;