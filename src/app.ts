const express = require("express");
const app = express();

app.use(express.json({
   limit: "16kb"
}));
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/urls', require('./routes/urls.routes'))


module.exports = app;