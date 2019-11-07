const express=require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const morgan = require('morgan');

var app = express();

const port = process.env.PORT | 5000;

app.use(morgan('tiny'));

app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: 'xxxxxx',
    resave: false,
    saveUninitialized: true,
}));

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});