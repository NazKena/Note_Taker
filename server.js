// Here are the dependencies and Routers //
const express = require('express');
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js')

// Here I have set up the Port and express app //
const PORT = process.env.PORT || 3001;
const app = express();


// The link to the routes //

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start App

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);