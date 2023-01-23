const http = require('http');
const routes = require('./routes');

const express = require('express');

const app = express();

app.use('/add-product',(req, res, next) => {
    console.log('In the next middleware.');
    res.send("<h1>Add product page!</h1>");
});

app.use('/',(req, res, next) => {
    console.log('In the next middleware.');
    res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
