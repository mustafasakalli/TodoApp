const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

app.use("/static", express.static("public"));

//connection to db
mongoose.set("useFindAndModify", false);

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log("Connected to db!");
    
    app.listen(3000, () => console.log("Server Up and running"));
});

app.set("view engine", "ejs");

app.get('/',(req, res) => {
    res.render('todo.ejs');
});

// Add extracted data to body property of the request
app.use(express.urlencoded({ extended: true }));

//Use Post method to display data
app.post('/',(req, res) => {
    console.log(req.body);
});



