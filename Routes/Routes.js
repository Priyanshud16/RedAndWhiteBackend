const { Router } = require('express');
const Post = require('../model/Post');

const router = Router();


router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve posts', error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create post', error: error.message });
  }
});

module.exports = router;
