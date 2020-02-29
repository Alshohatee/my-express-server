// importing express so we can use it here
const express = require("express");

// function that represent a express function
const app = express();


app.get("/", function (req, res) {
    //this is the home or the root page
    console.log(res)
    console.log(req)

    res.send(
        "we can send text through this function" + "<h1>sending html</h1>"
    )
})




// a function from the express app that decide which port we run our server on.
// to run the server we use this > node server.js 
//which is like running js file
app.listen(3000, function () {
    console.log("you are on the server");
})