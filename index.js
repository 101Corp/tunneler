const express = require('express');
const app = express();

const parseIp = (req) =>
    req.headers['x-forwarded-for']?.split(',').shift()
    || req.socket?.remoteAddress


app.get('/', (req, res) => {
    const ip = req.connection.remoteAddress;
    res.send(`Your IP address is: ${ip}`);
    console.log(ip)
    console.log(parseIp(req))
});

app.listen(8080, () => {
    console.log('Server running at http://127.0.0.1:8080/');
});
