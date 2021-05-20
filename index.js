const express = require("express");
const app = express();

app.use("/static", express.static("public"));

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



app.listen(3000, () => console.log("Server Up and running"));