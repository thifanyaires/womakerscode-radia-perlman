const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Radia Perlman');
});

app.listen(5500, () => console.log('Application is running on port 3000!'));