const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('DevFlow Solutions no ar!');
});

module.exports = app;