const express = require("express");
const path = require('path');
const server = express();
const cors = require("cors");

server.use(
    cors({
        origin: "http://31.146.35.249:7894"
    })
)
//sds
// server.set('view engine', 'ejs');

server.use('/public/no-polyfills.js', express.static(path.join(__dirname, '/public/no-polyfills.js')));
server.use('/public/react.production.min.js', express.static(path.join(__dirname, '/public/react.production.min.js')));
server.use('/public/react-dom.production.min.js', express.static(path.join(__dirname, '/public/react-dom.production.min.js')));
server.use('/public/react-dom-server.browser.production.min.js', express.static(path.join(__dirname, '/public/react-dom-server.browser.production.min.js')));
server.use('/public/styled-components.min.js', express.static(path.join(__dirname, '/public/styled-components.min.js')));
server.use('/public/style.css', express.static(path.join(__dirname, '/public/style.css')));
// server.use('/public/svg/watermark.svg', express.static(path.join(__dirname, '/public/svg/watermark.svg')));
// server.use('/public/back.jpg', express.static(path.join(__dirname, '/public/back.jpg')));

server.get('/', (req, res) => {
    console.log('hello');
    res.sendFile(path.join(__dirname, '/index.html'));
});

server.listen(7894);