// import express
const express = require('express');
const app = express();
const port = 3000;

//tell express all our static files will be in this public folder.
app.use(express.static(__dirname + '/public/'));

app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));