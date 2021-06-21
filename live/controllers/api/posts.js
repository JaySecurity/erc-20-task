const axios = require('axios');

module.exports = { all, getOne, create, update, deleteOne };

async function all(req, res) {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    if (response.status === 200) res.status(200).json({ posts: response.data });
    else {
      console.log(res.status);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.message });
  }
}

async function getOne(req, res) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${req.params.id}`
    );
    if (response.status === 200) {
      const post = response.data;
      res.status(200).json(post);
    } else if (response.status === 404) {
      res.status(404).json({ msg: 'Post Not Found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.message });
  }
}

async function create(req, res) {
  console.log(req.body);
  try {
    const newPost = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      req.body
    );

    res.status(201).json(newPost.data);
  } catch (err) {
    console.log(err);
  }
}

async function update(req, res) {
  try {
    const updatedPost = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${req.params.id}`,
      req.body
    );
    if (updatedPost.status === 200) res.status(200).json(updatedPost.data);
    else if (updatedPost.response === 404)
      res.status(404).json({ msg: 'Post Not Found' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
}

async function deleteOne(req, res) {
  try {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${req.params.id}`
    );
    if (response.status === 200) res.sendStatus(204);
  } catch (err) {}
}
