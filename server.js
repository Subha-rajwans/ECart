const express=require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const morgan = require('morgan');

var app = express();

const port = process.env.PORT | 5000;

// mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[database][?options]]
const uri='mongodb://127.0.0.1:27017'

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('connected to mongodb database successfully');
}).on('error', () => {
    console.error('error connecting to the database');
});

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