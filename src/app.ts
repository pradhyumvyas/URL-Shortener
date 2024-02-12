const express = require("express");
const app = express();



app.use('/api/v1/urls', require('./routes/urls.routes'))


module.exports = app;