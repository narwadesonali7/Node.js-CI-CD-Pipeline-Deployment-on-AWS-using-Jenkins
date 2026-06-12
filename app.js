const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from jenkin, added webhook, we are from 14 july batch from jenkins This is sonali');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
