// Here are the dependencies //

const express = require('express');
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js')

// The asynchronous proceses is handled here //

const readFileAsync =util.promisify(fs.readFile)
const writeFileAsync=util.promisify(fs.WriireFile)

// creating Port and setting up server //

const PORT = process.env.PORT || 3001;


