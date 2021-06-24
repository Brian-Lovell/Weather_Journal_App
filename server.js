// Store project Data
const projectData = {};


//Express setup
const express = require("express");
const app = express();
const port = 2076;

//Dependencies
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
const { response } = require("express");
app.use(cors());


// Start server
const server = app.listen(port, listening);

function listening(){
    console.log(`Example app listening on port ${port}!`);
};

// Initialize website
// app.use(express.static("website"));

// Get route - Return the project data
app.get("/all", function (req,res) {
    res.send(projectData);

});

// Post route - add incoming data to project data
app.post("/weather", function (req,res) {
    projectData.push(req.body);

    console.log("Temperature: ", data.temperature);
    console.log("date: ", data.date);
    console.log("User: ", data.user);
});