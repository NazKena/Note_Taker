// Here are the dependencies //

const express = require('express');

// Routes are here //

const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js')


// Here I have set up the Port and express app //

const app = express();
const PORT = process.env.PORT || 3001;


// The link to the assets //

app.use(express.static('public'));


// When the app first loads, it should start with the index.html //

app.get("/", function (req,res){
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
