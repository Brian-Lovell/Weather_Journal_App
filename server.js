// Requirements
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Start Express
const app = express();
const port = 2076;

//Parse URL-encoded data with querystring library
app.use(bodyParser.urlencoded({ extended: false }));
//  Parse application/json
app.use(bodyParser.json());

// Enable All CORS Requests
app.use(cors());

// Store project Data
let projectData = {};


// Start server
const server = app.listen(port, listening);

function listening(){
    console.log(`Example app listening on port ${port}!`);
};

// Initialize website
app.use(express.static("website"));


// Get route - Return the project data
app.get ('/all', function (req, res) {
    res.send(projectData)
})

// Post route - add incoming data to project data
app.post ('/addWeather', addWeather )

function addWeather (req, res) {
    // console.log(req.body)

    newEntry = {
        date: req.body.date,
        temp: req.body.temp,
        content: req.body.content,
    }
    projectData.push(newEntry)
    res.send(projectData)
    console.log(projectData)
}