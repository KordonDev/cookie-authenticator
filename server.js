const express = require('express');
const fs = require('fs');
const https = require('https');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.post('/authenticate', (req, res) => {
    debugger;
    const body = {
        username: req.body.username,
        password: req.body.password
    };
    const options = {
        headers: {
            'Content-Type': 'application/json'
        }
        body: body
    };
    fetch(req.body.authUrl, options)
        .then(data => data.header.cookie)
        .then(cookie => {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({cookie: cookie}));
        });
});

app.post('/sendToRequestor', (req, res) => {
    cons body = {
        uniqueToken: token,
        cookie: cookie
    };
    const options = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch(req.body.cbUrl, options)
        .then(respond => res.statusCode(request.status).send());
});

app.use(express.static('app'));

const key = fs.readFileSync('./certs/localhost.key', 'utf8');
const cert = fs.readFileSync('./certs/localhost.cert', 'utf8');
const server = https.createServer({key: key, cert: cert}, app);

server.listen(PORT, () => {
    console.log(`App available on https://localhost:${PORT}`)
});
