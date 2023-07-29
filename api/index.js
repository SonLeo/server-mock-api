const express = require('express');
const apiMocker = require('connect-api-mocker');
const cors = require('cors');

const app = express();

app.use(cors());
app.use('/api', apiMocker('api'));
app.listen(3001, () => {
  console.log('Mock API Server is up and running on http://localhost:3001');
});
