
const express = require('express');
const path = require('path');
const app = express();
const https = require('https');
const fs = require('fs');


//Launches index.html
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};

// Creating https server by passing
// options and app object
https.createServer(options, app)
    .listen(3000, function (req, res) {
        console.log("Server started at port 3000");
    });