const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 8000;
const db_link = "mongodb://mongo:27017/first_db";

mongoose.connect(db_link, function (err) {
     if (err)
         console.error("Error occurred while connecting to DB!");
     else
         console.log("Database connection established successfully");
});

app.get('/homepage', function(req, res) {
       res.send("Hello, World! Welcome to kickstarter for backend API development ");
});

app.listen(port, function() {
      console.log(`App running successfully on port number ${port}...`);
});

