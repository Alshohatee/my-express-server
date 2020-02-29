// npm install -g nodemon   // rerun the server when the user change something.
//to use it we do nodemon server.js

// importing express so we can use it here
const express = require("express");

const bodyParser = require("body-parser")
// function that represent a express function

const app = express();
// to handle the body-parser using >npm install body-parser and then require it like express
//this is require to to use bodyparser so we can excess the value on the forms
app.use(bodyParser.urlencoded({ extended: true }))

// get function is what specify the route that we want to target
// ex: app.get("/aboutus:")

app.get("/", function (req, res) {
    //this is the home or the root page
    // console.log(res)
    // console.log(req)

    res.send(
        "we can send text through this function" + "<h1>sending html</h1>"
    )
})



app.get("/cal", function (req, res) {
    // send file like html
    // __dirname give the current direction
    res.sendFile(__dirname + "/index.html")

});

app.post("/cal", function (req, res) {
    // we were able to access what coming from the forms
    // the name of num1 after the body is coming form the form name attribute
    var n1 = Number(req.body.num1)
    var n2 = Number(req.body.num2)
    var result = n1 + n2

    res.send("The addition is" + result + "<a href='/cal'>GO back</a>")
})

// a function from the express app that decide which port we run our server on.
// to run the server we use this > node server.js 
//which is like running js file
app.listen(3001, function () {
    console.log("you are on the server");
})



// BMI calculator
app.get("/bmiCalculator", function (req, res) {

    res.sendFile(__dirname + "/bmiCalculator.html")

})

app.post("/bmiCalculator", function (req, res) {

    var w = parseFloat(req.body.width)
    var h = parseFloat(req.body.height)
    var bmi = w / (h * h)
    res.send("The answer " + bmi + "<a href='/bmiCalculator'>GO back</a>")

})