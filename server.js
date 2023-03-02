// Here are the dependencies //

const express = require('express');
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js')

// The asynchronous proceses is handled here //

const readFileAsync =util.promisify(fs.readFile)
const writeFileAsync=util.promisify(fs.WriireFile)

// Here I have set up the Port and express app //

const app = express();
const PORT = process.env.PORT || 3001;


// The link to the assets //

app.use(express.static('public'));

// When the app first loads, it should start with the index.html //

app.get("/", function (req,res){
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
