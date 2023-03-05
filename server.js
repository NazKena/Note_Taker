// Here are the dependencies //

const express = require('express');
const fs = require("fs");

// Routes are here //

const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js')
const uuid = require("uuid");


// Here I have set up the Port and express app //

const app = express();
const PORT = process.env.PORT || 3001;


// The link to the routes //

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// Start App

app.listen(PORT, function () {
    console.log(`App listening on PORT http://localhost:${PORT} `) ;
});