// importing express so we can use it here
const express = require("express");

// function that represent a function from the express
const app = express();



// a function from the express app that decide which port we run our server on.
// to run the server we use this > node server.js 
//which is like running js file
app.listen(3000, function () {
    console.log("you are on the server");
})