// import files and packages up here
const express = require('express');
const morgan = require('morgan');
const data = require('./data');
//console.log(data); //this console.log verifies that the data.json file is being grabbed properly.

//the line below declares the exact PORT Number that we want to use for our environment.
//const PORT = process.env.PORT || 3030;

// create your express server below
const app = express();

// add your routes and middleware below
app.use(morgan('dev')); //morgan is the middleware in this case


//this is a route to our New Express Server which returns a status code of 200.
app.get('/', function(req, res) { 
    res.status(200).send('New Express Server');
})

app.get('/data', function(req, res) {
    res.status(200).send(data);
})

app.get('*', function(req, res){
    res.status(404).send('No Page Found');
});

// finally export the express application
module.exports = app;
