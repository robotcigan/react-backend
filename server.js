const express = require('express');
const app = express();
const router = require('./routes/main.route');
const connection = require('./services/connections.service');

app.use(router);

app.listen(1337, function() {
  console.log('server was started');
});