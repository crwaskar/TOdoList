//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))


let Items = [];


//using ejs
app.set("view engine", "ejs");
app.set(express.static("public"));

app.post("/", function(req, res) {
    let Item = req.body.newItem;
    // console.log(Item);
    Items.push(Item);
    res.redirect("/");
})

app.get("/", function(req, res) {
    // res.send("Hellow");
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);
    res.render("list", { KindofDay: day, newListItems: Items });

})

app.listen(3000, function() {
    console.log("Running on port 3000");
})