'use strict';

const express = require('express');
const app = express();
const {resolve} = require('path')

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const dotenv = require('dotenv');

// Serve static files from ../public
app.use(express.static(resolve(__dirname, 'public')));

// Send index.html for anything else.
app.get('/*', (_, res) => res.sendFile(resolve(__dirname, 'public', 'index.html')));

app.listen(3000, function () {
  console.log('Server listening on port', 3000);
});
