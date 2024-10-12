const express = require('express');
const city = require('./src/routes/city');
const country = require('./src/routes/country');
const countrylanguage = require('./src/routes/countrylanguage');
const app = express();
const port = 4400;

// Use the routes defined in routes.js
app.use('/cities', city);
app.use('/countries', country);
app.use('/countryLanguage', countrylanguage);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});