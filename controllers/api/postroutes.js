const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const userPost = await Post.create({
          title: req.body.title,
          post: req.body.post,
          user_id : req.session.user_id
      });
        res.status(200).json(userPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });


module.exports = router;