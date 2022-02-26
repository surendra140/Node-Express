const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();


// bodyparser middleware

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());


// DB config

const db = require("./config/keys").mongoURI;


// connect mongoDB
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log("MongoDB successfully Connected"))
    .catch(err => console.log(err));


const port = process.env.PORT || 5000;  // heroku

app.listen(port, () => console.log(`Server is running on port: ${port} !`));