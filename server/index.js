const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());

app.all('/*', cors(), function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PATCH, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", "true");
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

const url = 'https://hooks.slack.com/services/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';

const headers = {
  'Content-Type': 'application/json'
}

app.post('/', function (req, res) {

  const options = {
    url: url,
    method: 'POST',
    headers: headers,
    form: JSON.stringify(req.body),
  }

  request(options, function (error, response, body) {
  });
  res.status(200).send('ok');
});

app.get('/', function (req, res) {
  res.status(200).send('Oi :)');
})

app.listen(PORT, function () {
  console.log('service RESTful API serer started on: ' + PORT);
});

