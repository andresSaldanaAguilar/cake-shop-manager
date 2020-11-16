var express = require('express');
var cakesRouter = require('./routes/cakes');
var app = express();

const MongoConnection = require('./util/mongoConnection');
MongoConnection.connect('mongodb://localhost:27017/Cake-Shop');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/cakes', cakesRouter);

module.exports = app;
