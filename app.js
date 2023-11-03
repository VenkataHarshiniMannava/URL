const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the default page');
});

app.get('/home', (req, res) => {
  res.send('Welcome home');
});

app.get('/about', (req, res) => {
  res.send('Welcome to About Us page');
});

app.get('/node', (req, res) => {
  res.send('Welcome to my Node.js project');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
