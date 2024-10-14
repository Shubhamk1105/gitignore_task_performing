const express = require('express');
const app = express();

app.get('/example', (req, res) => {
  res.status(200).send('Everything is OK!');
});

app.post('/create', (req, res) => {
  // Assuming creation was successful
  res.status(201).send('Resource created!');
});

app.get('/not-found', (req, res) => {
  res.status(404).send('Resource not found!');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
