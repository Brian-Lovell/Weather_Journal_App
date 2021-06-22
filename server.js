const http = require('http');

const hostname = '127.0.0.1';
const port = 2076;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome Vault Dwellers!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('GET request to homepage')
});

app.post('/', function (req, res) {
    res.send('Post request to homepage')
});