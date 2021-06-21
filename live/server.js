const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

const postRouter = require('./routes/api/posts');
const photosRouter = require('./routes/api/photos');

app.use(express.json());

app.use('/api/posts', postRouter);
app.use('/api/photos', photosRouter);

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
